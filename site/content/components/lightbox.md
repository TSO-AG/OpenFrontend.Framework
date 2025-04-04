---
layout: docs
title: Lightbox
description: This component allows you to open images, videos, iframes, or other inline types in a lightbox.
group: components
toc: true
---

## How it works

The lightbox can open content of multiple types, including images, videos, iframes and inline HTML. Each item can be opened in single mode or as element of a bigger group.

The lightbox groups may contain extra configuration options like tabs or thumbnails.

{{< callout info >}}
The component uses the [GLightbox](https://github.com/biati-digital/glightbox) library behind the scenes.
{{< /callout >}}

## Usage

### Open a single item

To open a single item in the lightbox, add the `data-of-lightbox` attribute to `<a>` that points to the full-size image. The `data-of-lightbox` optionally accepts the item options (e.g. description) in a JSON format.

{{< example >}}
<figure class="w-50">
  <a href="assets/media/sample-gallery-1.jpg" data-of-lightbox>
    <img src="assets/media/sample-gallery-1.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
  </a>
</figure>
{{< /example >}}

### Open multiple items

Multiple items can be grouped into the lightbox gallery using a common lightbox `group` identifier:

{{< example >}}
<div class="row">
  <div class="col-3">
    <figure>
      <a data-of-lightbox='{ "group": "image-gallery" }' href="assets/media/sample-gallery-1.jpg">
        <img src="assets/media/sample-gallery-1.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a data-of-lightbox='{ "group": "image-gallery", "identifier": "my-favorite", "title": "This is my favorite image" }' href="assets/media/sample-gallery-2.jpg">
        <img src="assets/media/sample-gallery-2.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a data-of-lightbox='{ "group": "image-gallery" }' href="assets/media/sample-gallery-3.jpg">
        <img src="assets/media/sample-gallery-3.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a data-of-lightbox='{ "group": "image-gallery" }' href="assets/media/sample-gallery-4.jpg">
        <img src="assets/media/sample-gallery-4.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
</div>
{{< /example >}}

### Lightbox triggers

You can define some custom lightbox triggers, that are not actual lightbox items. Simply use the `data-of-lightbox-open` attribute on anything that is clickable, and provide the lightbox group identifier.

{{< example >}}
<button data-of-lightbox-open="image-gallery" class="btn btn-primary">Open image gallery</button>
{{< /example >}}

You can reference an exact item in the opened lightbox, by adding the lightbox item index in the following format: `<group_identifier>:<index>`. Note that the index starts from zero.

{{< example >}}
<button data-of-lightbox-open="image-gallery:2" class="btn btn-primary">Open the third image</button>
{{< /example >}}

You can also reference an exact item with the lightbox item identifier in the following format: `<group_identifier>:<item_identifier>`. Note that the item must have its unique identifier set.

{{< example >}}
<button data-of-lightbox-open="image-gallery:my-favorite" class="btn btn-primary">Open my favorite image</button>
{{< /example >}}

### Custom definition

You can also define the lightbox items directly in the lightbox options. It may be useful if you don't want to show any image thumbs on the website, but still open the image lightbox on trigger element click. You can read more about lightbox options in the next section.

The lightbox trigger must reference the `<script>` tag. In the `data-of-lightbox-open` attribute you have to refer to the same `data-of-lightbox-config` attribute value.

{{< example >}}
<button data-of-lightbox-open="custom" class="btn btn-primary">Open a hidden gallery</button>

<script data-of-lightbox-config="custom" type="application/json">
  {
    "items": [
      {
        "identifier": "custom-1",
        "type": "image",
        "href": "assets/media/sample-gallery-1.jpg",
        "title": "My Title",
        "description": "Example"
      },
      {
        "identifier": "custom-2",
        "type": "video",
        "href": "https://www.youtube.com/watch?v=Ga6RYejo6Hk",
        "source": "youtube"
      },
      {
        "identifier": "custom-3",
        "type": "inline",
        "content": "<p>This will append some html inside the slide</p>"
      }
    ]
  }
</script>
{{< /example >}}

### Thumbnails

To display thumbnails in lightbox, you have to set the `thumbnails: true` in the lightbox options. When this feature is enabled, the lightbox will use the original image as a thumbnail.

{{< callout info >}}
**Good to know!** For content types that are not images (e.g., `video` or `inline`), a placeholder will be displayed instead. Continue reading on how to set a custom thumbnail.
{{< /callout >}}

{{< example >}}
<script data-of-lightbox-config="thumbnails" type="application/json">
  {
    "thumbnails": true
  }
</script>

<div class="row">
  <div class="col-3">
    <figure>
      <a data-of-lightbox='{ "group": "thumbnails" }' href="assets/media/sample-gallery-1.jpg">
        <img src="assets/media/sample-gallery-1.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a data-of-lightbox='{ "group": "thumbnails" }' href="assets/media/sample-gallery-2.jpg">
        <img src="assets/media/sample-gallery-2.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a data-of-lightbox='{ "group": "thumbnails" }' href="assets/media/sample-gallery-3.jpg">
        <img src="assets/media/sample-gallery-3.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a data-of-lightbox='{ "group": "thumbnails" }' href="assets/media/sample-gallery-4.jpg">
        <img src="assets/media/sample-gallery-4.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
</div>
{{< /example >}}

You can also define a custom thumbnail on your own. Simply add the `thumbnail` option to the lightbox item that should receive it:

```html
<a data-of-lightbox='{ "thumbnail": "path/to/custom-thumbnail.jpg" }' href="…">
  <img src="…" alt="">
</a>
```

Naturally, you can also define it in the lightbox options:

```html
<script data-of-lightbox-config="thumbnails" type="application/json">
    {
        "thumbnails": true,
        "items": [
            {
                "href": "https://www.youtube.com/watch?v=Ga6RYejo6Hk",
                "type": "video",
                "source": "youtube",
                "thumbnail": "path/to/custom-thumbnail.jpg"
            }
        ]
    }
</script>
```

### Tabs navigation

Having a complex gallery with different groups and mixed content types is not a problem with the tabs feature.

{{< callout info >}}
**Heads up!** The tabs feature does not require the thumbnails to be enabled, but they play very nicely together.
{{< /callout >}}

{{< example >}}
<!-- Lightbox options -->
<script data-of-lightbox-config="tabs" type="application/json">
  {
    "thumbnails": true,
    "tabs": [
      {
        "name": "Mountains",
        "items": [
          {
            "identifier": "gallery-mountains-1",
            "href": "assets/media/sample-gallery-1.jpg",
            "type": "image",
            "title": "My Title",
            "description": "Example"
          },
          {
            "identifier": "gallery-mountains-2",
            "href": "assets/media/sample-gallery-2.jpg",
            "type": "image",
            "title": "My Title 2",
            "description": "Example 2"
          },
          {
            "identifier": "gallery-mountains-3",
            "href": "assets/media/sample-gallery-3.jpg",
            "type": "image"
          },
          {
            "identifier": "gallery-mountains-4",
            "href": "assets/media/sample-gallery-4.jpg",
            "type": "image"
          },
          {
            "identifier": "gallery-mountains-5",
            "href": "assets/media/sample-gallery-5.jpg",
            "type": "image"
          },
          {
            "identifier": "gallery-mountains-6",
            "href": "assets/media/sample-gallery-6.jpg",
            "type": "image"
          },
          {
            "identifier": "gallery-mountains-7",
            "href": "assets/media/sample-gallery-7.jpg",
            "type": "image"
          },
          {
            "identifier": "gallery-mountains-8",
            "href": "assets/media/sample-gallery-8.jpg",
            "type": "image"
          },
          {
            "identifier": "gallery-mountains-9",
            "href": "assets/media/sample-gallery-9.jpg",
            "type": "image"
          },
          {
            "identifier": "gallery-mountains-10",
            "href": "assets/media/sample-gallery-10.jpg",
            "type": "image"
          }
        ]
      },
      {
        "name": "Space",
        "items": [
          {
            "identifier": "gallery-space-1",
            "href": "assets/media/sample-gallery-11.jpg",
            "type": "image",
            "title": "My Title",
            "description": "Example"
          },
          {
            "identifier": "gallery-space-2",
            "href": "assets/media/sample-gallery-12.jpg",
            "type": "image"
          },
          {
            "identifier": "gallery-space-3",
            "href": "assets/media/sample-gallery-13.jpg",
            "type": "image"
          },
          {
            "identifier": "gallery-space-4",
            "href": "assets/media/sample-gallery-14.jpg",
            "type": "image"
          }
        ]
      },
    {
      "name": "Videos",
      "items": [
        {
          "identifier": "video",
          "href": "../../assets/media/sample-video.mp4",
          "type": "video",
          "source": "local"
        },
        {
          "identifier": "youtube",
          "href": "https://www.youtube.com/watch?v=Ga6RYejo6Hk",
          "type": "video",
          "source": "youtube"
        },
        {
          "identifier": "vimeo",
          "href": "https://vimeo.com/115041822",
          "type": "video",
          "source": "vimeo"
        },
        {
          "identifier": "youtube",
          "href": "https://www.youtube.com/watch?v=zpOULjyy-n8",
          "type": "video",
          "source": "youtube"
        }
      ]
    },
      {
        "name": "Map",
        "items": [
          {
            "identifier": "map-1",
            "href": "https://www.openstreetmap.org/export/embed.html?bbox=9.311041831970217%2C47.39439835079049%2C9.384942054748537%2C47.432383951962365&amp;layer=mapnik&amp;marker=47.413394576333644%2C9.347991943359375"
          }
        ]
      }
    ]
  }
</script>

<!-- Lightbox triggers -->
<div class="mb-4">
  <a href="#" class="btn btn-primary" data-of-lightbox-open="tabs:gallery-space-3">Open third space image</a>
  <a href="#" class="btn btn-primary" data-of-lightbox-open="tabs:map-1">Open the map</a>
</div>

<!-- Regular tabs -->
<nav class="mb-2">
  <div class="nav nav-tabs nav-tabs-horizontal" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-gallery-1-tab" data-bs-toggle="tab" data-bs-target="#nav-gallery-mountains" type="button" role="tab" aria-controls="nav-gallery-mountains" aria-selected="true">Mountains</button>
    <button class="nav-link" id="nav-gallery-space-tab" data-bs-toggle="tab" data-bs-target="#nav-gallery-space" type="button" role="tab" aria-controls="gallery-space" aria-selected="false">Space</button>
    <button class="nav-link" id="nav-videos-tab" data-bs-toggle="tab" data-bs-target="#nav-videos" type="button" role="tab" aria-controls="nav-videos" aria-selected="false">Videos</button>
    <button class="nav-link" id="nav-map-tab" data-bs-toggle="tab" data-bs-target="#nav-map" type="button" role="tab" aria-controls="nav-map" aria-selected="false">Map</button>
    <button class="nav-link icon-link ms-auto" data-of-lightbox-open="tabs:0">Show all media {{< icon name="arrow-right" >}}</button>
  </div>
</nav>

<div class="tab-content" id="nav-tabContent">
  <!-- Mountains tab -->
  <div class="tab-pane fade show active" id="nav-gallery-mountains" role="tabpanel" aria-labelledby="nav-gallery-mountains-tab" tabindex="0">
    <div class="masonry masonry-pattern-1">
      <div class="masonry-item">
        <div class="aspect aspect-16x9 aspect-md-4x3 aspect-xl-auto">
          <a href="assets/media/sample-gallery-1.jpg" data-of-lightbox-open="tabs:0">
            <img src="assets/media/sample-gallery-1.jpg" alt="" class="img-fit-cover">
          </a>
        </div>
      </div>
      <div class="masonry-item">
        <div class="aspect aspect-16x9 aspect-md-3x4 aspect-xl-9x16">
          <a href="assets/media/sample-gallery-2.jpg" data-of-lightbox-open="tabs:1">
            <img src="assets/media/sample-gallery-2.jpg" alt="" class="img-fit-cover">
          </a>
        </div>
      </div>
      <div class="masonry-item">
        <div class="aspect aspect-16x9 aspect-md-auto">
          <a href="assets/media/sample-gallery-3.jpg" data-of-lightbox-open="tabs:2">
            <img src="assets/media/sample-gallery-3.jpg" alt="" class="img-fit-cover">
          </a>
        </div>
      </div>
      <div class="masonry-item">
            <div class="aspect aspect-16x9 aspect-md-auto">
              <a href="assets/media/sample-gallery-4.jpg" data-of-lightbox-open="tabs:3" data-link-cover>
                <img src="assets/media/sample-gallery-4.jpg" alt="" class="img-fit-cover">
                <div class="link-cover-content">+6</div>
              </a>
            </div>
          </div>
    </div>
  </div>

  <!-- Space tab -->
  <div class="tab-pane fade" id="nav-gallery-space" role="tabpanel" aria-labelledby="nav-gallery-space-tab" tabindex="0">
    <div class="masonry masonry-pattern-1">
      <div class="masonry-item">
        <div class="aspect aspect-16x9 aspect-md-4x3 aspect-xl-auto">
          <a href="assets/media/sample-gallery-11.jpg" data-of-lightbox-open="tabs:gallery-space-1">
            <img src="assets/media/sample-gallery-11.jpg" alt="" class="img-fit-cover">
          </a>
        </div>
      </div>
      <div class="masonry-item">
        <div class="aspect aspect-16x9 aspect-md-3x4 aspect-xl-9x16">
          <a href="assets/media/sample-gallery-12.jpg" data-of-lightbox-open="tabs:gallery-space-2">
            <img src="assets/media/sample-gallery-12.jpg" alt="" class="img-fit-cover">
          </a>
        </div>
      </div>
      <div class="masonry-item">
        <div class="aspect aspect-16x9 aspect-md-auto">
          <a href="assets/media/sample-gallery-13.jpg" data-of-lightbox-open="tabs:gallery-space-3">
            <img src="assets/media/sample-gallery-13.jpg" alt="" class="img-fit-cover">
          </a>
        </div>
      </div>
      <div class="masonry-item">
        <div class="aspect aspect-16x9 aspect-md-auto">
          <a href="assets/media/sample-gallery-14.jpg" data-of-lightbox-open="tabs:gallery-space-3">
            <img src="assets/media/sample-gallery-14.jpg" alt="" class="img-fit-cover">
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Videos tab -->
  <div class="tab-pane fade" id="nav-videos" role="tabpanel" aria-labelledby="nav-videos-tab" tabindex="0">
    <div class="masonry masonry-pattern-1">
      <div class="masonry-item">
        <div class="aspect aspect-16x9 aspect-md-4x3 aspect-xl-auto" data-of-video-play>
          {{< video class="object-fit-cover" >}}
        </div>
      </div>
      <div class="masonry-item">
        <div class="aspect aspect-16x9">
          <iframe src="https://www.youtube.com/embed/Ga6RYejo6Hk?rel=0" title="YouTube video" allowfullscreen></iframe>
        </div>
      </div>
      <div class="masonry-item">
        <div class="aspect aspect-16x9">
          <iframe src="https://player.vimeo.com/video/115041822" title="Vimeo video" allowfullscreen></iframe>
        </div>
      </div>
      <div class="masonry-item">
        <div class="aspect aspect-16x9 aspect-md-4x3 aspect-xl-auto">
          <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>

  <!-- YouTube tab -->
  <div class="tab-pane fade" id="nav-youtube" role="tabpanel" aria-labelledby="nav-youtube-tab" tabindex="0">
    {{< placeholder markup="img" width="100%" height="400" class="img-thumbnail img-fluid" text="YouTube" >}}
  </div>

  <!-- Vimeo tab -->
  <div class="tab-pane fade" id="nav-vimeo" role="tabpanel" aria-labelledby="nav-vimeo-tab" tabindex="0">
    {{< placeholder markup="img" width="100%" height="400" class="img-thumbnail img-fluid" text="Vimeo" >}}
  </div>

  <!-- Map tab -->
  <div class="tab-pane fade" id="nav-map" role="tabpanel" aria-labelledby="nav-map-tab" tabindex="0">
    {{< placeholder markup="img" width="100%" height="400" class="img-thumbnail img-fluid" text="Map" >}}
  </div>
</div>
{{< /example >}}

## Responsive images

The lightbox component supports responsive images with `sizes` and `srcset` item options:

{{< callout warning >}}
**Attention!** You must set both `sizes` and `srcset` options to make this work!
{{< /callout >}}

```html
<a data-of-lightbox='{
    "sizes": "(max-width: 600px) 480px, 800px",
    "srcset": "mobile.jpg 480w, desktop.jpg 800w"
}' href="…">
    <img src="…" alt="">
</a>
```

The responsive thumbnails are supported with `thumbnailSizes` and `thumbnailSrcset` item options:

{{< callout info >}}
**Good news!** Contrary to the main image attributes, the thumbnails accept `srcset` option without `sizes`.
{{< /callout >}}

```html
<a data-of-lightbox='{
    "thumbnail": "path/to/custom-thumbnail.jpg",
    "thumbnailSrcset": "thumb@1x.jpg 1x, thumb@2x.jpg 2x"
}' href="…">
    <img src="…" alt="">
</a>
```

## URL hash tracking

When the lightbox open or its slide is being changed, the current URL will be updated with an extra hash. This allows a visitor to copy or paste the URL that opens the lightbox right away. This feature is controlled by the `urlHashTracking` option and is enabled by default.

The URL hash for lightbox starts exclusively with the `#lightbox-` prefix. The URL hash will be updated whenever one of the following events occurs:

1. The lightbox is opened.
2. The lightbox is closed.
3. The lightbox slide is changed.
4. The lightbox tab is changed.

The URL hash will format exactly as the lightbox triggers (see above), for example:

```shell
https://domain.tld/page.html#lightbox-<group_identifier>:<item_identifier>
```

## Options

The lightbox options are optional. If you decide to use them, due to their nature, they must be defined in one central place.

You can define them as a JSON object in one of the `<script>` tags. The element must get the `data-of-lightobx-config` attribute, which will be referenced in other places.

```html
<script data-of-lightbox-config="gallery-1" type="application/json">
  {
    "thumbnails": true
  }
</script>
```

The lightbox can be then referenced in the lightbox item as options source:

```html
<a href="…" data-of-lightbox='{ "group": "gallery-1" }'>
  <img src="…" alt="">
</a>
```

You can also open the lightbox by referring to it:

```html
<button data-of-lightbox-open="gallery-1" class="btn btn-primary">Open image gallery</button>
```

Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `items` | `array` | `[]` | The items to display in the lightbox. Every item must be an object with item options described below. |
| `tabs` | `array` | `[]` | The tabs to display at the top of the lightbox. Every tab must be an object with tab options described below. |
| `thumbnails` | `boolean` | `false` | Show the thumbnails of lightbox items. |
| `urlHashTracking` | `boolean` | `true` | Enable the URL hash tracking. When the lightbox opens or its slide changes, the URL hash will be updated. |
{{< /bs-table >}}

{{< callout warning >}}
**Attention!** If you are using `tabs` option, the `items` set on the top level will be ignored. You have to set them individually for every tab!
{{< /callout >}}

#### Tab options

Here is the list of all available tab options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Explanation |
| --- | --- | --- |
| `name` | `string` | The tab name displayed in the tab navigation. |
| `items` | `array` | The items to be displayed in this tab. Every item must be an object with item options described below. |
{{< /bs-table >}}

#### Item options

Every lightbox item can be enhanced with extra options, such as image title or a lightbox group identifier this item belongs to.

{{< callout info >}}
**Heads up!** You can also pass item options as JSON value of the `data-of-lightbox` attribute.
{{< /callout >}}

Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `group` | `string` | `undefined` | The identifier to group multiple items in the same lightbox. This option is valid for `data-of-lightbox` attribute. |
| `identifier` | `string` | `undefined` | A unique item identifier of the item that allows to reference item, e.g. in URL hash. |
| `thumbnail` | `string` | `undefined` | A path to the thumbnail image. This is needed if the lightbox/tab has `thumbnails: true` option. |
| `thumbnailSizes` | `string` | `undefined` | The `sizes` attribute for responsive thumbnails. |
| `thumbnailSrcset` | `string` | `undefined` | The `srcset` attribute for responsive thumbnails. |
| `type` | `string` | `undefined` | The type of item. If not provided, the component will try to autodetect it. Available options are: `external` (for iframe), `image`, `inline`, `video`. |
{{< /bs-table >}}

Depending on the item `type`, the extra options can be passed on:

##### Iframe options

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `href` | `string` | `undefined` | Required. The iframe source URL. |
{{< /bs-table >}}

##### Image options

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `alt` | `string` | `undefined` | The alternative text of an image. |
| `attribution` | `string` | `undefined` | The attribution displayed as a tooltip in the corner of the image. |
| `description` | `string` | `undefined` | The caption description displayed as caption. |
| `href` | `string` | `undefined` | Required. The image source URL. |
| `sizes` | `string` | `undefined` | The `sizes` attribute for responsive images. |
| `srcset` | `string` | `undefined` | The `srcset` attribute for responsive images. |
| `title` | `string` | `undefined` | The title description displayed as caption. |
{{< /bs-table >}}

##### Inline options

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `content` | `string` | `undefined` | The item HTML content. Required if `href` is not defined. |
| `href` | `string` | `undefined` | The CSS selector referencing the element ID (e.g. `#my-content`). Required if `content` is not defined. |
{{< /bs-table >}}

##### Video options

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `href` | `string` | `undefined` | Required. The video source URL. |
| `source` | `string` | `undefined` | The video source. Available options are: `local`, `youtube`, `vimeo`. |
{{< /bs-table >}}

## Events

The lightbox triggers the global events on the `document`:

```js
document.addEventListener('open.of.lightbox', event => {
  console.log(event.detail);
});
```

{{< bs-table "table" >}}
| Event | Description |
| --- | --- | --- | --- |
| `open.of.lightbox` | This event is fired when the lightbox is opened. |
| `close.of.lightbox` | This event is fired when the lightbox is closed. |
| `slide_changed.of.lightbox` | This event is fired after the slide is changed. |
| `slide_before_change.of.lightbox` | This event is fired before the slide is changed. |
{{< /bs-table >}}

## Examples

### Image gallery with captions

{{< example >}}
<div class="row">
  <div class="col-3">
    <figure>
      <a href="assets/media/sample-gallery-1.jpg" data-of-lightbox='{
"group": "image-captions-gallery",
"title": "Est anim dolor qui",
"description": "Ad minim sit magna tempor irure dolore mollit qui dolore. Irure ea nisi laborum do voluptate adipisicing amet fugiat nostrud qui anim excepteur. Nulla sit consequat id ut amet esse. Et dolore est non est enim consequat.",
"attribution": "© 2025 John Doe. All rights reserved. <a href=\"/about/license\" target=\"_blank\" rel=\"noreferrer noopener\">Lizenz</a>"
}'>
        <img src="assets/media/sample-gallery-1.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a href="assets/media/sample-gallery-2.jpg" data-of-lightbox='{
