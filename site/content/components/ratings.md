---
layout: docs
title: Ratings
description: The Ratings component of the OpenFrontend.Framework is a versatile and interactive way to incorporate star ratings into your web applications.
group: components
toc: true
---

## Overview
By default, it operates on a scale of 1-5 stars, but this can be easily adjusted. Users can rate items or see average ratings, depending on how you set up the component.

## Examples
To make the most out of the Ratings component, let’s explore its various configuration options, which are provided via JSON attributes.

### Basic example
This example demonstrates a quick and easy way to add the Ratings component to your webpage and retrieve the clicked rating:

{{< example >}}
<div data-of-rating id="rating"></div>

<script>
  const element = document.getElementById('rating');

  element.addEventListener('clicked.of.rating', (event) => {
    alert(`Clicked rating: ${event.detail.rating}`);
    element.rating.readOnly(true);
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

Easily customize your rating icon by setting the icon value to the desired icon class name. You can find the complete list of available icons [here]({{< docsref "/components/icons" >}}).


{{< example >}}
<div class="mb-2">
  <div data-of-rating='{"half": true, "number": 10, "score": 7.5, "icon" : "ofi-heart"}'></div>
</div>
<div>
  <div data-of-rating='{"half": true, "number": 10, "score": 7.5, "icon" : "ofi-heart-fill"}'></div>
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
  <div class="rating rating-lg">
    <i class="star-on-png"></i>
    <i class="star-on-png"></i>
    <i class="star-on-png"></i>
    <i class="star-half-png"></i>
    <i class="star-off-png"></i>
  </div>
</div>

<div class="mb-1">
  <div class="rating">
    <i class="star-on-png"></i>
    <i class="star-on-png"></i>
    <i class="star-on-png"></i>
    <i class="star-half-png"></i>
    <i class="star-off-png"></i>
  </div>
</div>

<div class="mb-4">
  <div class="rating rating-sm">
    <i class="star-on-png"></i>
    <i class="star-on-png"></i>
    <i class="star-on-png"></i>
    <i class="star-half-png"></i>
    <i class="star-off-png"></i>
  </div>
</div>

<div class="mb-1">
  <div class="rating rating-lg">
    <i class="star-on-png ofi-heart-fill"></i>
    <i class="star-on-png ofi-heart-fill"></i>
    <i class="star-on-png ofi-heart-fill"></i>
    <i class="star-half-png ofi-heart-fill"></i>
    <i class="star-off-png ofi-heart-fill"></i>
  </div>
</div>

<div class="mb-1">
  <div class="rating">
    <i class="star-on-png ofi-heart-fill"></i>
    <i class="star-on-png ofi-heart-fill"></i>
    <i class="star-on-png ofi-heart-fill"></i>
    <i class="star-half-png ofi-heart-fill"></i>
    <i class="star-off-png ofi-heart-fill"></i>
  </div>
</div>

<div>
  <div class="rating rating-sm">
    <i class="star-on-png ofi-heart-fill"></i>
    <i class="star-on-png ofi-heart-fill"></i>
    <i class="star-on-png ofi-heart-fill"></i>
    <i class="star-half-png ofi-heart-fill"></i>
    <i class="star-off-png ofi-heart-fill"></i>
  </div>
</div>

{{< /example >}}
## Usage

### Methods

{{< callout danger >}}
The `element.rating` contains an instance of the rating, including all **private** properties and methods. Use with caution!
{{< /callout >}}

### Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `clicked.of.rating` | This event is fired when a rating star is clicked. |
{{< /bs-table >}}

```js
const element = document.getElementById('rating')

element.addEventListener('clicked.of.rating', event => {
  // Clicked rating: event.detail.rating
  element.rating.readOnly(true)
})
```

### Options

You can pass extra options as JSON value of the data attribute.

Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `half` | `Boolean` | `false` | Enables half star selection. |
| `icon` | `String` | `null` | Icon CSS class. |
| `number` | `Number` | `5` | The number of stars that will be presented. |
| `readOnly` | `Boolean` | `false` | Turns the rating read-only. |
| `score` | `Number` | `undefined` | Initial rating. |
{{< /bs-table >}}

## CSS

### Sass variables

{{< scss-docs name="rating-variables" file="src/scss/_variables.scss" >}}
