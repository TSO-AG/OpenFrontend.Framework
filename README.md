# OpenFrontend.Framework

If you are a user of the framework, see https://openfrontend.tourismusweb.site for our docs.

## Contributing to the OpenFrontend.Framework

### System requirements

The OpenFrontend.Framework is based upon Bootstrap and self-documented in this repository using [Hugo](https://gohugo.io).
We use [Yarn](https://yarnpkg.com/getting-started/install) which need to be installed on your system to be able to contribute.

### Install dependencies

Installing dependencies is as easy as running Yarn:

```shell
$ yarn install
```

### Building the framework

Everything regarding the framework itself resides in the `src.` folder. To build the distribution package,
run the below command:

```shell
$ yarn dist-build
```

### Building the documentation

Everything regarding the documentation itself resides in the `site` folder. The Hugo specifics are on the root level.

To build the documentation for production, run the command below:

```shell
$ yarn docs-build
```

For the development purposes run the command below to launch the documentation locally
and watch the source files:

```shell
$ yarn docs-serve
```
