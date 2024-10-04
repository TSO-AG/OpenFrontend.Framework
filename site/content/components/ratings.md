---
layout: docs
title: Ratings
description: The Ratings component of the OpenFrontend.Framework is a versatile and interactive way to incorporate star ratings into your web applications.
group: components
toc: true
---

## Overview
By default, it operates on a scale of 1-5 stars, but this can be easily adjusted. Users can rate items or see average ratings, depending on how you set up the component.

{{< callout info >}}
The component uses the [Raty](https://github.com/wbotelhos/raty) library behind the scenes.
{{< /callout >}}

## Examples
To make the most out of the Ratings component, let’s explore its various configuration options, which are provided via JSON attributes.

### Basic example
This example demonstrates a quick and easy way to add the Ratings component to your webpage and retrieve the clicked rating:

{{< example >}}
<div data-of-rating id="rating"></div>

<script>
  const element = document.getElementById('rating');

  element.addEventListener('clicked.of.rating', async (event) => {
    alert(`Clicked rating: ${event.detail.rating}`)

    const rating = await openFrontend.Rating.then(component => component.getInstance(element))
    rating.setReadOnly(true)
  });
</script>
{{< /example >}}

### Default score
You can preset a score for the Ratings component, which might represent an average score from multiple users. This is achieved using the JSON configuration.

{{< example >}}
<div data-of-rating='{"score": 3}'></div>
{{< /example >}}

### Read-only
To display a rating without allowing further user interactions (e.g., in cases where you just want to show an average score), use the JSON configuration with the `readOnly` property

{{< example >}}
<div data-of-rating='{"score": 3, "readOnly": true}'></div>
{{< /example >}}

### Half-star increments
The Ratings component supports half-star increments, offering a more refined scoring system, especially useful for averages that fall between whole numbers. To enable this feature, it's essential to set the `half` attribute to `true` within the JSON configuration. You can also adjust the `number` property to define the maximum number of stars, if you wish to operate on scales other than the default 1-5.

{{< example >}}
<div data-of-rating='{"half": true, "number": 10, "score": 7.5}'></div>
{{< /example >}}

With this configuration, you'll have a 10-star rating system with the current score set at 7.5 stars.

### Custom icon

Customizing the rating icon in your application is both straightforward and flexible. To set your icon, use the CSS variable `--bs-rating-icon` within the style attribute of your rating element. This approach allows for direct embedding of SVG icons. Here’s how you can embed an SVG directly:

{{< example >}}
<div class="mb-2">
  <div style="--bs-rating-icon: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15\'/%3E%3C/svg%3E');" data-of-rating='{"half": true, "number": 10, "score": 7.5}'></div>
</div>
<div>
  <div style="--bs-rating-icon: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314\'/%3E%3C/svg%3E');" data-of-rating='{"half": true, "number": 10, "score": 7.5}'></div>
</div>
{{< /example >}}

### Size
Fancy larger or smaller rating? Add `.rating-lg` or `.rating-sm` for additional sizes.

{{< example >}}
<div class="rating-lg" data-of-rating='{"score": 3}'></div>
{{< /example >}}

{{< example >}}
<div class="rating-sm" data-of-rating='{"score": 3}'></div>
{{< /example >}}

You can even roll your own custom sizing with CSS variables:

{{< example >}}
<div data-of-rating='{"score": 3}' style="--bs-rating-font-size: .25rem;"></div>
{{< /example >}}


### Static HTML
You can also embed static HTML code for a simple rating display, some examples below

{{< example >}}
<div class="mb-1">
  <div class="rating rating-lg" role="img" aria-label="Rating: 3.5 out of 5 stars">
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-half" aria-hidden="true"></i>
    <i class="star-off" aria-hidden="true"></i>
  </div>
</div>

<div class="mb-1">
  <div class="rating" role="img" aria-label="Rating: 3.5 out of 5 stars">
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-half" aria-hidden="true"></i>
    <i class="star-off" aria-hidden="true"></i>
  </div>
</div>

<div class="mb-4">
  <div class="rating rating-sm" role="img" aria-label="Rating: 3.5 out of 5 stars">
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-half" aria-hidden="true"></i>
    <i class="star-off" aria-hidden="true"></i>
  </div>
</div>

<div class="mb-1">
  <div class="rating rating-lg" role="img" aria-label="Rating: 3.5 out of 5 stars">
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-half" aria-hidden="true"></i>
    <i class="star-off" aria-hidden="true"></i>
  </div>
</div>

<div class="mb-1">
  <div class="rating" role="img" aria-label="Rating: 3.5 out of 5 stars">
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-half" aria-hidden="true"></i>
    <i class="star-off" aria-hidden="true"></i>
  </div>
</div>

<div>
  <div class="rating rating-sm" role="img" aria-label="Rating: 3.5 out of 5 stars">
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-on" aria-hidden="true"></i>
    <i class="star-half" aria-hidden="true"></i>
    <i class="star-off" aria-hidden="true"></i>
  </div>
</div>

{{< /example >}}

## Usage

### Options

You can pass extra options as JSON value of the data attribute.

Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `half` | `boolean` | `false` | Enables half star selection. |
| `number` | `number` | `5` | The number of stars that will be presented. |
| `readOnly` | `boolean` | `false` | Turns the rating read-only. |
| `score` | `number` | `undefined` | Initial rating. |
| `targetScore` | `string` | `undefined` | The query selector of a hidden field to update the value. |
{{< /bs-table >}}

### Methods

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `setReadOnly` | Switch the read-only mode on/off. Accepts a `boolean` value. |
{{< /bs-table >}}

```js
const rating = await openFrontend.Rating.then(component => component.getInstance('#example')) // Returns a Bootstrap rating instance

// setReadOnly example
rating.setReadOnly(true)
```

### Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `clicked.of.rating` | This event is fired when a rating star is clicked. |
{{< /bs-table >}}

```js
const element = document.getElementById('rating')

element.addEventListener('clicked.of.rating', event => {
  alert(`Clicked rating: ${event.detail.rating}`)
})
```

## CSS

### Sass variables

{{< scss-docs name="rating-variables" file="src/scss/_variables.scss" >}}
