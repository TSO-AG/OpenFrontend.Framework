---
layout: docs
title: Video
description: The HTML `<video>` element is used to show a video on a web page.
group: content
toc: true
---

## How it works

The `controls` attribute adds video controls, like play, pause, and volume.

The `<source>` element allows you to specify alternative video files from which the browser may choose.
The browser will use the first recognized format.

## Examples

### Local video

The HTML `<video>` element is used to show a video on a web page.

<div class="bd-example">
  <div class="aspect aspect-16x9">
    <video controls>
      <source src="assets/media/sample-video.mp4" type="video/mp4">
      <source src="assets/media/sample-video.ogg" type="video/ogg">
    </video>
  </div>
</div>

```html
<div class="aspect aspect-16x9">
  <video controls>
    <source src="sample-video.mp4" type="video/mp4">
    <source src="sample-video.ogg" type="video/ogg">
  </video>
</div>
```

To start a video automatically, use the `autoplay` attribute:

<div class="bd-example">
  <div class="aspect aspect-16x9">
    <video controls autoplay>
      <source src="assets/media/sample-video.mp4" type="video/mp4">
      <source src="assets/media/sample-video.ogg" type="video/ogg">
    </video>
  </div>
</div>

```html
<div class="aspect aspect-16x9">
  <video controls autoplay>
    <source src="sample-video.mp4" type="video/mp4">
    <source src="sample-video.ogg" type="video/ogg">
  </video>
</div>
```

{{< callout info >}}
**Note**: some browsers and devices will not allow autoplay in most cases. However, muted autoplay is always allowed. This particular example should be used for purely presentational videos, which do not have any sound.
{{< /callout >}}

Add the following attributes: `muted`, `playsinline` and `autoplay`, to let your video start playing automatically (but muted):

<div class="bd-example">
  <div class="aspect aspect-16x9">
    <video autoplay muted playsinline>
      <source src="assets/media/sample-video.mp4" type="video/mp4">
      <source src="assets/media/sample-video.ogg" type="video/ogg">
    </video>
  </div>
</div>

```html
<div class="aspect aspect-16x9">
  <video autoplay muted playsinline>
    <source src="sample-video.mp4" type="video/mp4">
    <source src="sample-video.ogg" type="video/ogg">
  </video>
</div>
```

### YouTube video

You can also embed a YouTube video using an `<iframe>`:

{{< example >}}
<div class="aspect aspect-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
{{< /example >}}

### Aspect ratio

Notice that you can embed videos of various [aspect ratios]({{< docsref "/helpers/aspect-ratio" >}}).

To adjust the video fit, you might want to use the [object-fit]({{< docsref "/utilities/object-fit#video" >}}) utility.

<div class="bd-example">
  <div class="aspect aspect-4x3">
    <video controls class="object-fit-cover">
      <source src="assets/media/sample-video.mp4" type="video/mp4">
      <source src="assets/media/sample-video.ogg" type="video/ogg">
    </video>
  </div>
</div>

```html
<div class="aspect aspect-4x3">
  <video controls class="object-fit-cover">
    <source src="sample-video.mp4" type="video/mp4">
    <source src="sample-video.ogg" type="video/ogg">
  </video>
</div>
```

### Video play/pause button
Easily integrate a play/pause button overlay on your video elements using the `data-of-video-play` attribute. This feature provides a user-friendly way to control video playback without the need for additional JavaScript.

<div class="bd-example">
  <div class="aspect aspect-16x9" data-of-video-play>
    <video class="object-fit-cover">
      <source src="assets/media/sample-video.mp4" type="video/mp4">
      <source src="assets/media/sample-video.ogg" type="video/ogg">
    </video>
  </div>
</div>

```html
<div class="aspect aspect-16x9" data-of-video-play>
  <video class="object-fit-cover">
    <source src="sample-video.mp4" type="video/mp4">
    <source src="sample-video.ogg" type="video/ogg">
  </video>
</div>
```

## CSS

### Variables
Video player use local CSS variables for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="video-play-css-vars" file="src/scss/_player-video.scss" >}}

### Sass variables
{{< scss-docs name="video-player-variables" file="src/scss/_variables.scss" >}}
