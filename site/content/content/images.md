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

## CSS

### Sass variables

Variables are available for image thumbnails.

{{< scss-docs name="thumbnail-variables" file="node_modules/bootstrap/scss/_variables.scss" >}}
