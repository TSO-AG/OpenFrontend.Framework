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
<div class="tag-list">
  <span class="tag">Tag 01</span>
  <span class="tag">Tag 02</span>
  <span class="tag">Tag 03</span>
  <span class="tag">Another tag</span>
  <span class="tag">…</span>
</div>
{{< /example >}}

### Icon list
{{< example >}}
<div class="tag-list">
  <span class="tag"><span class="tag-icon"><i class="ofi-check-lg"></i></span> Tag 01</span>
  <span class="tag"><span class="tag-icon"><i class="ofi-check-lg"></i></span>Tag 02</span>
  <span class="tag"><span class="tag-icon"><i class="ofi-check-lg"></i></span>Tag 03</span>
  <span class="tag"><span class="tag-icon"><i class="ofi-check-lg"></i></span>Another tag</span>
</div>
{{< /example >}}

## Background colors

Set a `background-color` with contrasting foreground `color` with [our `.text-bg-{color}` helpers]({{< docsref "/helpers/color-background" >}}). Previously it was required to manually pair your choice of [`.text-{color}`]({{< docsref "/utilities/colors" >}}) and [`.bg-{color}`]({{< docsref "/utilities/background" >}}) utilities for styling, which you still may use if you prefer.

{{< example >}}
{{< tag.inline >}}
<div class="tag-list">
{{- range (index $.Site.Data "theme-colors") }}
  <span class="tag text-bg-{{ .name }}">{{ .name | title }}</span>{{- end -}}
{{< /tag.inline >}}
</div>
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
