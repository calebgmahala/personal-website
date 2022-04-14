# Caleb's Personal Website

Caleb Mahala's personal website, portfolio, resume, and art gallary.

* Web Framwork: [NEXT.js](https://nextjs.org/)
* Styles: [Tailwind](https://tailwindcss.com/)
* Content Management System: [Sanity](https://www.sanity.io/)
* Testing: [Cypress](https://www.cypress.io/)

## Getting Started

_(This startup guide is only for Linux/MacOS users. A new guide for Windows may be created in the future)_
To begin, insure that you have [homebrew](https://brew.sh/) installed on your machine.

This project expects you to be using a specific version of node, we recommend using a node version manager specifically [NVM](https://github.com/nvm-sh/nvm)

```shell
brew install nvm
```

### Setting Up Node

_(This command will pull the correct node version out of the `.nvmrc` file)_

```shell
nvm install
```

### Installing Dependencies

This project utilizes workspaces to make installation and project spin up easier.

Make sure you have [yarn](https://yarnpkg.com/) installed on your machine
_(We use yarn instead of NPM because NPM can't handle workspaces properly and the projects fails to run)_

```shell
npm install --global yarn
```

Install dependencies
_(This will install dependencies accross both the studio and web workspace)_

```shell
yarn
```

### Setting Up Environment Variables

Make a copy of the `.env.example` file and name it `.env.local`.

Populate environment variables with correct values _(you may need to reach out to another developer for certain values)_

**Do not edit the `.env.example` file directly unless adding/deleting environment variables to the project or editing environment variable names**

### Spinning Up the Project

Both projects will need spun up in order for the site to work locally

Spin up the web codebase

```shell
npm run web
```

Spin up the studio codebase

```shell
npm run studio
```

## Developing on the project

### Code Editors

For those using [VSCode](https://code.visualstudio.com/), we recommend installing all the recommended extensions listed in this project.

For other editors, you may need to find extensions in order to view linting errors in real time.

### Working With Workspaces

#### Running Commands in Workspaces

Helpful links [NPM](https://docs.npmjs.com/cli/v8/using-npm/workspaces) [Yarn](https://classic.yarnpkg.com/lang/en/docs/workspaces/)

In order to run commands in workspaces, either change directory into the workspace folder and run the script, or add the workspace flag to your command from the root directory.

Examples:

* NPM:

```shell
npm -w <web|studio> run <command>
```

* Yarn:

```shell
yarn workspace <personal-website-web|personal-website-studio> <command>
```

#### Adding Dependencies to a Specific Workspace

There are issues with how NPM manages dependencies between workspaces. Due to this, we use yarn as our package manager. **Do not add dependencies using npm**

Use the following commands to add dependencies to the respective projects:

* Adding dependencies to studio

```shell
yarn workspace personal-website-studio add <dependency list>
```

* Adding dependencies to web

```shell
yarn workspace personal-website-web add <dependency list>
```

### Writing Tests

This project uses [Cypress](https://www.cypress.io/) for testing. This project separates unit tests, end-to-end tests, and component tests since we are only interested in running unit tests on the pre-commit actions and cypress handles component tests separately

#### Opening the Cypress Dashboard

To open the main cypress dashboard, run:

```shell
npm run web:cypress open
```

To open the component cypress dashboard, run:

```shell
npm run web:cypress open-ct
```

#### Running Tests Through the CLI

To run the main test suite, run:

```shell
npm run web:cypress:test
```

To run the unit test suite, run:

```shell
npm run web:cypress:test:unit
```

To run the component test suite, run:

```shell
npm run web:cypress:test:ct
```

### Editing Sanity Schemas

This project uses [sanity-codegen](https://www.sanity.io/plugins/sanity-codegen) to generate typescript types and access sanity data.

After editing types, you need to run the following command to build out the types so that the NEXT.js project can properly type and access sanity data

```shell
npm run generate-types
```

### Pushing Changes

This project uses [husky](https://typicode.github.io/husky/#/) to run pre-commit actions and insure code is linted and passing unit tests. If you have issues commiting, you may need to address linting issues and or failed unit tests

This project uses [circleci](https://circleci.com/) for running tests during the deployment pipeline. Pull requests need to be passing circleci tests in order to be merged

### Deployments

#### Studio

This project has [express](https://expressjs.com/) set up to point at the Sanity build in the event that you want the sanity server running off of a custom host. To build and start the Sanity project, run the following commands:

```shell
npm -w studio run <sanity:build|sanity:build:dev>
npm -w studio run express:build
npm -w studio run express:start
```

#### Web

Deployments are not currently set up
