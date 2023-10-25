---
layout: docs
title: Elements filter
description: Filter a collection of elements by their attributes or custom logic.
group: components
toc: true
---

## Overview

The elements filter is a JavaScript component that allows the creation of a filterable list of HTML elements. You can initialize the component using the `data-of-elements-filter` attribute.

## Example

The basic example is made of the togglers panel and filterable elements container. The togglers wrapping element must get the `data-of-elements-filter` attribute with a specified target. The target is a parent element of elements that should be filterable.

{{< callout warning >}}
The filterable elements must be <u>direct</u> children of the target element!
{{< /callout >}}

The togglers should receive the `data-of-elements-filter-toggle` attribute with a value that will be searched in the elements. The elements have to receive this value as the `data-of-elements-filter-item` attribute.

{{< example >}}
<ul class="nav nav-pills mb-5" data-of-elements-filter='{ "target": "#single-example" }'>
  <li class="nav-item">
    <button class="nav-link active" data-of-elements-filter-toggle="*">All</button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-of-elements-filter-toggle="green">Green</button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-of-elements-filter-toggle="red">Red</button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-of-elements-filter-toggle="yellow">Yellow</button>
  </li>
</ul>

<div id="single-example" class="row gy-3">
  <div class="col-md-2" data-of-elements-filter-item="green">
    <div class="aspect aspect-1x1 rounded-5 bg-success"></div>
  </div>
  <div class="col-md-2" data-of-elements-filter-item="green">
    <div class="aspect aspect-1x1 rounded-5 bg-success"></div>
  </div>
  <div class="col-md-2" data-of-elements-filter-item="red">
    <div class="aspect aspect-1x1 rounded-5 bg-danger"></div>
  </div>
  <div class="col-md-2" data-of-elements-filter-item="yellow">
    <div class="aspect aspect-1x1 rounded-5 bg-warning"></div>
  </div>
  <div class="col-md-2" data-of-elements-filter-item="green">
    <div class="aspect aspect-1x1 rounded-5 bg-success"></div>
  </div>
  <div class="col-md-2" data-of-elements-filter-item="yellow">
    <div class="aspect aspect-1x1 rounded-5 bg-warning"></div>
  </div>
  <div class="col-md-2" data-of-elements-filter-item="red">
    <div class="aspect aspect-1x1 rounded-5 bg-danger"></div>
  </div>
  <div class="col-md-2" data-of-elements-filter-item="yellow">
    <div class="aspect aspect-1x1 rounded-5 bg-warning"></div>
  </div>
  <div class="col-md-2" data-of-elements-filter-item="green">
    <div class="aspect aspect-1x1 rounded-5 bg-success"></div>
  </div>
  <div class="col-md-2" data-of-elements-filter-item="red">
    <div class="aspect aspect-1x1 rounded-5 bg-danger"></div>
  </div>
  <div class="col-md-2" data-of-elements-filter-item="green">
    <div class="aspect aspect-1x1 rounded-5 bg-success"></div>
  </div>
  <div class="col-md-2" data-of-elements-filter-item="red">
    <div class="aspect aspect-1x1 rounded-5 bg-danger"></div>
  </div>
</div>
{{< /example >}}

## Usage

The elements filter component must be initialized on the HTML element that contains togglers.

### Options

You can pass extra options as JSON value of the data attribute. Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `activeClass` | `string` | `'active'` | The CSS class of active toggler. |
| `hideClass` | `string` | `'d-none'` | The CSS class of hidden element. |
| `initialFilter` | `string` | `undefined` | The value of a filter that should be active when the component is initialized. |
| `target` | `object\|string` | `undefined` | **Required.** The selector or the target element that is a direct parent to filterable elements. |
| `urlHashId` | `string` | `undefined` | A unique ID which will be used to update the current URL hash when elements are filtered. If none is provided, the URL hash will not change. |
{{< /bs-table >}}

### Methods

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `filter` | Filter the elements by provided value. The value can be a function or a string. See the details below. |
{{< /bs-table >}}

```js
const elementsFilter = await openFrontend.ElementsFilter.then(component => component.getInstance('#example')) // Returns a Bootstrap elements filter instance

// filter example
elementsFilter.filter('*')
```

#### Acceptable filter values

The filter function of the component accepts a string or a function.

A string should represent a single value (e.g., `green`), or multiple values separated by commas (e.g., `green,red`). The provided value is compared against the `[data-of-elements-filter-item]` attribute of an element. The element will be shown if it contains at least one value provided in a string; otherwise, it will be hidden.

{{< callout info >}}
To show all items, you have to use the `*` string value.
{{< /callout >}}

```html
<!-- Scenario 1: single toggler value, single element value -->
<button data-of-elements-filter-toggle="green"></button>
<div data-of-elements-filter-item="green"></div> <!-- show -->
<div data-of-elements-filter-item="yellow"></div> <!-- hide -->

<!-- Scenario 2: single toggler value, multiple element values -->
<button data-of-elements-filter-toggle="green"></button>
<div data-of-elements-filter-item="green,red"></div> <!-- show -->
<div data-of-elements-filter-item="yellow,red"></div> <!-- hide -->

<!-- Scenario 3: multiple toggler values, single element value -->
<button data-of-elements-filter-toggle="green,red"></button>
<div data-of-elements-filter-item="green"></div> <!-- show -->
<div data-of-elements-filter-item="red"></div> <!-- show -->
<div data-of-elements-filter-item="yellow"></div> <!-- hide -->

<!-- Scenario 4: multiple toggler values, multiple element values -->
<button data-of-elements-filter-toggle="green,red"></button>
<div data-of-elements-filter-item="yellow,green"></div> <!-- show -->
<div data-of-elements-filter-item="yellow,red"></div> <!-- show -->
<div data-of-elements-filter-item="yellow,blue"></div> <!-- hide -->
```

A function accepts an HTML element and must return a boolean value. It should return `true` if the element should be shown, `false` otherwise.

```js
const elementsFilter = await openFrontend.ElementsFilter.then(component => component.getInstance('#example'))
const select = document.getElementById('#select')

select.addEventListener('change', () => {
  elementsFilter.filter(element => {
    if (select.value === 'all') {
      return true
    }

    return element.dataset.internalValue === select.value
  })
})
```

### Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `initialized.of.elements_filter` | This event is fired immediately when the elements filter is ready to use. |
{{< /bs-table >}}

```js
const element = document.getElementById('elements-filter')

element.addEventListener('initialized.of.elements_filter', async () => {
  const elementsFilter = await openFrontend.ElementsFilter.then(component => component.getInstance(element))
  elementsFilter.filter('*')
})
```
