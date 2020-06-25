
[![Netlify Status](https://api.netlify.com/api/v1/badges/87d9f619-8f13-47e8-99cc-5167db7294a6/deploy-status)](https://app.netlify.com/sites/fretonator/deploys)

<img src="https://www.fretonator.com/assets/img/og_twitter.png">

## Thanks for checking out the Fretonator!

I’m a qualified music teacher that (somehow) ended up working as a lead software engineer (it’s a long story), and I built this for my husban️d.

He’s a phenomenal guitarist, and over the past few years has worked on learning modes and scale theory for the guitar (with a little help from me). Obviously, the internet is great for this kind of stuff, but what he felt the world wide web was lacking was an interactive and informative tool to could use in his practice sessions that had everything he needed on one single page.

## Enter the Fretonator!

The Fretonator is your new interactive tool for learning common modes on the guitar, understanding the chord theory behind the modes, and most importantly - having a jam.

I am gratefully welcoming feedback from musicians, pull requests from software engineers, and anything else you are willing to contribute.

Thank you and happy jamming!

___

## Technical

The Fretonator is built with:

```
Angular
Angular Universal
Angular Prerender
Netlify
```

### www.fretonator.com

---

This project was generated using [Nx](https://nx.dev).

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@cheadle-farm/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## Generating WebP images

Converts Jpegs to WebP (do this before optimising jpegs)

Dependencies
- cwebp `brew install webp`

`cd` into the images folder and run 

```shell script
find ./ -type f -name '*.jpg' -exec sh -c 'cwebp -q 75 $1 -o "${1%.jpg}.webp"' _ {} \;
```

## Optimising jpegs

Optimises JPEG to 75% compression

Dependencies
- jpegoptim `brew install jpegoptim`

`cd` into the images folder and run 

```shell script
jpegoptim -m75 *.jpg --overwrite
```
