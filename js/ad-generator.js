import { OFFER_TYPE_TEXT, createAds } from './data.js';

const templateFragment = document.querySelector('#card').content.querySelector('.popup');

const returnNecessaryFeatures = function (feautresContainer, necessaryFeautersArray) {
  const featuresElements = feautresContainer.querySelectorAll('.popup__feature');

  featuresElements.forEach((featureElement) => {
    const isNecessary = necessaryFeautersArray.some(
      (necessaryFeature) => featureElement.classList.contains(`popup__feature--${necessaryFeature}`),
    );

    if (!isNecessary) {
      featureElement.remove();
    }
  });
};

const renderPhotos = function (photosContainer, photosArray) {
  photosContainer.innerHTML = '';
  const photosFragment = document.createDocumentFragment();

  photosArray.forEach((src) => {
    const image = document.createElement('img');
    image.width = 45;
    image.height = 40;
    image.alt = 'Фотография жилья';
    image.className = 'popup__photo';
    image.src = src;
    photosFragment.appendChild(image);
  });

  photosContainer.appendChild(photosFragment);

};

const similarAds = createAds();

const createBalloon = (ad) => {
  const adElement = templateFragment.cloneNode(true);

  adElement.querySelector('.popup__title').textContent = ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent = `${ad.location.lat  } ${  ad.location.lng}`;
  adElement.querySelector('.popup__text--price').textContent = `${ad.offer.price  } ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = OFFER_TYPE_TEXT[ad.offer.type];
  adElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms  } комнаты для ${  ad.offer.guests  } гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin} выезд до ${ad.offer.checkout}`;
  returnNecessaryFeatures(adElement.querySelector('.popup__features'), ad.offer.features);
  adElement.querySelector('.popup__description').textContent = ad.offer.description;
  renderPhotos(adElement.querySelector('.popup__photos'), ad.offer.photos);
  adElement.querySelector('.popup__avatar').src = ad.author.avatar;

  return adElement;
};

export {similarAds, createBalloon};
