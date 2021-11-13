import { OFFER_TYPE_TEXT } from './data.js';

const templateFragment = document.querySelector('#card').content.querySelector('.popup');

const returnNecessaryFeatures = (featuresElements) => {
  const featuresFragment = document.createDocumentFragment();

  featuresElements.forEach((element) => {

    const feature = document.createElement('li');
    feature.classList.add('popup__feature');
    feature.classList.add(`popup__feature--${element}`);
    featuresFragment.appendChild(feature);
  });

  return featuresFragment;
};

const getRenderPhotos = (photosArray) => {
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

  return photosFragment;
};


const createBalloon = (ad) => {
  const adElement = templateFragment.cloneNode(true);

  adElement.querySelector('.popup__title').textContent = ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${ad.offer.price  } ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = OFFER_TYPE_TEXT[ad.offer.type];
  adElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms  } комнаты для ${  ad.offer.guests  } гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin} выезд до ${ad.offer.checkout}`;
  adElement.querySelector('.popup__description').textContent = ad.offer.description;
  adElement.querySelector('.popup__avatar').src = ad.author.avatar;

  const popupFeaturesContainer = adElement.querySelector('.popup__features');
  popupFeaturesContainer.innerHTML = '';
  if (ad.offer.features) {
    popupFeaturesContainer.appendChild(returnNecessaryFeatures(ad.offer.features));
  }


  const photosContainer = adElement.querySelector('.popup__photos');
  photosContainer.innerHTML = '';
  if (ad.offer.photos){
    photosContainer.appendChild(getRenderPhotos(ad.offer.photos));
  }

  return adElement;
};

export {createBalloon};
