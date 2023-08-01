---
layout: docs
title: Map
description: The component provides a straightforward way to embed and display interactive Google Maps and OpenStreetMap directly into your project.
group: components
toc: true
---

## Google Maps

The use of Google Maps within your OpenFrontend.Framework project is incredibly easy. Below is a simple code snippet that demonstrates how to embed a Google Map.

{{< example >}}
<div class="ratio ratio-16x9">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.254221913!2d-74.14482735958153!3d40.69763074405856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20SUSA!5e0!3m2!1spl!2suk!4v1690890541380!5m2!1spl!2suk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
{{< /example >}}

To embed a Google Map:

- First, find your desired location on Google Maps.
- Click on the `Share` button and choose `Embed a map`.
- Copy the provided HTML code.
- Paste this code within your project wherever you want the map to appear.

## OpenStreetMap

Incorporating OpenStreetMap into your project is similar to using Google Maps. Here's an adapted set of instructions to guide you:

- Navigate to OpenStreetMap.
- Use the search bar to identify the location you wish to display.
- After finding your desired location, right-click on it and select the `Show Address` option.
- Find the `Share` option, typically located on the right panel.
- In the popup, click on the `HTML` tab to reveal the embed code.
- Paste this code within your project wherever you want the map to appear.


{{< example >}}
<div class="ratio ratio-16x9">
  <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-74.54017639160158%2C40.307807189232435%2C-73.36944580078126%2C40.989228176893796&amp;layer=mapnik" loading="lazy"></iframe>
</div>
{{< /example >}}

## Responsive Maps

To ensure your maps look great on all devices, our Map component supports responsive maps. Here is how you can leverage [Ratios]({{< docsref "/helpers/ratio" >}}) helpers to create responsive maps:

{{< example class="bd-example-map-ratios" >}}
<div class="ratio ratio-1x1">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.254221913!2d-74.14482735958153!3d40.69763074405856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20SUSA!5e0!3m2!1spl!2suk!4v1690890541380!5m2!1spl!2suk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

<div class="ratio ratio-4x3">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.254221913!2d-74.14482735958153!3d40.69763074405856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20SUSA!5e0!3m2!1spl!2suk!4v1690890541380!5m2!1spl!2suk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

<div class="ratio ratio-16x9">
  <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-74.54017639160158%2C40.307807189232435%2C-73.36944580078126%2C40.989228176893796&amp;layer=mapnik" loading="lazy" ></iframe>
</div>

<div class="ratio ratio-21x9">
  <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-74.54017639160158%2C40.307807189232435%2C-73.36944580078126%2C40.989228176893796&amp;layer=mapnik" loading="lazy" ></iframe>
</div>
{{< /example >}}


