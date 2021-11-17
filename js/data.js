
const TOKYO_COORDINATES = {
  lat: 35.65858640915274,
  lng: 139.74540710449222,
};
const offerTypeText = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};
//Ключи перечисления написал с маленькой буквы, потому что в разметке этот объект ссылается на value селекта, а лезть в разметку я не посчитал правильным. Пожалуйста учтите это. Спасибо)
const TypePrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const GUEST_OPTION_BY_ROOM_NUMBER = {
  1: ['для 1 гостя'],
  2: ['для 1 гостя', 'для 2 гостей'],
  3: ['для 1 гостя', 'для 2 гостей', 'для 3 гостей'],
  100: ['не для гостей'],
};

const REQUIRED_BALLOON_AMOUNT = 10;
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;


export {TOKYO_COORDINATES, offerTypeText, TypePrice, REQUIRED_BALLOON_AMOUNT, GUEST_OPTION_BY_ROOM_NUMBER, MIN_TITLE_LENGTH, MAX_TITLE_LENGTH};

