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

### Single image

{{< example >}}
<div class="row">
  <div class="col-md-6">
    <h2>Sunt non laborum</h2>
    <p>Incididunt quis consectetur culpa ullamco occaecat id nisi ad fugiat aliquip proident incididunt. Cillum irure excepteur elit voluptate do esse. Duis magna nostrud tempor excepteur. Voluptate incididunt ut anim fugiat. Laboris Lorem dolore amet adipisicing sit ea dolore elit amet eiusmod mollit irure commodo consequat.</p>
  </div>

  <div class="col-md-6">
    <figure class="img-ratio ratio-4x3">
      <a href="assets/media/sample-gallery-1.jpg" data-of-lightbox>
        <img src="assets/media/sample-gallery-1.jpg" class="img-fluid img-thumbnail" alt="">
      </a>
    </figure>
  </div>
</div>
{{< /example >}}

### Image gallery

{{< example >}}
<div class="row">
  <div class="col-3">
    <figure class="img-ratio ratio-4x3">
      <a href="assets/media/sample-gallery-1.jpg" data-of-lightbox="image-gallery">
        <img src="assets/media/sample-gallery-1.jpg" class="img-fluid img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure class="img-ratio ratio-4x3">
      <a href="assets/media/sample-gallery-2.jpg" data-of-lightbox="image-gallery">
        <img src="assets/media/sample-gallery-2.jpg" class="img-fluid img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure class="img-ratio ratio-4x3">
      <a href="assets/media/sample-gallery-3.jpg" data-of-lightbox="image-gallery">
        <img src="assets/media/sample-gallery-3.jpg" class="img-fluid img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure class="img-ratio ratio-4x3">
      <a href="assets/media/sample-gallery-4.jpg" data-of-lightbox="image-gallery">
        <img src="assets/media/sample-gallery-4.jpg" class="img-fluid img-thumbnail" alt="">
      </a>
    </figure>
  </div>
</div>
{{< /example >}}

### Image gallery with captions

{{< example >}}
<div class="row">
  <div class="col-3">
    <figure class="img-ratio ratio-4x3">
      <a href="assets/media/sample-gallery-1.jpg" data-of-lightbox="image-captions-gallery" data-title="Est anim dolor qui" data-description="Ad minim sit magna tempor irure dolore mollit qui dolore. Irure ea nisi laborum do voluptate adipisicing amet fugiat nostrud qui anim excepteur. Nulla sit consequat id ut amet esse. Et dolore est non est enim consequat.">
        <img src="assets/media/sample-gallery-1.jpg" class="img-fluid img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure class="img-ratio ratio-4x3">
      <a href="assets/media/sample-gallery-2.jpg" data-of-lightbox="image-captions-gallery" data-title="Cillum eiusmod sint adipisicing deserunt incididunt" data-description="Ad elit mollit in sunt id incididunt irure. Ea ex id quis laborum aute sit ipsum et proident ex ex dolor mollit. Et est occaecat sit et ex fugiat laboris officia anim amet incididunt nisi labore sit nisi. Nostrud sint incididunt dolore ea aliqua sint qui et reprehenderit tempor voluptate minim amet aute dolore. Nostrud nostrud duis ipsum Lorem aliqua officia. Incididunt dolore anim laborum occaecat consectetur consequat incididunt eu ut laborum enim.">
        <img src="assets/media/sample-gallery-2.jpg" class="img-fluid img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure class="img-ratio ratio-4x3">
      <a href="assets/media/sample-gallery-3.jpg" data-of-lightbox="image-captions-gallery" data-title="Culpa et Lorem qui" data-description="Fugiat elit cillum cillum in ipsum excepteur consectetur ad nostrud occaecat consectetur aliquip magna ea occaecat. Aliquip do fugiat cupidatat enim aute aliquip. Culpa labore ad sint magna ex veniam dolor nulla velit est ea aliquip. Consequat excepteur ut cillum ipsum ex minim excepteur. Ipsum officia labore eu nostrud Lorem esse ex cupidatat cillum qui ea mollit ex veniam cupidatat. Pariatur do ut reprehenderit deserunt minim culpa qui reprehenderit consectetur aute tempor. Duis sint mollit deserunt adipisicing nisi eiusmod qui incididunt aliqua occaecat commodo consectetur Lorem veniam.">
        <img src="assets/media/sample-gallery-3.jpg" class="img-fluid img-thumbnail" alt="">
      </a>
    </figure>
  </div>
  <div class="col-3">
    <figure class="img-ratio ratio-4x3">
      <a href="assets/media/sample-gallery-4.jpg" data-of-lightbox="image-captions-gallery" data-title="Elit sint in reprehenderit" data-description="Ea enim consequat aute culpa nulla sint nulla reprehenderit pariatur eu. Ut do fugiat irure Lorem labore incididunt adipisicing minim et laborum sint. Elit consequat deserunt minim in minim laborum labore magna ex mollit ad cupidatat elit laborum. Eu dolore veniam magna quis consequat elit. Id id proident cillum deserunt.">
        <img src="assets/media/sample-gallery-4.jpg" class="img-fluid img-thumbnail" alt="">
      </a>
    </figure>
  </div>
</div>
{{< /example >}}

### Videos gallery

{{< example >}}
<div class="row">
  <div class="col-4">
    <figure class="img-ratio ratio-4x3">
      <a href="https://vimeo.com/115041822" data-of-lightbox="videos-gallery">
        {{< placeholder width="100%" height="100%" class="img-fluid" text="Vimeo" >}}
      </a>
    </figure>
  </div>
  <div class="col-4">
    <figure class="img-ratio ratio-4x3">
      <a href="https://www.youtube-nocookie.com/embed/Ga6RYejo6Hk" data-of-lightbox="videos-gallery">
        {{< placeholder width="100%" height="100%" class="img-fluid" text="YouTube" >}}
      </a>
    </figure>
  </div>
  <div class="col-4">
    <figure class="img-ratio ratio-4x3">
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
