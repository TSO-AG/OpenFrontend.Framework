---
layout: docs
title: Map
description: The component provides a straightforward way to embed and display interactive Google Maps and OpenStreetMap directly into your project.
group: components
toc: true
---

## Google Maps

### Google Maps API

This section provides an example of how to embed Google Maps into your web page using OpenFrontend.Framework and Google Maps JavaScript API.

<div class="bd-example">
  <div class="ratio ratio-16x9">
    <div id="map"></div>
  </div>

  <script>
    (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
      key: "AIzaSyB5gDRkUqJ8psAwkNBbhrhr54BEfAfCAVw",
      v: "weekly",
      // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
      // Add other bootstrap parameters as needed, using camel case.
    });
  </script>

  <script>
    let map

    async function initMap() {
      const { Map, InfoWindow } = await google.maps.importLibrary('maps');
      const { Marker } = await google.maps.importLibrary("marker");

      const position = {
        lat: 47.41340,
        lng: 9.34799,
      };

      map = new Map(document.getElementById('map'), {
        center: position,
        zoom: 14,
      });

      const infowindow = new InfoWindow({
        content: '<b>TSO AG</b><br>Fürstenlandstrasse 53<br>9000 St.Gallen',
        ariaLabel: "TSO AG",
      });

      const marker = new Marker({
        position: position,
        map: map,
        title: 'TSO AG',
      });

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
      });
    }

    initMap()
  </script>
</div>

Example HTML Structure

{{< highlight html >}}
  <div class="ratio ratio-16x9">
    <!--The div element for the map -->
    <div id="map"></div>
  </div>
{{< /highlight >}}

Loading the Google Maps API and initializing the map

{{< highlight html >}}

<script>
  (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "YOUR_API_KEY",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });
</script>

<script>
  let map

  async function initMap() {
    const { Map, InfoWindow } = await google.maps.importLibrary('maps');
    const { Marker } = await google.maps.importLibrary("marker");

    const position = {
      lat: 47.41340,
      lng: 9.34799,
    };

    map = new Map(document.getElementById('map'), {
      center: position,
      zoom: 14,
    });

    const infowindow = new InfoWindow({
      content: '<b>TSO AG</b><br>Fürstenlandstrasse 53<br>9000 St.Gallen',
      ariaLabel: "TSO AG",
    });

    const marker = new Marker({
      position: position,
      map: map,
      title: 'TSO AG',
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  }

  initMap()
</script>

{{< /highlight >}}

In the given example, the map is displayed in a div with an id of `map`. The map is centered at the specified latitude and longitude, and a marker is set at this location. Please replace the `YOUR_API_KEY` placeholder with your actual Google Maps API key.

For comprehensive details on the options and methods available with the Google Maps JavaScript API, see the official Google Maps API documentation: https://developers.google.com/maps/documentation/javascript/tutorial.

### Google Maps Iframe

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

### OpenStreetMap with Leaflet.js

This section provides an example of how to integrate OpenStreetMap into your web page using the Leaflet.js library.

<div class="bd-example">
  <div class="ratio ratio-16x9">
    <div id="mapOpenStreetMap"></div>
  </div>

   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>

   <!-- Make sure you put this AFTER Leaflet's CSS -->
   <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>

  <script>
  {
    const position = [47.41340, 9.34799];

    let map = L.map('mapOpenStreetMap', {
      zoomControl: false
    }).setView(position, 13);

     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.control.zoom({
           position: 'bottomright'
      }).addTo(map);

     L.marker(position).addTo(map)
          .bindPopup("<b>TSO AG</b><br>Fürstenlandstrasse 53<br>9000 St.Gallen");
  }
  </script>
</div>

Example HTML Structure

{{< highlight html >}}
<div class="ratio ratio-16x9">
  <!--The div element for the map -->
  <div id="map"></div>
</div>
{{< /highlight >}}

Loading Leaflet.js Library
{{< highlight html >}}
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
 integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
 crossorigin=""/>

<!-- Make sure you put this AFTER Leaflet's CSS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
 integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
 crossorigin=""></script>
{{< /highlight >}}

Initializing the Map

{{< highlight html >}}
<script>
{
  const position = [47.41340, 9.34799];

  let map = L.map('map', {
    zoomControl: false
  }).setView(position, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);

  L.marker(position).addTo(map)
    .bindPopup("<b>TSO AG</b><br>Fürstenlandstrasse 53<br>9000 St.Gallen");
}
</script>
{{< /highlight >}}

The above code sets up a simple map with a marker and popup using the Leaflet.js library and OpenStreetMap data. The map is configured to display on a div with the id "map".

For a comprehensive understanding of the options and methods available with the Leaflet.js library, see the official Leaflet.js documentation.

### OpenStreetMap Iframe

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
  <div id="map1"></div>
</div>

<div class="ratio ratio-4x3">
  <div id="map2"></div>
</div>

<div class="ratio ratio-16x9">
  <div id="map3"></div>
</div>

<div class="ratio ratio-21x9">
  <div id="map4"></div>
</div>

<script>
  // Generate Google Maps to #map1 and #map2
  async function initGoogleMap(id) {
    const { Map, InfoWindow } = await google.maps.importLibrary('maps');
    const { Marker } = await google.maps.importLibrary("marker");

    const position = {
      lat: 47.41340,
      lng: 9.34799,
    };

    const map = new Map(document.getElementById(id), {
      center: position,
      zoom: 14,
    });

    const infowindow = new InfoWindow({
      content: '<b>TSO AG</b><br>Fürstenlandstrasse 53<br>9000 St.Gallen',
      ariaLabel: "TSO AG",
    });

    const marker = new Marker({
      position: position,
      map: map,
      title: 'TSO AG',
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  }

  initGoogleMap('map1');
  initGoogleMap('map2');

  // Generate OpenStreetMap to #map3 and #map4
  function initOpenStreetMap(id) {
    const position = [47.41340, 9.34799];

    let map = L.map(id, {
      zoomControl: false
    }).setView(position, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.control.zoom({
      position: 'bottomright'
    }).addTo(map);

    L.marker(position).addTo(map)
      .bindPopup("<b>TSO AG</b><br>Fürstenlandstrasse 53<br>9000 St.Gallen");
  }

  initOpenStreetMap('map3');
  initOpenStreetMap('map4');
</script>
{{< /example >}}

