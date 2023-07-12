# OpenFrontend.Framework

If you are a user of the framework, see https://openfrontend.tourismusweb.site for our docs.

## Contributing to the OpenFrontend.Framework

### System requirements

The OpenFrontend.Framework is based upon Bootstrap and self-documented in this repository using [Hugo](https://gohugo.io).
In order to contribute, you have to have

- a functional JavaScript setup

On top of those, we use [Yarn](https://yarnpkg.com/getting-started/install) which need to be installed on your system as well.

### Install dependencies

Installing dependencies is as easy as running Yarn:

1. `yarn install`

### Building the framework

Everything regarding the framework itself resides in `src`.

1. Development: Run `yarn watch`
2. Production: Run `yarn build`

### Building the documentation

Everything regarding the framework itself resides in `site` plus the Hugo specifics on root level. See Hugo docs
for more details.

1. Development: Run `yarn docs-serve`
2. Production: Run `yarn docs-build`
