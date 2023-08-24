---
layout: docs
title: Video
description: The HTML `<video>` element is used to show a video on a web page.
group: content
toc: true
---

## How it Works

The `controls` attribute adds audio controls, like play, pause, and volume.

The `<source>` element allows you to specify alternative audio files which the browser may choose from. The browser will use the first recognized format.

## Examples

### The HTML <audio> Element

The HTML `<video>` element is used to show a video on a web page.

<div class="bd-example">
  <div class="ratio ratio-16x9">
    <video controls>
      <source src="/assets/media/sample-video.mp4" type="video/mp4">
      <source src="/assets/media/sample-video.ogg" type="video/ogg">
    </video>
  </div>
</div>

```html
<div class="ratio ratio-16x9">
  <video controls>
    <source src="sample-video.mp4" type="video/mp4">
    <source src="sample-video.ogg" type="video/ogg">
  </video>
</div>
```

Notice that you can embed videos of various [aspect-ratio]({{< docsref "/helpers/ratio" >}}). To adjust the video, you might find our utility classes setting the [object-fit]({{< docsref "/utilities/object-fit#video" >}}) property useful.

<div class="bd-example">
  <div class="ratio ratio-21x9">
    <video controls class="object-fit-cover">
      <source src="/assets/media/sample-video.mp4" type="video/mp4">
      <source src="/assets/media/sample-video.ogg" type="video/ogg">
    </video>
  </div>
</div>

```html
<div class="ratio ratio-21x9">
  <video controls class="object-fit-cover">
    <source src="sample-video.mp4" type="video/mp4">
    <source src="sample-video.ogg" type="video/ogg">
  </video>
</div>
```

### HTML `<video>` Autoplay

To start a video automatically, use the `autoplay` attribute:

<div class="bd-example">
  <div class="ratio ratio-16x9">
    <video controls autoplay>
      <source src="/assets/media/sample-video.mp4" type="video/mp4">
      <source src="/assets/media/sample-video.ogg" type="video/ogg">
    </video>
  </div>
</div>

```html
<div class="ratio ratio-16x9">
  <video controls autoplay>
    <source src="sample-video.mp4" type="video/mp4">
    <source src="sample-video.ogg" type="video/ogg">
  </video>
</div>
```

{{< callout info >}}
**Note**: Chromium browsers do not allow autoplay in most cases. However, muted autoplay is always allowed.
{{< /callout >}}

Add `muted` after `autoplay` to let your video start playing automatically (but muted):

<div class="bd-example">
  <div class="ratio ratio-16x9">
    <video autoplay muted>
      <source src="/assets/media/sample-video.mp4" type="video/mp4">
      <source src="/assets/media/sample-video.ogg" type="video/ogg">
    </video>
  </div>
</div>

```html
<div class="ratio ratio-16x9">
  <video autoplay muted>
    <source src="sample-video.mp4" type="video/mp4">
    <source src="sample-video.ogg" type="video/ogg">
  </video>
</div>
```

### Youtube

{{< example >}}
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
{{< /example >}}
