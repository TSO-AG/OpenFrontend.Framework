---
layout: docs
title: Lightbox
description: This component allows you to open images, videos, iframes, or other inline types in a lightbox.
group: components
toc: true
---

## How it works

The lightbox is powered by the [GLightbox](https://github.com/biati-digital/glightbox) plugin.

- Use the `data-of-lightbox` attribute on the link elements to initialize the lightbox.
- The `data-of-lightbox` attribute accepts the string value, which should be used to group the lightbox items. For example: `data-of-lightbox="gallery-123"`.

{{< callout warning >}}
You should always define the `data-of-lightbox` attribute value to avoid unexpected mixing of different galleries on one page.
{{< /callout >}}

## Examples

### Tabs

{{< example >}}
<a href="#" data-lightbox-open="lightbox-1">Open lightbox 1</a>
<a href="#" data-lightbox-open="lightbox-1" data-lightbox-element="gallery-2-2">Open lightbox 1 element 1-2</a>

<div id="lightbox-1" data-of-lightbox="tabs" data-of-lightbox-tabs-setting='
{
  "id": "lightbox-1",
  "open": false,
  "tabs": [
    {
      "name": "Gallery 1",
      "thumbnail": true,
      "elements": [
        {
          "id": "gallery-1-1",
          "href": "https://picsum.photos/id/1/1200/800",
          "thumbnail": "https://picsum.photos/id/1/70",
          "type": "image",
          "title": "My Title",
          "description": "Example"
        },
        {
          "id": "gallery-1-2",
          "href": "https://picsum.photos/id/2/1200/800",
          "thumbnail": "https://picsum.photos/id/2/70",
          "type": "image",
          "alt": "image text alternatives",
          "title": "My Title 2",
          "description": "Example 2"
        },
        {
          "id": "gallery-1-3",
          "href": "https://picsum.photos/id/3/1200/800",
          "thumbnail": "https://picsum.photos/id/3/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-4",
          "href": "https://picsum.photos/id/4/1200/800",
          "thumbnail": "https://picsum.photos/id/4/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-5",
          "href": "https://picsum.photos/id/5/1200/800",
          "thumbnail": "https://picsum.photos/id/5/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-6",
          "href": "https://picsum.photos/id/6/1200/800",
          "thumbnail": "https://picsum.photos/id/6/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-7",
          "href": "https://picsum.photos/id/7/1200/800",
          "thumbnail": "https://picsum.photos/id/7/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-8",
          "href": "https://picsum.photos/id/8/1200/800",
          "thumbnail": "https://picsum.photos/id/8/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-9",
          "href": "https://picsum.photos/id/9/1200/800",
          "thumbnail": "https://picsum.photos/id/9/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-10",
          "href": "https://picsum.photos/id/10/1200/800",
          "thumbnail": "https://picsum.photos/id/10/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-11",
          "href": "https://picsum.photos/id/11/1200/800",
          "thumbnail": "https://picsum.photos/id/11/70",
          "type": "image",
          "title": "My Title",
          "description": "Example"
        },
        {
          "id": "gallery-1-12",
          "href": "https://picsum.photos/id/12/1200/800",
          "thumbnail": "https://picsum.photos/id/12/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-13",
          "href": "https://picsum.photos/id/13/1200/800",
          "thumbnail": "https://picsum.photos/id/13/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-14",
          "href": "https://picsum.photos/id/14/1200/800",
          "thumbnail": "https://picsum.photos/id/14/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-15",
          "href": "https://picsum.photos/id/15/1200/800",
          "thumbnail": "https://picsum.photos/id/15/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-16",
          "href": "https://picsum.photos/id/16/1200/800",
          "thumbnail": "https://picsum.photos/id/16/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-17",
          "href": "https://picsum.photos/id/17/1200/800",
          "thumbnail": "https://picsum.photos/id/17/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-18",
          "href": "https://picsum.photos/id/18/1200/800",
          "thumbnail": "https://picsum.photos/id/18/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-19",
          "href": "https://picsum.photos/id/19/1200/800",
          "thumbnail": "https://picsum.photos/id/19/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-1-20",
          "href": "https://picsum.photos/id/20/1200/800",
          "thumbnail": "https://picsum.photos/id/20/70",
          "type": "image",
          "alt": "image text alternatives"
        }
      ]
    },
    {
      "name": "Gallery 2",
      "thumbnail": true,
      "elements": [
        {
          "id": "gallery-2-1",
          "href": "https://picsum.photos/id/21/1200/800",
          "thumbnail": "https://picsum.photos/id/21/70",
          "type": "image",
          "title": "My Title",
          "description": "Example"
        },
        {
          "id": "gallery-2-2",
          "href": "https://picsum.photos/id/22/1200/800",
          "thumbnail": "https://picsum.photos/id/22/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-2-3",
          "href": "https://picsum.photos/id/23/1200/800",
          "thumbnail": "https://picsum.photos/id/23/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-2-4",
          "href": "https://picsum.photos/id/24/1200/800",
          "thumbnail": "https://picsum.photos/id/24/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-2-5",
          "href": "https://picsum.photos/id/25/1200/800",
          "thumbnail": "https://picsum.photos/id/25/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-2-6",
          "href": "https://picsum.photos/id/26/1200/800",
          "thumbnail": "https://picsum.photos/id/26/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-2-7",
          "href": "https://picsum.photos/id/27/1200/800",
          "thumbnail": "https://picsum.photos/id/27/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-2-8",
          "href": "https://picsum.photos/id/28/1200/800",
          "thumbnail": "https://picsum.photos/id/28/70",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "gallery-2-9",
          "href": "https://picsum.photos/id/29/1200/800",
          "thumbnail": "https://picsum.photos/id/29/70",
          "type": "image",
          "alt": "image text alternatives"
        }
      ]
    },
    {
      "name": "Mixed Content",
      "thumbnail": true,
      "elements": [
        {
          "id": "content-1",
          "href": "https://picsum.photos/id/31/1200/800",
          "type": "image",
          "title": "My Title",
          "description": "Example"
        },
        {
          "id": "content-2",
          "href": "https://picsum.photos/id/32/1200/800",
          "type": "image",
          "alt": "image text alternatives"
        },
        {
          "id": "content-3",
          "href": "https://www.youtube.com/watch?v=Ga6RYejo6Hk",
          "type": "video",
          "source": "youtube",
          "width": 900
        },
        {
          "id": "content-4",
          "content": "<p>This will append some html inside the slide</p>"
        }
      ]
    },
    {
      "name": "Youtube",
      "thumbnail": true,
      "elements": [
        {
          "id": "content-5",
          "href": "https://www.youtube.com/watch?v=Ga6RYejo6Hk",
          "type": "video",
          "source": "youtube",
          "width": 900
        }
      ]
    },
    {
      "name": "Vimeo",
      "thumbnail": false,
      "elements": [
        {
          "id": "content-6",
          "href": "https://vimeo.com/115041822",
          "type": "video",
          "source": "vimeo",
          "width": 900
        }
      ]
    },
    {
      "name": "Map",
      "thumbnail": true,
      "elements": [
        {
          "id": "content-7",
          "href": "https://maps.google.com/maps?hl=en&amp;q=TSO%20AG%2C%20F%C3%BCrstenlandstrasse%2053%2C%209000%20St.Gallen&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed",
          "width": 900
        }
      ]
    }
  ]
}
'>
</div>

<nav class="mb-2">
  <div class="nav nav-tabs nav-tabs-horizontal" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-gallery-1-tab" data-bs-toggle="tab" data-bs-target="#nav-gallery-1" type="button" role="tab" aria-controls="nav-gallery-1" aria-selected="true">Gallery 1</button>
    <button class="nav-link" id="nav-gallery-2-tab" data-bs-toggle="tab" data-bs-target="#nav-gallery-2" type="button" role="tab" aria-controls="gallery-2" aria-selected="false">Gallery 2</button>
    <button class="nav-link" id="nav-mixed-content-tab" data-bs-toggle="tab" data-bs-target="#nav-mixed-content" type="button" role="tab" aria-controls="nav-mixed-content" aria-selected="false">Mixed Content</button>
    <button class="nav-link" id="nav-youtube-tab" data-bs-toggle="tab" data-bs-target="#nav-youtube" type="button" role="tab" aria-controls="nav-youtube" aria-selected="false">Youtube</button>
    <button class="nav-link" id="nav-vimeo-tab" data-bs-toggle="tab" data-bs-target="#nav-vimeo" type="button" role="tab" aria-controls="nav-vimeo" aria-selected="false">Vimeo</button>
    <button class="nav-link" id="nav-map-tab" data-bs-toggle="tab" data-bs-target="#nav-map" type="button" role="tab" aria-controls="nav-map" aria-selected="false">Map</button>
  </div>
</nav>

<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-gallery-1" role="tabpanel" aria-labelledby="nav-gallery-1-tab" tabindex="0">
    <div class="masonry masonry-group-2">
      <div class="masonry-group-item">
        <div class="masonry masonry-vertical-1">
          <div class="masonry-item aspect aspect-16x9 aspect-md-4x3 aspect-xl-auto">
            <a href="https://picsum.photos/id/1/1200/800" data-lightbox-open="lightbox-1" data-lightbox-element="gallery-1-1">
              <img src="https://picsum.photos/id/1/1200/800" alt="" class="img-fit-cover img-thumbnail">
            </a>
          </div>
        </div>
      </div>
      <div class="masonry-group-item">
        <div class="masonry masonry-vertical-5">
          <div class="masonry-item aspect aspect-16x9 aspect-md-3x4 aspect-xl-9x16">
            <a href="https://picsum.photos/id/2/1200/800" data-lightbox-open="lightbox-1" data-lightbox-element="gallery-1-2">
              <img src="https://picsum.photos/id/2/1200/800" alt="" class="img-fit-cover img-thumbnail">
            </a>
          </div>
          <div class="masonry-item aspect aspect-16x9 aspect-md-auto">
            <a href="https://picsum.photos/id/3/1200/800" data-lightbox-open="lightbox-1" data-lightbox-element="gallery-1-3">
              <img src="https://picsum.photos/id/3/1200/800" alt="" class="img-fit-cover img-thumbnail">
            </a>
          </div>
          <div class="masonry-item aspect aspect-16x9 aspect-md-auto">
            <a href="https://picsum.photos/id/4/1200/800" data-lightbox-open="lightbox-1" data-lightbox-element="gallery-1-4">
              <img src="https://picsum.photos/id/4/1200/800" alt="" class="img-fit-cover img-thumbnail">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="nav-gallery-2" role="tabpanel" aria-labelledby="nav-gallery-2-tab" tabindex="0">
    <div class="masonry masonry-group-2">
      <div class="masonry-group-item">
        <div class="masonry masonry-vertical-1">
          <div class="masonry-item aspect aspect-16x9 aspect-md-4x3 aspect-xl-auto">
            <a href="https://picsum.photos/id/21/1200/800" data-lightbox-open="lightbox-1" data-lightbox-element="gallery-2-1">
              <img src="https://picsum.photos/id/21/1200/800" alt="" class="img-fit-cover img-thumbnail">
            </a>
          </div>
        </div>
      </div>
      <div class="masonry-group-item">
        <div class="masonry masonry-vertical-5">
          <div class="masonry-item aspect aspect-16x9 aspect-md-3x4 aspect-xl-9x16">
            <a href="https://picsum.photos/id/22/1200/800" data-lightbox-open="lightbox-1" data-lightbox-element="gallery-2-2">
              <img src="https://picsum.photos/id/22/1200/800" alt="" class="img-fit-cover img-thumbnail">
            </a>
          </div>
          <div class="masonry-item aspect aspect-16x9 aspect-md-auto">
            <a href="https://picsum.photos/id/23/1200/800" data-lightbox-open="lightbox-1" data-lightbox-element="gallery-2-3">
              <img src="https://picsum.photos/id/23/1200/800" alt="" class="img-fit-cover img-thumbnail">
            </a>
          </div>
          <div class="masonry-item aspect aspect-16x9 aspect-md-auto">
            <a href="https://picsum.photos/id/24/1200/800" data-lightbox-open="lightbox-1" data-lightbox-element="gallery-2-4">
              <img src="https://picsum.photos/id/24/1200/800" alt="" class="img-fit-cover img-thumbnail">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="nav-mixed-content" role="tabpanel" aria-labelledby="nav-mixed-content-tab" tabindex="0">
    <div class="masonry masonry-group-2">
      <div class="masonry-group-item">
        <div class="masonry masonry-vertical-1">
          <div class="masonry-item aspect aspect-16x9 aspect-md-4x3 aspect-xl-auto" data-of-video-play>
            {{< video class="object-fit-cover" >}}
          </div>
        </div>
      </div>
      <div class="masonry-group-item">
        <div class="masonry masonry-vertical-5">
          <div class="masonry-item aspect aspect-16x9 aspect-md-3x4 aspect-xl-9x16" data-of-video-play>
            {{< video class="object-fit-cover" >}}
          </div>
          <div class="masonry-item aspect aspect-16x9 aspect-md-auto" data-of-video-play>
            {{< video class="object-fit-cover" >}}
          </div>
          <div class="masonry-item aspect aspect-16x9 aspect-md-auto" data-of-video-play>
            {{< video class="object-fit-cover" >}}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="nav-youtube" role="tabpanel" aria-labelledby="nav-youtube-tab" tabindex="0">
    {{< placeholder markup="img" width="100%" height="400" class="img-thumbnail img-fluid" text="youtube" >}}
  </div>
  <div class="tab-pane fade" id="nav-vimeo" role="tabpanel" aria-labelledby="nav-vimeo-tab" tabindex="0">
    {{< placeholder markup="img" width="100%" height="400" class="img-thumbnail img-fluid" text="MAP" >}}
  </div>
  <div class="tab-pane fade" id="nav-youtube" role="tabpanel" aria-labelledby="nav-youtube-tab" tabindex="0">
    {{< placeholder markup="img" width="100%" height="400" class="img-thumbnail img-fluid" text="MAP" >}}
  </div>
  <div class="tab-pane fade" id="nav-map" role="tabpanel" aria-labelledby="nav-map-tab" tabindex="0">
    {{< placeholder markup="img" width="100%" height="400" class="img-thumbnail img-fluid" text="MAP" >}}
  </div>
</div>
{{< /example >}}
### Single image

{{< example >}}
<div class="row">
  <div class="col-md-6">
    <h2>Sunt non laborum</h2>
    <p>Incididunt quis consectetur culpa ullamco occaecat id nisi ad fugiat aliquip proident incididunt. Cillum irure excepteur elit voluptate do esse. Duis magna nostrud tempor excepteur. Voluptate incididunt ut anim fugiat. Laboris Lorem dolore amet adipisicing sit ea dolore elit amet eiusmod mollit irure commodo consequat.</p>
  </div>

  <div class="col-md-6">
    <figure>
      <a href="assets/media/sample-gallery-1.jpg" data-of-lightbox>
        <img src="assets/media/sample-gallery-1.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
</div>
{{< /example >}}

### Image gallery

{{< example >}}
<div class="row">
  <div class="col-3">
    <figure>
      <a href="assets/media/sample-gallery-1.jpg" data-of-lightbox="image-gallery">
        <img src="assets/media/sample-gallery-1.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a href="assets/media/sample-gallery-2.jpg" data-of-lightbox="image-gallery">
        <img src="assets/media/sample-gallery-2.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a href="assets/media/sample-gallery-3.jpg" data-of-lightbox="image-gallery">
        <img src="assets/media/sample-gallery-3.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a href="assets/media/sample-gallery-4.jpg" data-of-lightbox="image-gallery">
        <img src="assets/media/sample-gallery-4.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
</div>
{{< /example >}}

### Image gallery with captions

{{< example >}}
<div class="row">
  <div class="col-3">
    <figure>
      <a href="assets/media/sample-gallery-1.jpg" data-of-lightbox="image-captions-gallery" data-title="Est anim dolor qui" data-description="Ad minim sit magna tempor irure dolore mollit qui dolore. Irure ea nisi laborum do voluptate adipisicing amet fugiat nostrud qui anim excepteur. Nulla sit consequat id ut amet esse. Et dolore est non est enim consequat.">
        <img src="assets/media/sample-gallery-1.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a href="assets/media/sample-gallery-2.jpg" data-of-lightbox="image-captions-gallery" data-title="Cillum eiusmod sint adipisicing deserunt incididunt" data-description="Ad elit mollit in sunt id incididunt irure. Ea ex id quis laborum aute sit ipsum et proident ex ex dolor mollit. Et est occaecat sit et ex fugiat laboris officia anim amet incididunt nisi labore sit nisi. Nostrud sint incididunt dolore ea aliqua sint qui et reprehenderit tempor voluptate minim amet aute dolore. Nostrud nostrud duis ipsum Lorem aliqua officia. Incididunt dolore anim laborum occaecat consectetur consequat incididunt eu ut laborum enim.">
        <img src="assets/media/sample-gallery-2.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a href="assets/media/sample-gallery-3.jpg" data-of-lightbox="image-captions-gallery" data-title="Culpa et Lorem qui" data-description="Fugiat elit cillum cillum in ipsum excepteur consectetur ad nostrud occaecat consectetur aliquip magna ea occaecat. Aliquip do fugiat cupidatat enim aute aliquip. Culpa labore ad sint magna ex veniam dolor nulla velit est ea aliquip. Consequat excepteur ut cillum ipsum ex minim excepteur. Ipsum officia labore eu nostrud Lorem esse ex cupidatat cillum qui ea mollit ex veniam cupidatat. Pariatur do ut reprehenderit deserunt minim culpa qui reprehenderit consectetur aute tempor. Duis sint mollit deserunt adipisicing nisi eiusmod qui incididunt aliqua occaecat commodo consectetur Lorem veniam.">
        <img src="assets/media/sample-gallery-3.jpg" class="aspect aspect-4x3 object-fit-cover img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure>
      <a href="assets/media/sample-gallery-4.jpg" data-of-lightbox="image-captions-gallery" data-title="Elit sint in reprehenderit" data-description="Ea enim consequat aute culpa nulla sint nulla reprehenderit pariatur eu. Ut do fugiat irure Lorem labore incididunt adipisicing minim et laborum sint. Elit consequat deserunt minim in minim laborum labore magna ex mollit ad cupidatat elit laborum. Eu dolore veniam magna quis consequat elit. Id id proident cillum deserunt.">
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
      <a href="https://vimeo.com/115041822" data-of-lightbox="videos-gallery">
        {{< placeholder width="100%" height="100%" class="img-fluid" text="Vimeo" >}}
      </a>
    </figure>
  </div>
  <div class="col-4">
    <figure>
      <a href="https://www.youtube-nocookie.com/embed/Ga6RYejo6Hk" data-of-lightbox="videos-gallery">
        {{< placeholder width="100%" height="100%" class="img-fluid" text="YouTube" >}}
      </a>
    </figure>
  </div>
  <div class="col-4">
    <figure>
      <a href="assets/media/sample-video.mp4" data-of-lightbox="videos-gallery">
        {{< placeholder width="100%" height="100%" class="img-fluid" text="Local video" >}}
      </a>
    </figure>
  </div>
</div>
{{< /example >}}

### Iframes and inline elements

{{< example >}}
<a href="https://maps.google.com/maps?hl=en&amp;q=TSO%20AG%2C%20F%C3%BCrstenlandstrasse%2053%2C%209000%20St.Gallen&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed" class="btn btn-primary" data-of-lightbox="inline-gallery">Google Maps</a>
<a href="https://www.openstreetmap.org/export/embed.html?bbox=9.311041831970217%2C47.39439835079049%2C9.384942054748537%2C47.432383951962365&amp;layer=mapnik&amp;marker=47.413394576333644%2C9.347991943359375" class="btn btn-primary" data-of-lightbox="inline-gallery">Open Street Map</a>
<a href="#inline-example" class="btn btn-primary" data-of-lightbox="inline-gallery" data-height="auto">Inline element</a>

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
