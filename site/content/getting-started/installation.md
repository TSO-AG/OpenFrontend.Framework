---
layout: docs
title: Installation
description: Learn how to install the OpenFrontend library in your project
toc: true
---


As the first step, you must install the OpenFrontend library in your project. To do it with [Yarn](https://yarnpkg.com/),
execute the following command:

```shell
$ yarn add https://github.com/TSO-AG/OpenFrontend.Framework.git#main
```

The OpenFrontend does not come with a bundled file, which means you have to build it yourself.
If you are using [Webpack Encore](https://github.com/symfony/webpack-encore), include the JS and CSS files as follows:

```js
import 'openfrontend-framework'
import 'openfrontend-framework/dist/open-frontend.css'
```

This will import all the CSS and JS files into your project build. You can compile your build using Webpack Encore now:

```shell
$ encore production
```

While the build is getting done, ensure you include the viewport meta tag in the `<head>` section of your website:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Now include the compiled build on your page, and you can start using OpenFrontend!

## Create your custom CSS build

Suppose you want to create your custom CSS build to override variables or use mixins. In that case, you can
include the OpenFrontend in your own SCSS file:

```scss
// Include my variables file
@import 'my_variables'

// Include OpenFrontend SCSS files
@import '~openfrontend-framework/src/scss/index'
```

## Using individual JavaScript components

The OpenFrontend loads the JavaScript components lazily. That means the vast part of the JavaScript code
is loaded only on demand and only if it's really needed.

For example, the Tabs-related JavaScript code will be loaded only if specific elements are preset on the page:

```js
import { loadForElements } from 'openfrontend-framework/js/helpers/module-loader';

document.addEventListener('DOMContentLoaded', () => {
    loadForElements(document.querySelectorAll('[data-bs-toggle]'), () => import('openfrontend-framework/js/components/tabs'));
});
```

This approach will significantly improve the loading time of your website without worrying about unused code overload.
However, you can also include specific components by yourself in your custom JavaScripe code:

```js
import 'openfrontend-framework/js/components/tabs'
```

Please note that some components _may_ have the default function to be executed, whereas some may not!
