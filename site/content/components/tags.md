---
layout: docs
title: Tags
description: Documentation and examples for the Tags component, our small component for labeling and categorizing content.
group: components
toc: true
---

## Examples

Tags scale to match the size of the immediate parent element by using relative font sizing and `em` units.

### Simple list
{{< example >}}
<ul class="tag-list">
  <li class="tag">Tag 01</li>
  <li class="tag">Tag 02</li>
  <li class="tag">Tag 03</li>
  <li class="tag">Another tag</li>
  <li class="tag">…</li>
</ul>
{{< /example >}}

### Icon list
{{< example >}}
<ul class="tag-list">
  <li class="tag"><span class="tag-icon">{{< icon name="check-lg" >}}</span>Tag 01</li>
  <li class="tag"><span class="tag-icon">{{< icon name="check-lg" >}}</span>Tag 02</li>
  <li class="tag"><span class="tag-icon">{{< icon name="check-lg" >}}</span>Tag 03</li>
  <li class="tag"><span class="tag-icon">{{< icon name="check-lg" >}}</span>Another tag</li>
</ul>
{{< /example >}}

## Background colors

Set a `background-color` with contrasting foreground `color` with [our `.text-bg-{color}` helpers]({{< docsref "/helpers/color-background" >}}). Previously it was required to manually pair your choice of [`.text-{color}`]({{< docsref "/utilities/colors" >}}) and [`.bg-{color}`]({{< docsref "/utilities/background" >}}) utilities for styling, which you still may use if you prefer.

{{< example >}}
{{< tag.inline >}}
<ul class="tag-list">
{{- range (index $.Site.Data "theme-colors") }}
  <li class="tag text-bg-{{ .name }}">{{ .name | title }}</li>{{- end -}}
{{< /tag.inline >}}
</ul>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## CSS

### Variables

Tags use local CSS variables on `.tag` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="tag-css-vars" file="src/scss/_tag.scss" >}}

### Sass variables

#### Tag list
{{< scss-docs name="tag-list-variables" file="src/scss/_variables.scss" >}}

#### Tag
{{< scss-docs name="tag-variables" file="src/scss/_variables.scss" >}}
