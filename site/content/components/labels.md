---
layout: docs
title: Labels
description: The labels component in web design provides a framework to display small images within a structured box layout. It's an efficient method for presenting visual content in a neat, organized, and easily navigable format.
group: components
toc: true
---

## Usage

{{< example >}}
<div class="labels">
  <div class="labels-item">
    <figure>{{< placeholder markup="img" width="36" height="36" text="A" >}}</figure>
  </div>
  <div class="labels-item">
    <figure>{{< placeholder markup="img" width="36" height="36" text="B" >}}</figure>
  </div>
  <div class="labels-item">
    <figure>{{< placeholder markup="img" width="36" height="36" text="C" >}}</figure>
  </div>
  <span class="labels-label">+1</span>
</div>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="labels-css-vars" file="src/scss/_labels.scss" >}}

### Sass variables

{{< scss-docs name="labels-variables" file="src/scss/_variables.scss" >}}
