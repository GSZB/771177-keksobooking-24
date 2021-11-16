import { formFilter } from './form-disabled.js';
import { fetchAds } from './api.js';
import { REQUIRED_BALLOON_AMOUNT } from './data.js';
import { tokyoMap } from './map.js';
import { bindBalloonToMap } from './map.js';
import { markerGroup } from './map.js';

const housingFilter = formFilter.querySelector('#housing-type');
const priceFilter = formFilter.querySelector('#housing-price');
const roomsFilter = formFilter.querySelector('#housing-rooms');
const guestFilter = formFilter.querySelector('#housing-guests');
const mapCheckboxes = formFilter.querySelectorAll('.map__checkbox');

const getRank = (info) => {
  let rank = 0;

  if (housingFilter.value === info.offer.type) {
    rank++;
  }

  if (roomsFilter.value !== 'any' && +roomsFilter.value === info.offer.rooms) {
    rank++;
  }

  switch (priceFilter.value) {
    case 'middle':
      if (info.offer.price >= 10000 && info.offer.price <= 50000) {
        rank += 2;
      }

      break;
    case 'low':
      if (info.offer.price <= 10000) {
        rank += 1;
      }

      break;
    case 'high':
      if (info.offer.price >= 50000) {
        rank += 3;
      }

      break;
  }

  if (guestFilter.value !== 'any') {
    if (info.offer.guests === +guestFilter.value) {
      rank += 2;
    } else if (info.offer.guests > +guestFilter.value) {
      rank += 3;
    } else {
      rank += 1;
    }
  }

  mapCheckboxes.forEach((el) => {
    if (el.checked && el.value.includes(info.offer.features)) {
      rank++;
    }
  });

  return rank;
};

const getFilteredData = (array) => {
  const filteredArray = [];

  array.forEach((el) => {
    el.rank = getRank(el);
    filteredArray.push(el);
  });

  return filteredArray;
};

let serverDataArray = [];

const renderMapBalloons = () => {
  const balloonSlice = getFilteredData(serverDataArray)
    .sort((a, b) => b.rank - a.rank)
    .slice(0, REQUIRED_BALLOON_AMOUNT);
  balloonSlice.forEach((ad) => {
    bindBalloonToMap(ad);
  });
};

fetchAds().then((ads) => {
  serverDataArray = ads;
  renderMapBalloons();
});

let timeout = null;

formFilter.addEventListener('change', () => {
  tokyoMap.closePopup();

  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    markerGroup.clearLayers();
    renderMapBalloons();
  }, 500);
});