"group": "image-captions-gallery",
"title": "Cillum eiusmod sint adipisicing deserunt incididunt",
"description": "Ad elit mollit in sunt id incididunt irure. Ea ex id quis laborum aute sit ipsum et proident ex ex dolor mollit. Et est occaecat sit et ex fugiat laboris officia anim amet incididunt nisi labore sit nisi. Nostrud sint incididunt dolore ea aliqua sint qui et reprehenderit tempor voluptate minim amet aute dolore. Nostrud nostrud duis ipsum Lorem aliqua officia. Incididunt dolore anim laborum occaecat consectetur consequat incididunt eu ut laborum enim."
}'>
        <img src="assets/media/sample-gallery-2.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a href="assets/media/sample-gallery-3.jpg" data-of-lightbox='{
"group": "image-captions-gallery",
"title": "Culpa et Lorem qui",
"description": "Fugiat elit cillum cillum in ipsum excepteur consectetur ad nostrud occaecat consectetur aliquip magna ea occaecat. Aliquip do fugiat cupidatat enim aute aliquip. Culpa labore ad sint magna ex veniam dolor nulla velit est ea aliquip. Consequat excepteur ut cillum ipsum ex minim excepteur. Ipsum officia labore eu nostrud Lorem esse ex cupidatat cillum qui ea mollit ex veniam cupidatat. Pariatur do ut reprehenderit deserunt minim culpa qui reprehenderit consectetur aute tempor. Duis sint mollit deserunt adipisicing nisi eiusmod qui incididunt aliqua occaecat commodo consectetur Lorem veniam."
}'>
        <img src="assets/media/sample-gallery-3.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a href="assets/media/sample-gallery-4.jpg" data-of-lightbox='{
