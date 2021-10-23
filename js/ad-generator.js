import { createAds } from './data.js';

const adField = document.querySelector('.map__canvas');
const templateFragment = document.querySelector('#card').content;
const template = templateFragment.querySelector('.popup');

const similarAds = createAds();

// const similarAdsFragment = document.createDocumentFragment();

similarAds.forEach((ad) => {
  const adElement = templateFragment.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent = `${ad.offer.address.lat  } ${  ad.offer.address.lng}`;
  adElement.querySelector('.popup__text--price').textContent = `${ad.offer.price  } ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = ad.offer.type;
  adElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms  } комнаты для ${  ad.offer.guests  } гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin} выезд до ${ad.offer.checkout}`;
  adElement.querySelector('.popup__description').textContent = ad.offer.description;
  console.log(adElement.textContent);
  adField.appendChild(adElement);
});
