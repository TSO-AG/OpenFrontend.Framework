---
layout: docs
title: Anchor navigation
description: Build a navigation that smoothly scrolls to the sections.
group: components
aliases:
  - "/components/"
toc: true
---

## How it works

Navigation toggles the `.active` class on anchor (`<a>`) elements when the element with the `id` referenced by the anchor's `href` is scrolled into view. Anchor navigation is best used in conjunction with a Bootstrap [nav component]({{< docsref "/components/navs-tabs" >}}) or [list group]({{< docsref "/components/list-group" >}}), but it will also work with any anchor elements in the current page. Here's how it works.

- To start, anchor navigation requires two things: a navigation, list group, or a simple set of links, plus a collection of sections to scroll to.

- On the navigation container, add `data-of-anchor-navigation`. If there is no focusable element inside the element, be sure to also include a `tabindex="0"` to ensure keyboard access.

- As you scroll the window, an `.active` class is added and removed from anchor links within the associated navigation. Links must have resolvable `id` targets, otherwise they're ignored. For example, a `<a href="#home">home</a>` must correspond to something in the DOM like `<div id="home"></div>`

- Target elements that are not visible will be ignored. See the [Non-visible elements](#non-visible-elements) section below.

## Example

For the working example, please refer to the [One pager example]({{< docsref "/examples/one-pager" >}}).

Here is the example markup that needs to be generated:

{{< highlight html >}}
<nav data-of-anchor-navigation>
  <ul class="nav nav-underline nav-fill nav-nowrap" data-of-scroll-shadow>
    <li class="nav-item">
      <a class="nav-link" href="#section-1" aria-controls="section-1" aria-selected="false">Section 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#section-2" aria-controls="section-2" aria-selected="false">Section 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#section-3" aria-controls="section-3" aria-selected="false">Section 3</a>
    </li>
  </ul>
</nav>

<div id="section-1">…</div>
<div id="section-2">…</div>
<div id="section-3">…</div>
{{< /highlight >}}

## Usage

### Markup

The required markup for a ticker is only a `data` attribute and CSS class on the HTML element:

```html
<nav data-of-anchor-navigation></nav>
```

### Via JavaScript

Create a anchor navigation with a single line of JavaScript:

```js
const anchorNavigation = await openFrontend.AnchorNavigation.then(component => component.getOrCreateInstance(document.getElementById('anchor-navigation'), options))

// or
const anchorNavigationAlternative = await openFrontend.AnchorNavigation.then(component => component.getOrCreateInstance('#anchor-navigation', options))
```

### Options

You can pass extra options as JSON value of the data attribute. Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `urlHashTracking` | `boolean` | `true` | Enable the URL hash tracking. When the lightbox opens or its slide changes, the URL hash will be updated. |
{{< /bs-table >}}

### Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `initialized.of.anchor_navigation` | This event is fired immediately when the anchor navigation is ready. |
{{< /bs-table >}}

```js
const element = document.getElementById('anchor-navigation')

element.addEventListener('initialized.of.anchor_navigation', () => {
  // do something
})
```
