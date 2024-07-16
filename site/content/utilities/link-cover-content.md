---
layout: docs
title: Link cover content
description: The Link cover content helper is used to add an overlay with text on top of a link.
group: utilities
---

The Link cover content is useful when you want to provide additional information directly over linked images or content. This can enhance user interaction by giving immediate context or details about the link.

## Examples

{{< example >}}
<figure class="w-50">
  <a href="assets/media/sample-gallery-1.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
    <img src="assets/media/sample-gallery-1.jpg" class="aspect aspect-4x3 object-fit-cover" alt="">
    <div class="link-cover-content">+3</div>
  </a>
</figure>

<script data-of-lightbox-config="gallery-1" type="application/json">
  {
  "thumbnails": true,
  "items": [
    {
      "href": "assets/media/sample-gallery-2.jpg",
      "type": "image"
    },
    {
      "href": "assets/media/sample-gallery-3.jpg",
      "type": "image"
    },
    {
      "href": "assets/media/sample-gallery-4.jpg",
      "type": "image"
    }
  ]
  }
</script>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="link-cover-content-css-vars" file="src/scss/_link-cover-content.scss" >}}


### Sass maps

{{< scss-docs name="link-cover-content-variables" file="src/scss/_variables.scss" >}}

