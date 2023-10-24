---
layout: docs
title: State
description: Display the state of the POI object.
group: components
aliases:
  - "/components/"
toc: true
---

## Examples

{{< example >}}
<span class="state state--open">open</span>
<span class="state state--unknown">unknown</span>
<span class="state state--closed">closed</span>
{{< /example >}}

## Icon without text

{{< example >}}
<div class="bg-light p-3">
  <span class="state state-simple state--open"><span class="visually-hidden">open</span></span>
  <span class="state state-simple state--unknown"><span class="visually-hidden">unknown</span></span>
  <span class="state state-simple state--closed"><span class="visually-hidden">closed</span></span>
</div>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="state-css-vars" file="src/scss/_card-molecules.scss" >}}

### Sass variables

{{< scss-docs name="state-variables" file="src/scss/_variables.scss" >}}
