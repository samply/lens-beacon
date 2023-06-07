# Samply.Lens Demo Application

This project holds a demo application for the [samply.lens](https://github.com/samply/lens) project. It's intended usage is to provide an example for developers on how to use samply.lens in their application.
To create your own application with Samply.Lens, you can copy the contents of this repository through the [template repository functionality](https://docs.github.com/de/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template) in github.

## Content of this project
### Development Environment
The [docker-compose.dev.yml](./docker-compose.dev.yml) will provide you with a blaze instance to which the demo application will automatically connect.
So getting started with the demo is as easy as installing all dependencies
``` shell
npm install
```

then starting the dev environment
``` shell
docker-compose -f ./docker-compose.dev.yml up -d 
```

and finally running the demo application
``` shell
npm run start
```

### Some Files you should see as usage reference
- [app.module.ts](./src/app/app.module.ts)
  In this file you can define the translator to use and more.
- [main.component.ts](./src/app/main/main.component.ts)
  In this file you can adjust the displayed diagrams
- [environment.ts](./src/environments/environment.ts)
  Defines the target services for builds in development
- [environment.prod.ts](./src/environments/environment.prod.ts)
  Defines the target services for the production version of lens (used in Docker Image)

### Dockerfile
The [Dockerfile](./Dockerfile) in this project will build an docker image based on nginx containing the application. The [Release Workflow](./.github/workflows/release.yml) then utilizes the [default samply workflow for building docker images](https://github.com/samply/github-workflows/blob/main/.github/workflows/docker-ci.yml)

### Example Configuration for Deploying Lens with Beam
The provided [docker-compose.yml](./docker-compose.yml) will enable you to deploy lens on your server and connect it with a hosted version of the [Samply.Beam Broker](https://github.com/samply/beam). You also need to provide a .env file to docker-compose based on our [example](./example.env).
We also have an [installation script](./install-lens.sh) for your servers, but it is not production ready and should be used with caution.


## What is Samply.Lens?
This question is best answered by reading the README on [Samply.Lens Repository](https://github.com/samply/lens) 

## Developing your Application

### Run the development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
  
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
