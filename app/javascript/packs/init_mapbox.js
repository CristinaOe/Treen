import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const initMapbox = () => {
  const mapElement = document.getElementById('map');
  var vegan = document.getElementById('filter-vegan');
  var all = document.getElementById('filter-all');
  var good = document.getElementById('filter-good-cause');
  var fairTrade = document.getElementById('filter-fair-trade');
  var co2 = document.getElementById('filter-co-2');
  var secondHand = document.getElementById('filter-second-hand');
  var organic = document.getElementById('filter-organic');

  const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 25, duration: 0 });
  };

  if (mapElement) { // only build a map if there's a div#map to inject into
    // mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/erikvogler/ckpfmi53a1d8s17qqmygpjvfb'
    });
    const markers = JSON.parse(mapElement.dataset.markers);

    markers.forEach((marker) => {
    const popup = new mapboxgl.Popup().setHTML(marker.info_window);
    new mapboxgl.Marker()
      .setLngLat([ marker.lng, marker.lat ])
      .setPopup(popup)
      .addTo(map);
    });
    fitMapToMarkers(map, markers);

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showAccuracyCircle: false
      }),
    );

    map.addControl(new mapboxgl.NavigationControl());

    vegan.onclick = function(e) {
        all.className = '';
        this.className = 'active';
        document.querySelectorAll('.mapboxgl-marker').forEach(element => {
          element.remove()
        });
        // The setFilter function takes a GeoJSON feature object
        // and returns true to show it or false to hide it.
        markers.filter(function(f) {
          // console.log(f);
          return f.vegan;
        }).forEach((marker) => {
        const popup = new mapboxgl.Popup().setHTML(marker.info_window);
        new mapboxgl.Marker()
        .setLngLat([ marker.lng, marker.lat ])
        .setPopup(popup)
        .addTo(map);
        });
        fitMapToMarkers(map, markers);

        return false;
    };

        good.onclick = function(e) {
        all.className = '';
        this.className = 'active';
        document.querySelectorAll('.mapboxgl-marker').forEach(element => {
          element.remove()
        });
        // The setFilter function takes a GeoJSON feature object
        // and returns true to show it or false to hide it.
        markers.filter(function(f) {
          // console.log(f);
          return f.good;
        }).forEach((marker) => {
        const popup = new mapboxgl.Popup().setHTML(marker.info_window);
        new mapboxgl.Marker()
        .setLngLat([ marker.lng, marker.lat ])
        .setPopup(popup)
        .addTo(map);
        });
        fitMapToMarkers(map, markers);

        return false;
    };
    fairTrade.onclick = function(e) {
        all.className = '';
        this.className = 'active';
        document.querySelectorAll('.mapboxgl-marker').forEach(element => {
          element.remove()
        });
        // The setFilter function takes a GeoJSON feature object
        // and returns true to show it or false to hide it.
        markers.filter(function(f) {
          // console.log(f);
          return f.fairTrade;
        }).forEach((marker) => {
        const popup = new mapboxgl.Popup().setHTML(marker.info_window);
        new mapboxgl.Marker()
        .setLngLat([ marker.lng, marker.lat ])
        .setPopup(popup)
        .addTo(map);
        });
        fitMapToMarkers(map, markers);

        return false;
    };
    co2.onclick = function(e) {
      all.className = '';
      this.className = 'active';
      document.querySelectorAll('.mapboxgl-marker').forEach(element => {
        element.remove()
      });
        // The setFilter function takes a GeoJSON feature object
        // and returns true to show it or false to hide it.
        markers.filter(function(f) {
          // console.log(f);
          return f.co2;
        }).forEach((marker) => {
          const popup = new mapboxgl.Popup().setHTML(marker.info_window);
          new mapboxgl.Marker()
          .setLngLat([ marker.lng, marker.lat ])
          .setPopup(popup)
          .addTo(map);
        });
        fitMapToMarkers(map, markers);

        return false;
    };

    organic.onclick = function(e) {
      all.className = '';
      this.className = 'active';
      document.querySelectorAll('.mapboxgl-marker').forEach(element => {
        element.remove()
      });
        // The setFilter function takes a GeoJSON feature object
        // and returns true to show it or false to hide it.
        markers.filter(function(f) {
          // console.log(f);
          return f.organic;
        }).forEach((marker) => {
          const popup = new mapboxgl.Popup().setHTML(marker.info_window);
          new mapboxgl.Marker()
          .setLngLat([ marker.lng, marker.lat ])
          .setPopup(popup)
          .addTo(map);
        });
        fitMapToMarkers(map, markers);

        return false;
    };

    secondHand.onclick = function(e) {
      all.className = '';
      this.className = 'active';
      document.querySelectorAll('.mapboxgl-marker').forEach(element => {
        element.remove()
      });
        // The setFilter function takes a GeoJSON feature object
        // and returns true to show it or false to hide it.
        markers.filter(function(f) {
          // console.log(f);
          return f.secondHand;
        }).forEach((marker) => {
          const popup = new mapboxgl.Popup().setHTML(marker.info_window);
          new mapboxgl.Marker()
          .setLngLat([ marker.lng, marker.lat ])
          .setPopup(popup)
          .addTo(map);
        });
        fitMapToMarkers(map, markers);

        return false;
    };

    all.onclick = function() {
        all.className = '';
        this.className = 'active';
        map.markerLayer.setFilter(function(f) {
            // Returning true for all markers shows everything.
            return true;
        });
        return false;
    };
  }
};
export { initMapbox };
