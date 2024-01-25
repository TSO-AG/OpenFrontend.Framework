---
layout: docs
title: Icons
description: At OpenFrontend.Framework, we've incorporated a wealth of useful icons that we use in our components. Discover more by reading our article.
group: components
toc: true
---

## Simple icon

To insert your own icon, you can use the following code:

{{< example >}}
<i class="ofi-question-circle-fill"></i>
{{< /example >}}
In this code, `ofi-` is a constant prefix. The part that comes after it, in this case `question-circle-fill`, represents the name of the icon. You can replace `question-circle-fill` with the name of any other icon you wish to use.

## All icons

The list of all available icons is below:

{{< callout info >}}
In OpenFrontend.Framework, we chose to use a limited set of icons based on [Bootstrap Icons](https://icons.getbootstrap.com). Our selected icon set is optimized and includes only the essential icons necessary for the efficient functioning of the OpenFrontend Framework.
{{< /callout >}}

{{< icon-list >}}

## Circle icon

You can use the `.icon-circle` class along with a color variant modifier, such as `.icon-circle-primary`, to display a round icon with a colored background.
{{< example >}}
<span class="icon-circle icon-circle-primary"><i class="ofi-question-circle-fill"></i></span>
{{< /example >}}

The `.icon-circle` class is intended to be used in conjunction with our icon circle variants, or to serve as a basis for your own custom styles.

### Variants

OpenFrontend.Framework includes several icon circle variants, each serving its own semantic purpose, with a few extras thrown in for more control.

{{< example >}}
{{< icon.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="icon-circle icon-circle-{{ .name }}"><i class="ofi-question-circle-fill"></i></span>
{{- end -}}
{{< /icon.inline >}}
{{< /example >}}

### Sizes

Do you prefer larger or smaller circle icons? You can add `.icon-circle-lg` for a larger size or `.icon-circle-sm` for a smaller size.

{{< example >}}
<span class="icon-circle icon-circle-primary icon-circle-lg"><i class="ofi-question-circle-fill"></i></span>
<span class="icon-circle icon-circle-secondary icon-circle-lg"><i class="ofi-question-circle-fill"></i></span>
{{< /example >}}

{{< example >}}
<span class="icon-circle icon-circle-primary icon-circle-sm"><i class="ofi-question-circle-fill"></i></span>
<span class="icon-circle icon-circle-secondary icon-circle-sm"><i class="ofi-question-circle-fill"></i></span>
{{< /example >}}

You can even roll your own custom sizing with CSS variables:

{{< example >}}

<span class="icon-circle icon-circle-primary"
style="--bs-icon-circle-padding: 0.25rem; --bs-icon-circle-font-size: 1.5rem;">
<i class="ofi-question-circle-fill"></i>
</span>

<span class="icon-circle icon-circle-primary"
style="--bs-icon-circle-padding: 1rem; --bs-icon-circle-font-size: 1.5rem;">
<i class="ofi-question-circle-fill"></i>
</span>
{{< /example >}}

## CSS

### Variables

We use local CSS variables on `.icon-circle` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="icon-circle-css-vars" file="src/scss/_icons.scss" >}}

Each `.icon-circle-*` modifier class updates the appropriate CSS variables to minimize additional CSS rules with our `icon-circle-variant()` and `icon-circle-size()` mixins.

Here's an example of building a custom `.icon-circle-*` modifier class.

<div class="bd-example">
  <button type="button" class="icon-circle icon-circle-bd-primary"><i class="ofi-question-circle-fill"></i></button>
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

