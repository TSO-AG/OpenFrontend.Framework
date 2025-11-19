---
layout: docs
title: Icons
description: At OpenFrontend.Framework, we've incorporated a wealth of useful icons that we use in our components. Discover more by reading our article.
group: components
toc: true
---

## Simple icon

To insert your own icon, you can either reference an icon from a sprite file or directly include the SVG path in your HTML. Below are two examples demonstrating these approaches.
Using the `of-icon` class, these icons will adapt to the color and size of their parent element, making them versatile and easy to incorporate into various parts of your UI.

Direct SVG path inclusion:
{{< example >}}
<svg class="of-icon" width="16" height="16" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
</svg>
{{< /example >}}

Referencing an SVG sprite:
{{< example >}}
{{< icon name="question-circle-fill" >}}
{{< /example >}}

### Variants

OpenFrontend.Framework includes several icon circle variants, each serving its own semantic purpose, with a few extras thrown in for more control.

{{< example >}}
{{< icon.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="icon-circle icon-circle-{{ .name }}">
  {{ partial "icon" (dict "name" "question-circle-fill") }}
</span>
{{- end -}}
{{< /icon.inline >}}
{{< /example >}}

### Sizes

Do you prefer larger or smaller circle icons? You can add `.icon-circle-lg` for a larger size or `.icon-circle-sm` for a smaller size.

{{< example >}}
<span class="icon-circle icon-circle-primary icon-circle-lg">
  {{< icon name="question-circle-fill" >}}
</span>
<span class="icon-circle icon-circle-secondary icon-circle-lg">
  {{< icon name="question-circle-fill" >}}
</span>
{{< /example >}}

{{< example >}}
<span class="icon-circle icon-circle-primary icon-circle-sm">
  {{< icon name="question-circle-fill" >}}
</span>
<span class="icon-circle icon-circle-secondary icon-circle-sm">{
  {< icon name="question-circle-fill" >}}
</span>
{{< /example >}}

You can even roll your own custom sizing with CSS variables:

{{< example >}}

<span class="icon-circle icon-circle-primary"
style="--bs-icon-circle-padding: 0.25rem; --bs-icon-circle-font-size: 1.5rem;">
{{< icon name="question-circle-fill" >}}
</span>

<span class="icon-circle icon-circle-primary"
style="--bs-icon-circle-padding: 1rem; --bs-icon-circle-font-size: 1.5rem;">
{{< icon name="question-circle-fill" >}}
</span>
{{< /example >}}

## CSS

### Variables

We use local CSS variables on `.icon-circle` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="icon-circle-css-vars" file="src/scss/_icons.scss" >}}

Each `.icon-circle-*` modifier class updates the appropriate CSS variables to minimize additional CSS rules with our `icon-circle-variant()` and `icon-circle-size()` mixins.

Here's an example of building a custom `.icon-circle-*` modifier class.

<div class="bd-example">
  <button type="button" class="icon-circle icon-circle-bd-primary">{{< icon name="question-circle-fill" >}}</button>
</div>

{{< scss-docs name="icon-circle-css-vars-example" file="site/assets/scss/_icons.scss" >}}

### Sass variables

{{< scss-docs name="icon-circle-variables" file="src/scss/_variables.scss" >}}

### Sass mixins

There are two mixins for icon circle: button based on `$theme-colors`, and a button size mixin.

{{< scss-docs name="icon-circle-variant-mixin" file="src/scss/mixins/_icons.scss" >}}
{{< scss-docs name="icon-circle-size-mixin" file="src/scss/mixins/_icons.scss" >}}

### Sass loops

Rounded icon variants use their respective mixins with our $theme-colors map to generate the modifier classes in scss/_icons.scss.

{{< scss-docs name="icon-circle-variant-loops" file="src/scss/_icons.scss" >}}

