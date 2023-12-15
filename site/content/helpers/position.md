---
layout: docs
title: Position
description: Use these helpers for quickly configuring the position of an element.
group: helpers
toc: true
---

## Fixed top

Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.

```html
<div class="fixed-top">...</div>
```

## Fixed bottom

Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.

```html
<div class="fixed-bottom">...</div>
```

## Sticky top

Position an element at the top of the viewport, from edge to edge, but only after you scroll past it.

```html
<div class="sticky-top">...</div>
```

## Responsive sticky top

Responsive variations also exist for `.sticky-top` utility.

```html
<div class="sticky-sm-top">Stick to the top on viewports sized SM (small) or wider</div>
<div class="sticky-md-top">Stick to the top on viewports sized MD (medium) or wider</div>
<div class="sticky-lg-top">Stick to the top on viewports sized LG (large) or wider</div>
<div class="sticky-xl-top">Stick to the top on viewports sized XL (extra-large) or wider</div>
<div class="sticky-xxl-top">Stick to the top on viewports sized XXL (extra-extra-large) or wider</div>
```

## Sticky top header

Similar to the `.sticky-top` class, we also have `.sticky-top-header` class for positioning an element at the top of the viewport, from edge to edge, after you scroll past it. The main difference is that `.sticky-top-header` takes into account the height of the sticky header (if it exists on the page), thus adjusting the element's top value accordingly.

```html
<div class="sticky-top sticky-top-header">...</div>
```

## Sticky bottom

Position an element at the bottom of the viewport, from edge to edge, but only after you scroll past it.

```html
<div class="sticky-bottom">...</div>
```

## Responsive sticky bottom

Responsive variations also exist for `.sticky-bottom` utility.

```html
<div class="sticky-sm-bottom">Stick to the bottom on viewports sized SM (small) or wider</div>
<div class="sticky-md-bottom">Stick to the bottom on viewports sized MD (medium) or wider</div>
<div class="sticky-lg-bottom">Stick to the bottom on viewports sized LG (large) or wider</div>
<div class="sticky-xl-bottom">Stick to the bottom on viewports sized XL (extra-large) or wider</div>
<div class="sticky-xxl-bottom">Stick to the bottom on viewports sized XXL (extra-extra-large) or wider</div>
```
