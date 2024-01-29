---
layout: docs
title: JavaScript API
description: Learn about the JavaScript API that is delivered by the OpenFrontend library.
group: getting-started
toc: true
---

## General concept

OpenFrontend loads the JavaScript components lazily. That means the vast part of the JavaScript code is loaded only on demand and only if it's really needed.

All components are initialized automatically, but you can still initialize some manually if needed. Read on to find out the details between the two methods.

### Automatic initialization

When the `DOMContentLoaded` event is fired, OpenFrontend will look for all DOM elements containing component-specific selectors and initialize them immediately. This way, we ensure that we load and run the required JavaScript on the current page.

For example, the [Ticker]({{< docsref "/components/ticker" >}}) component would be loaded and initialized only if an element with `data-of-ticker` attribute is present in the DOM:

```html
<div class="ticker" data-of-ticker></div>
```

However, the component elements may be added to the DOM after the `DOMContentLoaded` event is fired (e.g., via Ajax request). In that case, OpenFrontend will *not* initialize them automatically.

There are two ways to tackle this problem: initialize components semi-automatically or manually.

### Semi-automatic initialization

You can call the global method `initOpenFrontend(element)`, which will traverse through all elements inside the container and initialize the components just like it would do on the `DOMContentLoaded` event.

For example, if you would like to initialize components on a newly added HTML buffer:

```js
const container = document.getElementById('#ajax-container')

// Add new elements to the DOM
container.innerHTML = await fetch('endpoint/buffer').then(r => r.text())

// Initialize OpenFrontend for newly added elements
window.initOpenFrontend(container)
```

### Manual initialization

You can also initialize the components yourself. This might be useful if you need to set dynamic (e.g. based on other JavaScript logic) options or interact with the component directly.

For example, if you would like to initialize the [Tooltip]({{< docsref "/components/tooltips" >}}) component after the Ajax request completes:

```js
const content = await fetch('endpoint/tooltip').then(r => r.text())
const tooltip = await openFrontend.Tooltip.then(component => component.getOrCreateInstance('#tooltip', { animation: false }))

tooltip.setContent(content)
tooltip.show()
```

{{< callout info >}}
**Heads up!** Note that every component returns a promise `openFrontend.Component.then(…)`, which needs to be fulfilled before you can use the component.
{{< /callout >}}

## Components

Every JavaScript component has different events, options, and methods. They are described in detail on every component's page. There are some common parts of every component that are described below.

### Events

Almost all events of each component are executed directly on the target elements. You can use the `addEventListener()` method to listen to them. You can find a list of available events on the component's page.

```js
const element = document.getElementById('#example')

element.addEventListener('hidden.bs.tooltip', () => {
  // the tooltip has been hidden!
})
```

### Options

Most of the components in the OpenFrontend library will accept the options as a JSON object passed to their unique data attribute. Every configuration object of each component is described on the component's page.

```html
<div data-of-rating='{"readOnly": true, "score": 3}'></div>
```

If you are initializing the component manually, you can pass the options object as a second argument:

```js
await openFrontend.Rating.then(component => component.getOrCreateInstance('#example', {
  readOnly: true,
  score: 3,
}))
```

### Methods

Apart from individual public methods, they share some methods that are common for all.

The `getInstance()` method will return the current instance of the component on the given element. It will return `null` if there is no instance on the element, or the element does not exist.

```js
const component = await openFrontend.Component.then(component => component.getInstance('#example'))
```

The `getOrCreateInstance()` method will return the current instance of the component on the given element. It will create a new instance if it does not exist yet. However, if the target element does not exist, it will return an incorrectly initialized instance or throw an error!

Using this method, you can also pass the configuration options that will be used if the instance has to be created.

```js
const component = await openFrontend.Component.then(component => component.getOrCreateInstance('#example', { animation: false }))
```

{{< callout danger >}}
**Attention!** Some components *may* expose the internal API, including private methods. Those methods should not be used. You should stick to the public API listed on every component's page.
{{< /callout >}}

## Custom entry point

You can also create your custom JavaScript entry point if you need to limit or extend the existing features. Here is an example of lazy-loading using [Webpack](https://webpack.js.org/):

```js
import { loadForElements } from 'openfrontend-framework/js/helpers/module-loader'

// Initialize the components as soon as they are present in the DOM
document.addEventListener('DOMContentLoaded', () => {
  loadForElements(document.querySelectorAll('[data-of-ticker]'), () => import(/* webpackChunkName: "open-frontend-ticker" */ 'openfrontend-framework/js/components/ticker'), 'initMultiple')
})

// Provide an API that allows to initialize and/or use components in a custom code (optional)
window.openFrontend = {
  get Ticker() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-ticker" */ 'openfrontend-framework/js/components/ticker').then(v => resolve(v.default)))
  }
}
```

This approach will significantly improve the loading time of your website without worrying about unused code overload. However, you can still load some components immediately in your custom JavaScript code:

```js
import 'openfrontend-framework/js/components/ticker'
```

Please note that some components _may_ have the default function to be executed, whereas some may not!

## Methods and properties

Every OpenFrontend plugin exposes the following methods and static properties.

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's modal. (Removes stored data on the DOM element) |
| `getInstance` | *Static* method which allows you to get the modal instance associated with a DOM element. |
| `getOrCreateInstance` | *Static* method which allows you to get the modal instance associated with a DOM element, or create a new one in case it wasn't initialized. |
{{< /bs-table >}}

{{< bs-table "table" >}}
| Static property | Description |
| --- | --- |
| `NAME` | Returns the plugin name. (Example: `openFrontend.Tooltip.NAME`) |
| `VERSION` | The version of each of Bootstrap's plugins can be accessed via the `VERSION` property of the plugin's constructor (Example: `bootstrap.Tooltip.VERSION`) |
{{< /bs-table >}}

## Sanitizer

Tooltips and Popovers use our built-in sanitizer to sanitize options which accept HTML.

The default `allowList` value is the following:

{{< js-docs name="allow-list" file="node_modules/bootstrap/js/src/util/sanitizer.js" >}}

If you want to add new values to this default `allowList` you can do the following:

```js
const myDefaultAllowList = bootstrap.Tooltip.Default.allowList

// To allow table elements
myDefaultAllowList.table = []

// To allow td elements and data-bs-option attributes on td elements
myDefaultAllowList.td = ['data-bs-option']

// You can push your custom regex to validate your attributes.
// Be careful about your regular expressions being too lax
const myCustomRegex = /^data-my-app-[\w-]+/
myDefaultAllowList['*'].push(myCustomRegex)
```

If you want to bypass our sanitizer because you prefer to use a dedicated library, for example [DOMPurify](https://www.npmjs.com/package/dompurify), you should do the following:

```js
const yourTooltipEl = document.querySelector('#yourTooltip')
const tooltip = new bootstrap.Tooltip(yourTooltipEl, {
  sanitizeFn(content) {
    return DOMPurify.sanitize(content)
  }
})
```