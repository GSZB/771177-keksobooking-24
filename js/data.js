
const TOKYO_COORDINATES = {
  lat: 35.65858640915274,
  lng: 139.74540710449222,
};
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

const REQUIRED_BALLOON_AMOUNT = 10;


export {TOKYO_COORDINATES, OFFER_TYPE_TEXT, TYPE_PRICE, REQUIRED_BALLOON_AMOUNT, guestOptionsByRoomNumber};

