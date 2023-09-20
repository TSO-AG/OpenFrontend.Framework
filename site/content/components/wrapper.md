---
layout: docs
title: Wrapper
description: Component provides a versatile container with customizable backgrounds, including colors, images, and videos.
group: components
toc: true
---

## Examples

### Background color

#### Light
{{< example >}}
<div class="wrapper wrapper-bg-light">
  <div class="d-flex justify-content-center align-items-center" style="height: 200px">Sample wrapper content</div>
</div>
{{< /example >}}

#### Dark
{{< example >}}
<div class="wrapper wrapper-bg-dark">
  <div class="d-flex justify-content-center align-items-center" style="height: 200px">Sample wrapper content</div>
</div>
{{< /example >}}

#### Custom color
{{< example >}}
<div class="wrapper" style="--bs-wrapper-bg-color: #f47c00; --bs-wrapper-color: #fff;">
  <div class="d-flex justify-content-center align-items-center" style="height: 200px">Sample wrapper content</div>
</div>
{{< /example >}}

### Background image
{{< example >}}
<div class="wrapper">
  <div class="d-flex justify-content-center align-items-center" style="height: 200px">Sample wrapper content</div>

  <div class="wrapper-bg-media">
    <figure>
      {{< placeholder markup="img" width="100%" height="250" background="#f7f8f9" class="bd-placeholder-img-lg" text="Image" >}}
    </figure>
  </div>
</div>
{{< /example >}}

### Background video
{{< example >}}
<div class="wrapper" style="--bs-wrapper-color: #fff;">
  <div class="d-flex justify-content-center align-items-center" style="height: 200px">Sample wrapper content</div>

  <div class="wrapper-bg-media">
    <figure>
      <video autoplay muted playsinline loop>
        <source src="assets/media/sample-video.mp4" type="video/mp4">
        <source src="assets/media/sample-video.ogg" type="video/ogg">
      </video>
    </figure>
  </div>
</div>
{{< /example >}}

With the `--bs-wrapper-media-opacity` variable, we can control the transparency level of the visual element in the background, such as an image or video. Setting this variable allows for the addition of an overlay effect, creating a visually appealing result where the content of the wrapper component is visible through the background.

{{< example >}}
<div class="wrapper" style="--bs-wrapper-bg-color: #f47c00; --bs-wrapper-color: #fff; --bs-wrapper-media-opacity: 0.2">
  <div class="d-flex justify-content-center align-items-center" style="height: 200px">Sample wrapper content</div>

  <div class="wrapper-bg-media">
    <figure>
      <video autoplay muted playsinline loop>
        <source src="assets/media/sample-video.mp4" type="video/mp4">
        <source src="assets/media/sample-video.ogg" type="video/ogg">
      </video>
    </figure>
  </div>
</div>
{{< /example >}}

## CSS

### Variables

Search result variables:

{{< scss-docs name="search-result-css-vars" file="src/scss/_search.scss" >}}

### Sass variables

Search result variables:

{{< scss-docs name="search-result-variables" file="src/scss/_variables.scss" >}}
