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

#### Production

Everything regarding the documentation itself resides in the `site` folder. The Hugo specifics are on the root level.

To build the documentation for production, you have to set the `$BASE_URL` environment variable, which contains
a full URL to the documentation:

```shell
$ export BASE_URL=https://domain.tld
$ yarn docs-build
```

The documentation can also be built inside a folder, which helps test new features not part of the stable version yet:

```shell
$ export BASE_URL=https://domain.tld/feature-typography
$ yarn docs-build
```

**Note:** Only the top-level folder is allowed in the base URL.
The following example will cause unexpected behavior: `https://domain.tld/folder/subfolder/`

#### Development

For the development purposes run the command below to launch the documentation locally
and watch the source files:

```shell
$ yarn docs-serve
```
