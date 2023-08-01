---
layout: docs
title: Images
description: Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.
group: content
toc: true
---

## Responsive images

Images in Bootstrap are made responsive with `.img-fluid`. This applies `max-width: 100%;` and `height: auto;` to the
image so that it scales with the parent width.

{{< example >}}
{{< placeholder width="100%" height="250" class="bd-placeholder-img-lg img-fluid" text="Responsive image" >}}
{{< /example >}}

## Image thumbnails

In addition to our [border-radius utilities]({{< docsref "/utilities/borders" >}}), you can use `.img-thumbnail` to give
an image a rounded 1px border appearance.

{{< example >}}
{{< placeholder width="200" height="200" class="img-thumbnail" title="A generic square placeholder image with a white
border around it, making it resemble a photograph taken with an old instant camera" >}}
{{< /example >}}

## Aligning images

Align images with the [helper float classes]({{< docsref "/utilities/float" >}}) or [text alignment classes]({{<
docsref "/utilities/text#text-alignment" >}}). `block`-level images can be centered
using [the `.mx-auto` margin utility class]({{< docsref "/utilities/spacing#horizontal-centering" >}}).

{{< example >}}
{{< placeholder width="200" height="200" class="rounded float-start" >}}
{{< placeholder width="200" height="200" class="rounded float-end" >}}
{{< /example >}}

{{< example >}}
{{< placeholder width="200" height="200" class="rounded mx-auto d-block" >}}
{{< /example >}}

{{< example >}}
<div class="text-center">
  {{< placeholder width="200" height="200" class="rounded" >}}
</div>
{{< /example >}}

## Image ratios

OpenFrontend.Framework's `img-ratio` utility classes offer an effortless method to manage the aspect ratios of your
images, ensuring an adaptable, responsive design across all device types. When an image is enclosed within a div
utilizing an `img-ratio` class, the image will fill its containing block completely, thanks to the `object-fit: cover;`
style.

You can pair any ratio class from the OpenFrontend.Framework [Ratios]({{< docsref "/helpers/ratio" >}}) helper with
img-ratio to meet your design needs.

Below, you'll find examples demonstrating how to use the `img-ratio` classes within your project:

{{< example class="bd-example-image-ratios" >}}
<div class="img-ratio ratio-9x16">
{{< placeholder width="200" height="200" text="9x16">}}
</div>

<div class="img-ratio ratio-3x4">
{{< placeholder width="200" height="200" text="3x4">}}
</div>

<div class="img-ratio ratio-1x1">
{{< placeholder width="200" height="200" text="1x1">}}
</div>

<div class="img-ratio ratio-4x3">
{{< placeholder width="200" height="200" text="4x3">}}
</div>

<div class="img-ratio ratio-16x9">
{{< placeholder width="200" height="200" text="16x9">}}
</div>

<div class="img-ratio ratio-21x9">
{{< placeholder width="200" height="200" text="21x9">}}
</div>

{{< /example >}}

## Picture

If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to
add the `.img-*` classes to the `<img>` and not to the `<picture>` tag.

```html

<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
```

## CSS

### Sass variables

Variables are available for image thumbnails.

{{< scss-docs name="thumbnail-variables" file="node_modules/bootstrap/scss/_variables.scss" >}}
