---
layout: docs
title: Animations
description: TODO
group: components
toc: true
---

## How it works

@Todo

## Example

{{< example >}}
<div data-of-animation>
  {{< animation-content >}}
</div>
{{< /example >}}

{{< example >}}
<div data-of-animation='{"cssClass": "fadeInDown", "duration": 2000, "delay": 300 }'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"cssClass": "fadeInLeft", "duration": 2000, "delay": 300}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"cssClass": "fadeInRight", "duration": 2000, "delay": 300}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"cssClass": "fadeInUp", "duration": 2000, "delay": 300}'>
  {{< animation-content >}}
</div>
{{< /example >}}

## Animation list

{{< example >}}
<h3>Fading entrances</h3>
<div class="row row-cols-3 justify-content-center">
  <div data-of-animation='{"cssClass": "fadeInLeftBig"}'>
    {{< animation-content text="fadeInLeftBig" >}}
  </div>
  <div data-of-animation='{"cssClass": "fadeInDownBig"}'>
    {{< animation-content text="fadeInDown">}}
  </div>
  <div data-of-animation='{"cssClass": "fadeInRightBig"}'>
    {{< animation-content text="fadeInRightBig">}}
  </div>
  <div data-of-animation='{"cssClass": "fadeInTopLeft"}'>
    {{< animation-content text="fadeInTopLeft">}}
  </div>
  <div data-of-animation='{"cssClass": "fadeInDown"}'>
    {{< animation-content text="fadeInDown">}}
  </div>
  <div data-of-animation='{"cssClass": "fadeInTopRight"}'>
    {{< animation-content text="fadeInTopRight">}}
  </div>
  <div data-of-animation='{"cssClass": "fadeInLeft"}'>
    {{< animation-content text="fadeInLeft">}}
  </div>
  <div data-of-animation='{"cssClass": "fadeIn"}'>
    {{< animation-content text="fadeIn">}}
  </div>
  <div data-of-animation='{"cssClass": "fadeInRight"}'>
    {{< animation-content text="fadeInRight">}}
  </div>
  <div data-of-animation='{"cssClass": "fadeInBottomLeft"}'>
    {{< animation-content text="fadeInBottomLeft">}}
  </div>
  <div data-of-animation='{"cssClass": "fadeInUp"}'>
    {{< animation-content text="fadeInUp">}}
  </div>
  <div data-of-animation='{"cssClass": "fadeInBottomRight"}'>
    {{< animation-content text="fadeInBottomRight">}}
  </div>
  <div data-of-animation='{"cssClass": "fadeInUpBig"}'>
    {{< animation-content text="fadeInUp">}}
  </div>
</div>

<hr>

<h4 class="mb-4">Flippers</h4>
<div class="row row-cols-3 justify-content-center">
  <div data-of-animation='{"cssClass": "flip"}'>
    {{< animation-content text="flip" >}}
  </div>
  <div data-of-animation='{"cssClass": "flipInX"}'>
    {{< animation-content text="flipInX">}}
  </div>
  <div data-of-animation='{"cssClass": "flipInY"}'>
    {{< animation-content text="flipInY">}}
  </div>
</div>

<hr>

<h4 class="mb-4">Lightspeed</h4>
<div class="row row-cols-3 justify-content-center">
  <div data-of-animation='{"cssClass": "lightSpeedInLeft"}'>
    {{< animation-content text="lightSpeedInLeft">}}
  </div>
  <div data-of-animation='{"cssClass": "lightSpeedInRight"}'>
    {{< animation-content text="lightSpeedInRight" >}}
  </div>
</div>

<hr>

<h4 class="mb-4">Rotating entrances </h4>
<div class="row row-cols-3 justify-content-center">
  <div data-of-animation='{"cssClass": "rotateIn"}'>
    {{< animation-content text="rotateIn" >}}
  </div>
  <div data-of-animation='{"cssClass": "rotateInDownLeft"}'>
    {{< animation-content text="rotateInDownLeft">}}
  </div>
  <div data-of-animation='{"cssClass": "rotateInDownRight"}'>
    {{< animation-content text="rotateInDownRight">}}
  </div>
  <div data-of-animation='{"cssClass": "rotateInUpLeft"}'>
    {{< animation-content text="rotateInUpLeft">}}
  </div>
  <div data-of-animation='{"cssClass": "rotateInUpRight"}'>
    {{< animation-content text="rotateInUpRight">}}
  </div>
</div>

<hr>

<h4 class="mb-4">Zooming entrances</h4>
<div class="row row-cols-3 justify-content-center">
  <div data-of-animation='{"cssClass": "zoomIn"}'>
    {{< animation-content text="zoomIn" >}}
  </div>
  <div data-of-animation='{"cssClass": "zoomInDown"}'>
    {{< animation-content text="zoomInDown">}}
  </div>
  <div data-of-animation='{"cssClass": "zoomInLeft"}'>
    {{< animation-content text="zoomInLeft">}}
  </div>
  <div data-of-animation='{"cssClass": "zoomInRight"}'>
    {{< animation-content text="zoomInRight">}}
  </div>
  <div data-of-animation='{"cssClass": "zoomInUp"}'>
    {{< animation-content text="zoomInUp">}}
  </div>
</div>

<hr>

{{< /example >}}

## Duration

{{< example >}}
<div data-of-animation='{"cssClass": "fadeInLeft", "duration": 500}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"cssClass": "fadeInLeft", "duration": 1000}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"cssClass": "fadeInLeft", "duration": 1500}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"cssClass": "fadeInLeft", "duration": 2000}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"cssClass": "fadeInLeft", "duration": 2500}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"cssClass": "fadeInLeft", "duration": 3000}'>
  {{< animation-content >}}
</div>
{{< /example >}}

## Delay

{{< example >}}
<div data-of-animation='{"cssClass": "fadeInLeft", "delay": 500}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"cssClass": "fadeInLeft", "delay": 1000}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"cssClass": "fadeInLeft", "delay": 1500}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"cssClass": "fadeInLeft", "delay": 2000}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"cssClass": "fadeInLeft", "delay": 2500}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"cssClass": "fadeInLeft", "delay": 3000}'>
  {{< animation-content >}}
</div>
{{< /example >}}

## Offset

{{< example >}}
<div data-of-animation='{"cssClass": "fadeInLeft", "offset" : 300}'>
  {{< animation-content >}}
</div>

<div data-of-animation='{"cssClass": "fadeInLeft", "offset" : 250}'>
  {{< animation-content >}}
</div>
{{< /example >}}

## Repeat

{{< example >}}
<div data-of-animation='{"cssClass": "fadeInLeft", "repeat": true}'>
  {{< animation-content >}}
</div>
{{< /example >}}

## Usage

### Markup

The required markup for a animation is only a `data` attribute on the HTML element:

```html

<div data-of-animation></div>
```

### Options

You can pass extra options as JSON value of the data attribute. Here is the list of all available options (
alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `cssClass` | `string` | `'fadeIn'` | @Todo. |
| `duration` | `number` | `1500` | @Todo. |
| `delay` | `number` | `0` | @Todo. |
| `offset` | `number` | `0` | @Todo. |
| `repeat` | `boolean` | `false` | @Todo. |
{{< /bs-table >}}

### Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `in.of.animation` | @Todo |
| `out.of.animation` | @Todo |
{{< /bs-table >}}

```js
const element = document.getElementById('animate')

element.addEventListener('initialized.of.animation', async () => {
  const animation = await openFrontend.Animation.then(component => component.getInstance(element))
})
```
