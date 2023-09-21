---
layout: docs
title: Ticker
description: Add a text ticker to your webpage that scrolls information like on TV news services.
group: components
toc: true
---

## Overview

Things to know when using the ticker component:

- Items to be displayed inside the ticker can be passed on initialization, but can also be updated using `ticker.setItems(items)` method.
- The ticker will be shown/hidden automatically depending on the presence of the items.

Got all that? Great, let's see how they work with some examples.

## Example

### Initialize with items

Use the below code to add a sample ticker to your page:

{{< example >}}
<div class="ticker" data-of-ticker='{
  "items": [
    {
      "content": "Warning! The OpenFrontend library is here!"
    },
    {
      "content": "You will love it from the first sight!",
      "cssClass": "bg-success",
      "icon": "ofi-heart",
      "newWindow": true,
      "url": "https://openfrontend.tourismusweb.site/"
    }
  ]
}'></div>
{{< /example >}}

### Fetch items dynamically

You can fetch the items via Ajax request like shown below:

{{< example >}}
<div id="ticker" class="ticker" data-of-ticker></div>

<script>
  const element = document.getElementById('ticker');

  element.addEventListener('initialized.of.ticker', () => {
    fetch('ticker.json')
      .then(r => r.json())
      .then(items => bootstrap.Ticker.then(component => component.getInstance(element).setItems(items)));
  });
</script>
{{< /example >}}

## Usage

### Markup

The required markup for a ticker is only a `data` attribute and CSS class on the HTML element:

```html
<div class="ticker" data-of-ticker></div>
```

### Methods

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `setItems` | Set the array of items. See the item data structure below for details. |
{{< /bs-table >}}

```js
const ticker = await bootstrap.Ticker.then(component => component.getInstance('#example')) // Returns a Bootstrap ticker instance

// setItems example
ticker.setItems([])
```

#### Item data structure

The ticker accepts multiple items as data source. The only required property is the `content` of an item. You can pass extra item data as shown below:

```js
const items = [
  {
    content: 'Elit laboris commodo elit dolore', // content of the item (required)
  },
  {
    content: 'Duis aute reprehenderit voluptate',
    cssClass: 'bg-success', // custom CSS class (optional)
    icon: 'ofi-heart', // custom icon (optional)
    newWindow: true, // open link in a new window (optional)
    url: 'https://domain.tld', // URL of the link (optional)
  }
]
```

### Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `initialized.of.ticker` | This event is fired immediately when the ticker is ready to be displayed. |
{{< /bs-table >}}

```js
const element = document.getElementById('ticker')

element.addEventListener('initialized.of.ticker', () => {
  bootstrap.Ticker.then(component => component.getInstance(element).setItems([/* ... */]))
})
```

### Options

You can pass extra options as JSON value of the data attribute. Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `appendToBody` | `boolean` | `false` | The ticker element will be appended to the `<body>`. |
| `items` | `array` | `[]` | The items to be displayed. Use the `setItems()` method to dynamically set ticker items. |
| `pauseOnHover` | `boolean` | `true` | Pause the scroll on mouse hover. |
| `prependToBody` | `boolean` | `false` | The ticker element will be prepended to the `<body>`. |
| `speedDesktop` | `number` | `2` | The ticker speed (pixels to move on each iteration) on desktop. |
| `speedMobile` | `number` | `1` | The ticker speed (pixels to move on each iteration) on mobile devices. |
| `speedMobileQuery` | `string` | `'(max-width: 767px)'` | The CSS media query determining the ticker speed on mobile. |
{{< /bs-table >}}

## CSS

{{< scss-docs name="ticker-css-vars" file="src/scss/_ticker.scss" >}}

### Sass variables

{{< scss-docs name="ticker-variables" file="src/scss/_variables.scss" >}}
