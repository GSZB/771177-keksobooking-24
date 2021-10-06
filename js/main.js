const NUMBERS_OF_IMAGES = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const PLACES_OF_HOTELS = ['Grand Budapest Hotel', 'Balaton Hotel', 'Lupa Beach Hotel', 'Szabolcs Hotel', 'Siofok Hotel', 'Margaret Hostel', 'Hotel Panorama', 'Hotel Tihany', 'Badacsony Apartments', 'Tapolca Hotel'];
const MIN_PRICE = 10;
const MAX_PRICE = 1000;
const TYPE_OF_PLACES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
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
const SIMILAR_ADD_COUNT = 10;
const PHOTOS_OF_PLACES = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomInt(min, max) {
  if (min >= max) {
    return 'Минимальное значение не может превышать максимальное';
  }

  return Math.floor(min + Math.random() * (max - min));
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomDecimal(min, max, decimal) {
  if (min >= max) {
    return 'Минимальное значение не может превышать максимальное';
  }

  return (min + Math.random() * (max - min)).toFixed(decimal);
}

//Функция, возвращяющая случайный элемент с массива

function getRandomArrayElement(elements) {
  return elements[getRandomInt(0, elements.length)];
}

//location, объект — местоположение в виде географических координат

const coordinates = (min, max, decimal) => getRandomDecimal(min, max, decimal);

const locationCoordinates = {
  lat: coordinates(MIN_LATTITUDE, MAX_LATTITUDE, DECIMAL_LENGTH),
  lng: coordinates(MIN_LONGITUDE, MAX_LONGITUDE, DECIMAL_LENGTH),
};

//author, объект — описывает автора

const author = () => ({ avatar: `img/avatars/user${  getRandomArrayElement(NUMBERS_OF_IMAGES)  }.png` });

//title, строка — заголовок предложения

const titleOfTheOffer = () => ({ title: getRandomArrayElement(PLACES_OF_HOTELS)});

//address, строка — адрес предложения

const addressOfHotels = () => ({ address: [locationCoordinates.lat, locationCoordinates.lng]});

//price, число — стоимость

const priceOfTheOffer = (min, max) => ({price: getRandomInt(min, max)});

//type, строка — одно из пяти фиксированных значений

const typeOfTheOffer = () => ({ type: getRandomArrayElement(TYPE_OF_PLACES)});

//rooms, число — количество комнат

const numberOfRooms = (min, max) => ({rooms: getRandomInt(min, max)});

//guests, число — количество гостей

const numberOfGuests = (min, max) => ({guests: getRandomInt(min, max)});

//checkin,  строка — одно из трёх фиксированных значений

const checkinTime = () => ({ checkin: getRandomArrayElement(CHECKIN_TIMES)});

//checkout,  строка — одно из трёх фиксированных значений

const checkoutTime = () => ({ checkout: getRandomArrayElement(CHECKOUT_TIMES)});

//features, строка — массив случайной длины из пяти фиксированных значений

const featuresOfThePlace = () => Array.from({length: Math.floor(Math.random() * FEATURES_OF_PLACES.length)}, () => getRandomArrayElement(FEATURES_OF_PLACES));

//description, строка — строка — описание помещения

const descriptionOfThePlace = () => ({ description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in turpis eget lacus auctor suscipit in id nisi. Nunc aliquet finibus nisi eu vehicula. Quisque a lobortis mi. Nulla eu ultrices leo, non gravida justo. Maecenas vel nisi est. Donec placerat pulvinar risus nec finibus. Integer facilisis sagittis orci id vestibulum. Integer tincidunt risus et tellus malesuada, et placerat neque venenatis. In hac habitasse platea dictumst. Cras quis vestibulum lorem.'});

//photos, строка — массив случайной длины из трех фиксированных значений

const photosOfThePlaces = () => Array.from({length: Math.floor(Math.random() * PHOTOS_OF_PLACES.length)}, () => getRandomArrayElement(PHOTOS_OF_PLACES));

const createOffer = () => ([
  titleOfTheOffer(),
  addressOfHotels(),
  priceOfTheOffer(MIN_PRICE, MAX_PRICE),
  typeOfTheOffer(),
  numberOfRooms(MIN_NUMBER_OF_ROOMS, MAX_NUMBER_OF_ROOMS),
  numberOfGuests(MIN_NUMBER_OF_GUESTS, MAX_NUMBER_OF_GUESTS),
  checkinTime(),
  checkoutTime(),
  [...new Set(featuresOfThePlace())],
  descriptionOfThePlace(),
  [...new Set(photosOfThePlaces())],
]);

const createAdd = () => ([
  author(),
  createOffer(),
  locationCoordinates,
]);

const similarAdds = () => new Array(SIMILAR_ADD_COUNT).fill(null).map(() => createAdd());

similarAdds();
