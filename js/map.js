import {removeDisableCondition} from './form-disabled.js';
import { TOKYO_COORDINATES } from './data.js';
import { createBalloon } from './ad-generator.js';

const coordinateInput = document.querySelector('#address');

const tokyoMap = L.map('map-canvas')
  .on('load', () => {
    removeDisableCondition();
    coordinateInput.value = `${TOKYO_COORDINATES.lat.toFixed(5).toString()  }, ${  TOKYO_COORDINATES.lng.toFixed(5).toString()}`;
  })
  .setView(TOKYO_COORDINATES, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiZ3N6YiIsImEiOiJja3ZyazJnMW4ydHBvMm50a2dtenVjZXlrIn0.QkKUXwBrYXIf-hHOxv1OSA',
}).addTo(tokyoMap);

const myIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 25],
});

const secondaryIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainMarker = L.marker(
  TOKYO_COORDINATES,   {
    draggable: true,
    icon: myIcon,
  }).addTo(tokyoMap);

mainMarker.on('moveend', (evt) => {
  const markerCoordinates = evt.target.getLatLng();
  coordinateInput.value = `${markerCoordinates.lat.toFixed(5).toString()  }, ${  markerCoordinates.lng.toFixed(5).toString()}`;
});

const markerGroup = L.layerGroup().addTo(tokyoMap);

const bindBalloonToMap = (ad) => {
  const balloonElement = createBalloon(ad);

  L.marker({
    lat: ad.location.lat,
    lng: ad.location.lng,
  }, {
    icon: secondaryIcon,
  }).addTo(markerGroup)
    .bindPopup(balloonElement);
};

export {tokyoMap, mainMarker, bindBalloonToMap, markerGroup};