"group": "image-captions-gallery",
"title": "Elit sint in reprehenderit",
"description": "Ea enim consequat aute culpa nulla sint nulla reprehenderit pariatur eu. Ut do fugiat irure Lorem labore incididunt adipisicing minim et laborum sint. Elit consequat deserunt minim in minim laborum labore magna ex mollit ad cupidatat elit laborum. Eu dolore veniam magna quis consequat elit. Id id proident cillum deserunt."
}'>
        <img src="assets/media/sample-gallery-4.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
</div>
{{< /example >}}

### Videos gallery

{{< example >}}
<div class="row">
  <div class="col-4">
    <figure>
      <a href="https://vimeo.com/115041822" data-of-lightbox='{ "group": "videos-gallery" }'>
        {{< placeholder width="100%" height="100%" class="img-fluid" text="Vimeo" >}}
      </a>
    </figure>
  </div>
  <div class="col-4">
    <figure>
      <a href="https://www.youtube-nocookie.com/embed/Ga6RYejo6Hk" data-of-lightbox='{ "group": "videos-gallery" }'>
        {{< placeholder width="100%" height="100%" class="img-fluid" text="YouTube" >}}
      </a>
    </figure>
  </div>
  <div class="col-4">
    <figure>
      <a href="assets/media/sample-video.mp4" data-of-lightbox='{ "group": "videos-gallery" }'>
        {{< placeholder width="100%" height="100%" class="img-fluid" text="Local video" >}}
      </a>
    </figure>
  </div>
