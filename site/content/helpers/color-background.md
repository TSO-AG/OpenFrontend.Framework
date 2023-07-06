---
layout: docs
title: Color and background
description: Set a background color with contrasting foreground color.
group: helpers
toc: true
---

## Overview

Color and background helpers combine the power of our [`.text-*` utilities]({{< docsref "/utilities/colors" >}}) and [`.bg-*` utilities]({{< docsref "/utilities/background" >}}) in one class. Using our Sass `color-contrast()` function, we automatically determine a contrasting `color` for a particular `background-color`.

{{< callout warning >}}
**Heads up!** There's currently no support for a CSS-native `color-contrast` function, so we use our own via Sass. This means that customizing our theme colors via CSS variables may cause color contrast issues with these utilities.
{{< /callout >}}

{{< example >}}
{{< text-bg.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="text-bg-{{ .name }} p-3">{{ .name | title }} with contrasting color</div>
{{- end -}}
{{< /text-bg.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## With components

Use them in place of combined `.text-*` and `.bg-*` classes, like on [badges]({{< docsref "/components/badge#background-colors" >}}):

{{< example >}}
<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-info">Info</span>
{{< /example >}}
