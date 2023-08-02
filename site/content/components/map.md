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
  <iframe src="https://maps.google.com/maps?hl=en&amp;q=TSO%20AG%2C%20F%C3%BCrstenlandstrasse%2053%2C%209000%20St.Gallen&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=9.311041831970217%2C47.39439835079049%2C9.384942054748537%2C47.432383951962365&amp;layer=mapnik&amp;marker=47.413394576333644%2C9.347991943359375" loading="lazy"></iframe>
</div>
{{< /example >}}

## Responsive Maps

To ensure your maps look great on all devices, our Map component supports responsive maps. Here is how you can leverage [Ratios]({{< docsref "/helpers/ratio" >}}) helpers to create responsive maps:

{{< example class="bd-example-map-ratios" >}}
<div class="ratio ratio-1x1">
 <iframe src="https://maps.google.com/maps?hl=en&amp;q=TSO%20AG%2C%20F%C3%BCrstenlandstrasse%2053%2C%209000%20St.Gallen&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

<div class="ratio ratio-4x3">
 <iframe src="https://maps.google.com/maps?hl=en&amp;q=TSO%20AG%2C%20F%C3%BCrstenlandstrasse%2053%2C%209000%20St.Gallen&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

<div class="ratio ratio-16x9">
  <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=9.311041831970217%2C47.39439835079049%2C9.384942054748537%2C47.432383951962365&amp;layer=mapnik&amp;marker=47.413394576333644%2C9.347991943359375" loading="lazy"></iframe>
</div>

<div class="ratio ratio-21x9">
  <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=9.311041831970217%2C47.39439835079049%2C9.384942054748537%2C47.432383951962365&amp;layer=mapnik&amp;marker=47.413394576333644%2C9.347991943359375" loading="lazy"></iframe>
</div>
{{< /example >}}


