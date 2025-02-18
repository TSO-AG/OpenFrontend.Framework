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
{{< placeholder width="200" height="200" class="img-thumbnail" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}}
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

With OpenFrontend.Framework, managing the aspect ratios of your images has become even more convenient. This approach provides you with better control and flexibility towards your design needs.

To apply the desired aspect ratio to an image, use the classes in conjunction with `.aspect` and `.object-fit-cover`. The `.aspect` class sets the container's aspect ratio, while `.object-fit-cover` ensures the image scales to fit its container without distortion.

Please refer to the Aspect Ratios helper at this link for the available classes and their corresponding [aspect ratios]({{< docsref "/helpers/aspect-ratio" >}}).

{{< example class="bd-example-image-ratios" >}}
<div>
{{< placeholder width="200" height="200" text="9x16" class="aspect aspect-9x16 object-fit-cover">}}
</div>

<div>
{{< placeholder width="200" height="200" text="3x4" class="aspect aspect-3x4 object-fit-cover">}}
</div>

<div>
{{< placeholder width="200" height="200" text="1x1" class="aspect aspect-1x1 object-fit-cover">}}
</div>

<div>
{{< placeholder width="200" height="200" text="4x3" class="aspect aspect-4x3 object-fit-cover">}}
</div>

<div>
{{< placeholder width="200" height="200" text="16x9" class="aspect aspect-16x9 object-fit-cover">}}
</div>

<div>
{{< placeholder width="200" height="200" text="21x9" class="aspect aspect-21x9 object-fit-cover">}}
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

## Placeholder
{{< example >}}
<div class="aspect aspect-16x9 placeholder-image">
  <!-- Add your image here -->
</div>
{{< /example >}}

## Media attribution

To display an interactive element that contains media attribution, use the `.media-attribution` element and the [Tooltip]({{< docsref "/components/tooltips" >}}) component as follows:

{{< example >}}
<figure class="media-attribution-container">
  <img src="assets/media/sample-gallery-1.jpg" class="aspect aspect-16x9 object-fit-cover" alt="">

  <div class="media-attribution" data-bs-toggle="tooltip" data-bs-title='© 2025 John Doe. All rights reserved. <a href="/about/license" target="_blank" rel="noreferrer noopener">Lizenz</a>' data-bs-placement="left" data-bs-html="true" data-bs-theme="light" data-bs-delay='{"show":0,"hide":2000}'>
    <svg class="of-icon" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
    </svg>
  </div>
</figure>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="media-attribution-css-vars" file="src/scss/_media.scss" >}}

### Sass variables

{{< scss-docs name="media-attribution-variables" file="src/scss/_variables.scss" >}}
{{< scss-docs name="thumbnail-variables" file="node_modules/bootstrap/scss/_variables.scss" >}}
