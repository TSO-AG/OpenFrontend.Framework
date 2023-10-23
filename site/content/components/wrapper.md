---
layout: docs
title: Wrapper
description: Component provides a versatile container with customizable backgrounds, including colors, images, and videos.
group: components
toc: true
---

## Examples

### Background examples

#### Light color
{{< example >}}
<div class="wrapper wrapper-bg-light py-5">
  <div class="wrapper-content text-center">Sample wrapper content</div>
</div>
{{< /example >}}

#### Dark color
{{< example >}}
<div class="wrapper wrapper-bg-dark py-5">
  <div class="wrapper-content text-center">Sample wrapper content</div>
</div>
{{< /example >}}

#### Custom color
{{< example >}}
<div class="wrapper py-5" style="--bs-wrapper-bg-color: #f47c00; --bs-wrapper-color: #fff">
  <div class="wrapper-content text-center">Sample wrapper content</div>
</div>
{{< /example >}}

#### Image
{{< example >}}
<div class="wrapper" style="min-height: 400px">
  <div class="wrapper-content text-center">Sample wrapper content</div>

  <div class="wrapper-bg-media">
    <figure>
      <img src="assets/media/sample-image.jpg" alt="">
    </figure>
  </div>
</div>
{{< /example >}}

#### Video
{{< example >}}
<div class="wrapper" style="--bs-wrapper-color: #fff; min-height: 400px">
  <div class="wrapper-content text-center">Sample wrapper content</div>

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
<div class="wrapper" style="--bs-wrapper-bg-color: #f47c00; --bs-wrapper-color: #fff; --bs-wrapper-media-opacity: 0.2; min-height: 400px">
  <div class="wrapper-content text-center">Sample wrapper content</div>

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

### Content examples

#### Headline and text
{{< example >}}
<div class="wrapper" style="min-height: 400px">
  <div class="wrapper-content">
    <h2>Your next destination</h2>
    <p>Escape ordinary, experience majestic views!</p>
  </div>

  <div class="wrapper-bg-media">
    <figure>
      <img src="assets/media/sample-image.jpg" alt="">
    </figure>
  </div>
</div>
{{< /example >}}

#### Regular link
{{< example >}}
<div class="wrapper" style="min-height: 400px">
  <div class="wrapper-content">
    <h2>Your next destination</h2>
    <p>Escape ordinary, experience majestic views!</p>
    <p>
      <a href="#" class="btn btn-light btn-sm icon-link">Find out more <i class="ofi-arrow-right"></i></a>
    </p>
  </div>

  <div class="wrapper-bg-media">
    <figure>
      <img src="assets/media/sample-image.jpg" alt="">
    </figure>
  </div>
</div>
{{< /example >}}

#### Stretched link

Works great with `.wrapper-zoom` class.

{{< example >}}
<div class="wrapper wrapper-zoom" style="min-height: 400px">
  <div class="wrapper-content">
    <h2>Your next destination</h2>
    <p>Escape ordinary, experience majestic views!</p>
    <p>
      <a href="#" class="btn btn-light btn-sm icon-link stretched-link">Find out more <i class="ofi-arrow-right"></i></a>
    </p>
  </div>

  <div class="wrapper-bg-media">
    <figure>
      <img src="assets/media/sample-image.jpg" alt="">
    </figure>
  </div>
</div>
{{< /example >}}

#### Hidden link

The hidden link will make the whole wrapper clickable, but will not display any text. Works great with `.wrapper-zoom` class.

{{< example >}}
<div class="wrapper wrapper-zoom" style="min-height: 400px">
  <div class="wrapper-content">
    <h2>Earth from space</h2>
    <p>Touch the stars, gaze at Earth's grace!</p>
    <a href="#" class="stretched-link"><span class="visually-hidden">Book now</span></a>
  </div>

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

#### Date & Status
{{< example >}}
<div class="wrapper">
  <div class="wrapper-content-top-right">
    <div class="state state--open">open</div>
  </div>

  <div class="wrapper-content wrapper-content-padding-y-xl text-center">
    <h2>Your next destination</h2>
    <p>Escape ordinary, experience majestic views!</p>
  </div>

  <div class="wrapper-content-bottom-left">
   <div class="date-box">
      <div class="date-box__day">12.</div>
      <div class="date-box__month">OKT.</div>
    </div>
  </div>

  <div class="wrapper-bg-media">
    <figure>
      <img src="assets/media/sample-image.jpg" alt="">
    </figure>
  </div>
</div>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="wrapper-css-vars" file="src/scss/_wrapper.scss" >}}

### Sass variables

{{< scss-docs name="wrapper-variables" file="src/scss/_variables.scss" >}}
