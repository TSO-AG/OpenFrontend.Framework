---
layout: docs
title: Ticker
description: Add a text ticker to your webpage that scrolls information like on TV news services.
group: components
toc: true
---

## Overview

Things to know when using the ticker component:

- Only one ticker on the page is supported.
- The component fetches the data on a regular basis using the Ajax request.
- The Ajax endpoint must return the response in a specific JSON format described below.
- The data will be fetched every 30 seconds, unless the response returns the `Cache-Control` header with a value `max-age` bigger than `0`.
- The ticker will be shown/hidden automatically depending on the presence of the items.

Got all that? Great, let's see how they work with some examples.

## Ajax response

The Ajax response should return a valid JSON body as shown on the example:

```json
[
  {
    "content": "Reprehenderit adipisicing irure duis aliqua deserunt",
    "url": "https:\/\/domain.tld"
  },
  {
    "content": "Duis aute reprehenderit voluptate",
    "cssClass": "bg-success",
    "icon": "ofi-heart",
    "newWindow": true,
    "url": "https:\/\/domain.tld"
  }
]
```

## Example

Use the below code to add a ticker to your page. The ticker will appear at the top of the page.

<div class="ticker" data-of-ticker='{ "url": "ticker.json" }'></div>

```html
<div class="ticker" data-of-ticker='{ "url": "ticker.json" }'></div>
```

Scroll this page up ⬆️ to see the demo.

## Usage

### Options

The only required option is the `url`. You can pass extra options as JSON value of the data attribute.

Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `bodyCssClass` | `String` | `ticker-show` | The CSS class that is added to the `<body>` element to show the ticker. |
| `pauseOnHover` | `Boolean` | `true` | Pause the scroll on mouse hover. |
| `speedBreakpoint` | `Number` | `767` | The screen width in pixels determining the ticker speed on mobile/desktop. |
| `speedDesktop` | `Number` | `2` | The ticker speed (pixels to move on each iteration) on desktop. |
| `speedMobile` | `Number` | `1` | The ticker speed (pixels to move on each iteration) on mobile devices. |
| `url` | `String` | `null` | Required. The Ajax endpoint URL for items. |
{{< /bs-table >}}

## CSS

{{< scss-docs name="ticker-css-vars" file="src/scss/_ticker.scss" >}}

### Sass variables

{{< scss-docs name="ticker-variables" file="src/scss/_variables.scss" >}}
