import {getRandomInt, getRandomDecimal, getRandomArrayElement} from './utils.js';

const TOKYO_COORDINATES = {
  lat: 35.65858640915274,
  lng: 139.74540710449222,
};
const NUMBERS_OF_IMAGES = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const PLACES_OF_HOTELS = ['Grand Budapest Hotel', 'Balaton Hotel', 'Lupa Beach Hotel', 'Szabolcs Hotel', 'Siofok Hotel', 'Margaret Hostel', 'Hotel Panorama', 'Hotel Tihany', 'Badacsony Apartments', 'Tapolca Hotel'];
const MIN_PRICE = 10;
const MAX_PRICE = 1000;
const OFFER_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const OFFER_TYPE_TEXT = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};
const TYPE_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const guestOptionsByRoomNumber = {
  1: ['для 1 гостя'],
  2: ['для 1 гостя', 'для 2 гостей'],
  3: ['для 1 гостя', 'для 2 гостей', 'для 3 гостей'],
  100: ['не для гостей'],
};
const MIN_NUMBER_OF_ROOMS = 1;
const MAX_NUMBER_OF_ROOMS = 5;
const MIN_NUMBER_OF_GUESTS = 1;
const MAX_NUMBER_OF_GUESTS = 8;
const CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIMES = CHECKIN_TIMES;
const FEATURES_OF_PLACES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const MIN_LATTITUDE = 35.65000;
const MAX_LATTITUDE = 35.70000;
const MIN_LONGITUDE = 139.70000;
const MAX_LONGITUDE = 139.80000;
const DECIMAL_LENGTH = 5;
const SIMILAR_AD_COUNT = 10;
const PHOTOS_OF_PLACES = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in turpis eget lacus auctor suscipit in id nisi. Nunc aliquet finibus nisi eu vehicula. Quisque a lobortis mi. Nulla eu ultrices leo, non gravida justo. Maecenas vel nisi est. Donec placerat pulvinar risus nec finibus. Integer facilisis sagittis orci id vestibulum. Integer tincidunt risus et tellus malesuada, et placerat neque venenatis. In hac habitasse platea dictumst. Cras quis vestibulum lorem.';


//location, объект — местоположение в виде географических координат

const getCoordinates = (min, max, decimal) => getRandomDecimal(min, max, decimal);

const getLocationCoordinates = () => ({
  lat: getCoordinates(MIN_LATTITUDE, MAX_LATTITUDE, DECIMAL_LENGTH),
  lng: getCoordinates(MIN_LONGITUDE, MAX_LONGITUDE, DECIMAL_LENGTH),
});

// const locationCoordinates = getLocationCoordinates();


//author, объект — описывает автора

const author = () => ({ avatar: `img/avatars/user${  getRandomArrayElement(NUMBERS_OF_IMAGES)  }.png` });

//title, строка — заголовок предложения

const titleOfTheOffer = () => (getRandomArrayElement(PLACES_OF_HOTELS));

//price, число — стоимость

const priceOfTheOffer = (min, max) => (getRandomInt(min, max));

//type, строка — одно из пяти фиксированных значений

const typeOfTheOffer = () => getRandomArrayElement(OFFER_TYPE);

//rooms, число — количество комнат

const numberOfRooms = (min, max) => (getRandomInt(min, max));

//guests, число — количество гостей

const numberOfGuests = (min, max) => (getRandomInt(min, max));

//checkin,  строка — одно из трёх фиксированных значений

const checkinTime = () => (getRandomArrayElement(CHECKIN_TIMES));

//checkout,  строка — одно из трёх фиксированных значений

const checkoutTime = () => (getRandomArrayElement(CHECKOUT_TIMES));

//features, строка — массив случайной длины из пяти фиксированных значений

const featuresOfThePlace = () => [...new Set(Array.from({length: Math.floor(Math.random() * (FEATURES_OF_PLACES.length + 1))}, () => getRandomArrayElement(FEATURES_OF_PLACES)))];

//description, строка — строка — описание помещения

const descriptionOfThePlace = () => DESCRIPTION;

//photos, строка — массив случайной длины из трех фиксированных значений

const photosOfThePlaces = () => [...new Set(Array.from({length: Math.floor(Math.random() * (PHOTOS_OF_PLACES.length + 1))}, () => getRandomArrayElement(PHOTOS_OF_PLACES)))];

const createOffer = () => ({
  title: titleOfTheOffer(),
  address: getLocationCoordinates(),
  price: priceOfTheOffer(MIN_PRICE, MAX_PRICE),
  type: typeOfTheOffer(),
  rooms: numberOfRooms(MIN_NUMBER_OF_ROOMS, MAX_NUMBER_OF_ROOMS),
  guests: numberOfGuests(MIN_NUMBER_OF_GUESTS, MAX_NUMBER_OF_GUESTS),
  checkin: checkinTime(),
  checkout: checkoutTime(),
  features: featuresOfThePlace(),
  description: descriptionOfThePlace(),
  photos: photosOfThePlaces(),
});

// const createAds = () => new Array(SIMILAR_AD_COUNT).fill(null).map(createAd);

const createAds = () => {
  const arr = []; //new Array(SIMILAR_AD_COUNT).fill(null)

  for(let i = 0; i <= SIMILAR_AD_COUNT; i++) {
    const authorObj = author();
    const offerObj = createOffer();
    const locationObj = offerObj.address;

    arr.push({
      author: authorObj,
      offer: offerObj,
      location: locationObj,
    });
  }

  return arr;
};

export {TOKYO_COORDINATES, OFFER_TYPE_TEXT, TYPE_PRICE, guestOptionsByRoomNumber, createAds};
