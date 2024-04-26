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
<div data-of-animation='{"name": "fadeInDown", "duration": 2000, "delay": 300 }'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"name": "fadeInLeft", "duration": 2000, "delay": 300}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"name": "fadeInRight", "duration": 2000, "delay": 300}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"name": "fadeInUp", "duration": 2000, "delay": 300}'>
  {{< animation-content >}}
</div>
{{< /example >}}

## Animation list

{{< example >}}
<h3>Fading entrances</h3>
<div class="row row-cols-3 justify-content-center">
  <div data-of-animation='{"name": "fadeInLeftBig"}'>
    {{< animation-content text="fadeInLeftBig" >}}
  </div>
  <div data-of-animation='{"name": "fadeInDownBig"}'>
    {{< animation-content text="fadeInDown">}}
  </div>
  <div data-of-animation='{"name": "fadeInRightBig"}'>
    {{< animation-content text="fadeInRightBig">}}
  </div>
  <div data-of-animation='{"name": "fadeInTopLeft"}'>
    {{< animation-content text="fadeInTopLeft">}}
  </div>
  <div data-of-animation='{"name": "fadeInDown"}'>
    {{< animation-content text="fadeInDown">}}
  </div>
  <div data-of-animation='{"name": "fadeInTopRight"}'>
    {{< animation-content text="fadeInTopRight">}}
  </div>
  <div data-of-animation='{"name": "fadeInLeft"}'>
    {{< animation-content text="fadeInLeft">}}
  </div>
  <div data-of-animation='{"name": "fadeIn"}'>
    {{< animation-content text="fadeIn">}}
  </div>
  <div data-of-animation='{"name": "fadeInRight"}'>
    {{< animation-content text="fadeInRight">}}
  </div>
  <div data-of-animation='{"name": "fadeInBottomLeft"}'>
    {{< animation-content text="fadeInBottomLeft">}}
  </div>
  <div data-of-animation='{"name": "fadeInUp"}'>
    {{< animation-content text="fadeInUp">}}
  </div>
  <div data-of-animation='{"name": "fadeInBottomRight"}'>
    {{< animation-content text="fadeInBottomRight">}}
  </div>
  <div data-of-animation='{"name": "fadeInUpBig"}'>
    {{< animation-content text="fadeInUp">}}
  </div>
</div>

<hr>

<h4 class="mb-4">Flippers</h4>
<div class="row row-cols-3 justify-content-center">
  <div data-of-animation='{"name": "flip"}'>
    {{< animation-content text="flip" >}}
  </div>
  <div data-of-animation='{"name": "flipInX"}'>
    {{< animation-content text="flipInX">}}
  </div>
  <div data-of-animation='{"name": "flipInY"}'>
    {{< animation-content text="flipInY">}}
  </div>
</div>

<hr>

<h4 class="mb-4">Lightspeed</h4>
<div class="row row-cols-3 justify-content-center">
  <div data-of-animation='{"name": "lightSpeedInLeft"}'>
    {{< animation-content text="lightSpeedInLeft">}}
  </div>
  <div data-of-animation='{"name": "lightSpeedInRight"}'>
    {{< animation-content text="lightSpeedInRight" >}}
  </div>
</div>

<hr>

<h4 class="mb-4">Rotating entrances </h4>
<div class="row row-cols-3 justify-content-center">
  <div data-of-animation='{"name": "rotateIn"}'>
    {{< animation-content text="rotateIn" >}}
  </div>
  <div data-of-animation='{"name": "rotateInDownLeft"}'>
    {{< animation-content text="rotateInDownLeft">}}
  </div>
  <div data-of-animation='{"name": "rotateInDownRight"}'>
    {{< animation-content text="rotateInDownRight">}}
  </div>
  <div data-of-animation='{"name": "rotateInUpLeft"}'>
    {{< animation-content text="rotateInUpLeft">}}
  </div>
  <div data-of-animation='{"name": "rotateInUpRight"}'>
    {{< animation-content text="rotateInUpRight">}}
  </div>
</div>

<hr>

<h4 class="mb-4">Zooming entrances</h4>
<div class="row row-cols-3 justify-content-center">
  <div data-of-animation='{"name": "zoomIn"}'>
    {{< animation-content text="zoomIn" >}}
  </div>
  <div data-of-animation='{"name": "zoomInDown"}'>
    {{< animation-content text="zoomInDown">}}
  </div>
  <div data-of-animation='{"name": "zoomInLeft"}'>
    {{< animation-content text="zoomInLeft">}}
  </div>
  <div data-of-animation='{"name": "zoomInRight"}'>
    {{< animation-content text="zoomInRight">}}
  </div>
  <div data-of-animation='{"name": "zoomInUp"}'>
    {{< animation-content text="zoomInUp">}}
  </div>
</div>

<hr>

{{< /example >}}

## Duration

{{< example >}}
<div data-of-animation='{"name": "fadeInLeft", "duration": 500}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"name": "fadeInLeft", "duration": 1000}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"name": "fadeInLeft", "duration": 1500}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"name": "fadeInLeft", "duration": 2000}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"name": "fadeInLeft", "duration": 2500}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"name": "fadeInLeft", "duration": 3000}'>
  {{< animation-content >}}
</div>
{{< /example >}}

## Delay

{{< example >}}
<div data-of-animation='{"name": "fadeInLeft", "delay": 500}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"name": "fadeInLeft", "delay": 1000}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"name": "fadeInLeft", "delay": 1500}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"name": "fadeInLeft", "delay": 2000}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"name": "fadeInLeft", "delay": 2500}'>
  {{< animation-content >}}
</div>
<div data-of-animation='{"name": "fadeInLeft", "delay": 3000}'>
  {{< animation-content >}}
</div>
{{< /example >}}

## Offset

{{< example >}}
<div data-of-animation='{"name": "fadeInLeft", "offset" : 300}'>
  {{< animation-content >}}
</div>

<div data-of-animation='{"name": "fadeInLeft", "offset" : 250}'>
  {{< animation-content >}}
</div>
{{< /example >}}

## Repeat

{{< example >}}
<div data-of-animation='{"name": "fadeInLeft", "repeat": true}'>
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
| `name` | `string` | `'fadeIn'` | @Todo. |
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
