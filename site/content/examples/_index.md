---
layout: single
title: Examples
description: Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.
aliases: "/examples/"
---

{{< list-examples.inline >}}
{{ range $entry := $.Site.Data.examples -}}
<div class="bd-content">
  <h2 id="{{ $entry.category | urlize }}">{{ $entry.category }}</h2>
  <p>{{ $entry.description }}</p>

  {{ range $i, $example := $entry.examples -}}
    {{- $len := len $entry.examples -}}
    {{ if (eq $i 0) }}<div class="row">{{ end }}
        <div class="col-sm-6 col-md-3 mb-3">
          <a class="d-block link-offset-1" href="examples/{{ $example.name | urlize }}/">
            <img class="img-thumbnail mb-3" srcset="assets/img/examples/{{ $example.name | urlize }}.png,
                                                    assets/img/examples/{{ $example.name | urlize }}@2x.png 2x"
                                            src="assets/img/examples/{{ $example.name | urlize }}.png"
                                            alt=""
                                            width="480" height="300"
                                            loading="lazy">
            <h3 class="h5 mb-1">
              {{ $example.name }}
            </h3>
          </a>
          <p class="text-body-secondary">{{ $example.description }}</p>
        </div>
    {{ if (eq (add $i 1) $len) }}</div>{{ end }}
  {{ end -}}
</div>
{{ end -}}
{{< /list-examples.inline >}}
