#!/usr/bin/env bash
# Usage:
# Download with: curl -fsSL https://github.com/samply/lens-demo/-/raw/main/install-lens.sh -o install-lens.sh
# Run the Script: sudo sh ./install-lens.sh

read_random () {
  sed 's/[-]//g' /proc/sys/kernel/random/uuid | head -c 20;
}

# see: https://unix.stackexchange.com/a/539229
systemctl_exists () {
  [ "$(systemctl list-unit-files "${1}*" | wc -l)" -gt 3 ]
}

if ! systemctl_exists verbis; then
  echo "Warning: We strongly recommend to use the verbis-system-unit files. You can find installation instructions here: https://git.verbis.dkfz.de/infra/verbis-systemd"
fi

# installation directory to install lens
install_dir=${install_dir:=/srv/docker/lens}

# access_token for gitlab to clone the repository, will be removed when moving to github
if [ ! -d "${install_dir}" ] && [ -z "${access_token}" ]; then
  read -p "Please provide a gitlab access token with name $(hostname) for downloading the lens repository: " access_token;
fi;

# id of the beam broker lens should connect to, set to "not-needed" if you don't need beam
if [ -z "${broker_id}" ]; then
  read -p "Please provide the id of the beam broker you want to connect to (e.g: broker.example.domain.org). If you don't want to use lens with a broker, write 'not-needed': " broker_id;
fi;

# client_id the beam delivered with lens should use
if [ "${broker_id}" != "not-needed" ] && [ -z "${client_id}" ]; then
  read -p "Please provide the id your servers beam client should request from the broker (default: lens): " client_id;
  client_id=${client_id:=lens}
fi;

# id of the beam broker lens should connect to, set to "not-needed" if you don't need beam
if [ -z "${gui_domain}" ]; then
  read -p "Please provide the domain which users will use to access lens (e.g: example.domain.org): " gui_domain;
fi;

# the client id used to authentificate with a oidc service
if [ -z "${oidc_client_id}" ]; then
  read -p "Please provide the client id for your authentication provider (oidc). If you don't want to enable oidc, leave this empty: " oidc_client_id;
fi;

# the client secret used to authentificate with a oidc service
if [ -n "${oidc_client_id}" ] && [ -z "$oidc_client_secret" ]; then
  read -p "Please provide the client secret for your authentication provider (oidc): " oidc_client_secret;
fi;

if test ! -d "${install_dir}"; then
  git clone "https://$(hostname):$access_token@git.verbis.dkfz.de/torbens-prototypen/lens.git" "${install_dir}";
  git -C "${install_dir}" checkout --track origin/develop;
else
  echo "Detected that ${install_dir} already has content. Not cloning lens again.";
fi


proxy_id="${client_id}.${broker_id}"
priv_key_file="/etc/lens/pki/${client_id}.priv.pem"

if [ "${broker_id}" != "not-needed" ] && [ ! -e "${priv_key_file}" ]; then
  docker run --rm -ti -v \
    /etc/lens/pki:/etc/lens/pki \
    samply/beam-enroll:latest \
    --output-file "${priv_key_file}" \
    --proxy-id "${proxy_id}" \
    --admin-email verbis-it@dkfz-heidelberg.de;
  chmod 600 "/etc/lens/pki/${client_id}.priv.pem"
fi

# Construct the .env file, will override previous iterations and store them to .env.bk
lens_config="$install_dir/.env"
if test -f "${lens_config}"; then
  echo "Detected previous configuration, moving ${lens_config} -> ${install_dir}/.env.bk"
  mv "${lens_config}" "${install_dir}/.env.bk";
fi

{
  echo "LOCAL_BEAM_ID=${client_id}"
  echo "LOCAL_BEAM_SECRET=$(read_random)"
  echo "BROKER_HOST=${broker_id}"
  echo "GUI_HOST=${gui_domain}"
  if [ -n "${oidc_client_id}" ]; then
    echo "AUTHENTICATION_SECRET=$(read_random)"
    echo "OAUTH_CLIENT_ID=${oidc_client_id}"
    echo "OAUTH_CLIENT_SECRET=${oidc_client_secret}"
  fi
} > "${lens_config}";

if systemctl_exists verbis; then
  systemctl enable verbis@lens
  systemctl enable --now verbis-update@lens.timer
  echo "Configured the system unit verbis@lens. Either restart your system or run 'systemctl start verbis@lens' to start your instance."
else
  echo "Finished the configuration of lens on your system. You can now start lens with 'cd /srv/docker/lens && docker-compose up -d'"
fi
