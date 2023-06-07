FROM node:lts as build
WORKDIR /usr/src/app
RUN sh -c '[ -z "$http_proxy" ] || ( npm config set proxy $http_proxy; npm config set https-proxy $http_proxy )'
COPY package.json package-lock.json ./
RUN npm install
COPY ./angular.json ./tsconfig.json ./tsconfig.app.json ./tsconfig.spec.json ./
COPY ./src ./src
RUN npm run build

FROM nginx:stable-alpine
ENV NGINX_PORT=80 NGINX_DEPLOYMENT_CONTEXT=/
COPY nginx.conf /etc/nginx/templates/nginx.conf.template
COPY --from=build /usr/src/app/dist/* /usr/share/nginx/html/
