# Module Federation / Spring Boot

This is a demo project for Spring Boot with Module Federation and Angular.

## How to run

The project hosts a single Spring Boot application.
The `/application` folder contains the Angular application.
The `/library` folder contains a micro frontend application.
The `/core` folder contains a shared library, both Java and Angular

When both application are built, the Spring Boot application will serve the Angular application and the micro frontend application.

### Install the local core library

The easy way to install core library is having a local `verdaccio` server :

`npm i verdaccio -g`

Then you simply go to the `core/ng-core` project and publish the library on the default port :

`"publish:core:local": "ng build core && cd dist/core && npm publish --registry http://localhost:4873/"`

### Install the core library on both shell and mfe1

You simply install core from local registry :

`npm i core --registry http://localhost:4873/`

Do it on both Angular applications.

### Build the shell and the mfe1

Both projects are configured to be built in the appropriate public Spring folder.
So you simply run build scripts :

```
"build:shell": "ng build --base-href /ng-shell/ --configuration production",
"build:mfe1": "ng build --base-href /ng-shell/mfe1/ --configuration production",
```

### Run Spring Boot application

Run ShellApplication Java class.
You just need to run the application with the proper argument as base path :
`--server.servlet.context-path=/ng-shell`