</div>
{{< /example >}}

### Iframes and inline elements

{{< example >}}
<a href="https://maps.google.com/maps?hl=en&amp;q=TSO%20AG%2C%20F%C3%BCrstenlandstrasse%2053%2C%209000%20St.Gallen&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed" class="btn btn-primary" data-of-lightbox='{ "group": "inline-gallery" }'>Google Maps</a>
<a href="https://www.openstreetmap.org/export/embed.html?bbox=9.311041831970217%2C47.39439835079049%2C9.384942054748537%2C47.432383951962365&amp;layer=mapnik&amp;marker=47.413394576333644%2C9.347991943359375" class="btn btn-primary" data-of-lightbox='{ "group": "inline-gallery" }'>Open Street Map</a>
<a href="#inline-example" class="btn btn-primary" data-of-lightbox='{ "group": "inline-gallery" }' data-height="auto">Inline element</a>

<div class="d-none">
  <div id="inline-example" class="p-5 text-center">
    <h2>Ea consequat sit ipsum</h2>
    <p>Mollit cupidatat consequat enim Lorem et labore ipsum exercitation proident laborum dolore. Ullamco ullamco nisi ex in labore enim ex anim amet. Adipisicing et ad commodo amet officia fugiat do voluptate sit ad id ut ad voluptate. Deserunt velit elit sunt. Ex excepteur ea laborum occaecat sunt. Consequat id reprehenderit enim dolore excepteur incididunt ut ad cupidatat. Quis voluptate sit velit nostrud veniam cupidatat Lorem ut occaecat ipsum sunt do minim est.</p>
    <button class="btn btn-primary gtrigger-close" type="button">Close this popup</button>
  </div>
</div>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="lightbox-css-vars" file="src/scss/_lightbox.scss" >}}

### Sass variables

{{< scss-docs name="lightbox-variables" file="src/scss/_variables.scss" >}}
