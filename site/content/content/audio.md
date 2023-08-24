---
layout: docs
title: Audio
description: The HTML `<audio>` element is used to play an audio file on a web page.
group: content
toc: true
---

## How it works

The `controls` attribute adds audio controls, like play, pause, and volume.

The `<source>` element allows you to specify alternative audio files from which the browser may choose.
The browser will use the first recognized format.

## Examples

### Native player

To embed an audio file in HTML, use the `<audio>` element:

<div class="bd-example">
  <audio controls>
    <source src="/assets/media/sample-audio.ogg" type="audio/ogg">
    <source src="/assets/media/sample-audio.mp3" type="audio/mpeg">
  </audio>
</div>

```html
<audio controls>
  <source src="sample-audio.ogg" type="audio/ogg">
  <source src="sample-audio.mp3" type="audio/mpeg">
</audio>
```

### Autoplay

To start the audio file automatically, use the autoplay attribute:

<div class="bd-example">
  <audio controls autoplay>
    <source src="/assets/media/sample-audio.ogg" type="audio/ogg">
    <source src="/assets/media/sample-audio.mp3" type="audio/mpeg">
  </audio>
</div>

```html
<audio controls autoplay>
  <source src="/assets/media/sample-audio.ogg" type="audio/ogg">
  <source src="/assets/media/sample-audio.mp3" type="audio/mpeg">
</audio>
```

### Title and filename

Next to the player, you can also display the title and name of the file.

<div class="bd-example">
  <div class="player-audio">
    <div class="player-audio__content">
      <div class="player-audio__title">Audio title</div>
      <div class="player-audio__name">filename.mp3</div>
    </div>
    <div class="player-audio__player">
      <audio controls>
        <source src="/assets/media/sample-audio.ogg" type="audio/ogg">
        <source src="/assets/media/sample-audio.mp3" type="audio/mpeg">
      </audio>
    </div>
  </div>
</div>

```html
<div class="player-audio">
  <div class="player-audio__content">
    <div class="player-audio__title">Audio title</div>
    <div class="player-audio__name">filename.mp3</div>
  </div>
  <div class="player-audio__player">
    <audio controls>
      <source src="sample-audio.ogg" type="audio/ogg">
      <source src="sample-audio.mp3" type="audio/mpeg">
    </audio>
  </div>
</div>
```

{{< callout info >}}
**Note**: Chromium browsers do not allow autoplay in most cases. However, muted autoplay is always allowed.
{{< /callout >}}

## CSS

### Sass variables

Variables are available for audio player.

{{< scss-docs name="audio-player-variables" file="src/scss/_variables.scss" >}}
