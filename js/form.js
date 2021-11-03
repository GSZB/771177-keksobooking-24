import { TYPE_PRICE } from './data.js';

// const form = document.querySelector('.ad-form');
// const formSubmit = document.querySelector('.ad-form__submit');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const apartmantTypeList = document.querySelector('#type');
const roomNumber = document.querySelector('#room_number');
const guestNumber = document.querySelector('#capacity');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;

titleInput.addEventListener('invalid', () => {
  if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity('Обязательное поле');
  } else {
    titleInput.setCustomValidity('');
  }
});

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    titleInput.setCustomValidity('');
  }
});

const changePriceValue = function () {
  priceInput.setAttribute('min', TYPE_PRICE[apartmantTypeList.value]);
  priceInput.placeholder = TYPE_PRICE[apartmantTypeList.value];
};

apartmantTypeList.addEventListener('change', () => {
  changePriceValue();
});
changePriceValue();

priceInput.addEventListener('invalid', () => {
  if (priceInput.validity.valueMissing) {
    priceInput.setCustomValidity('Обязательное поле');
  } else if (priceInput.value < TYPE_PRICE[apartmantTypeList.value]) {
    priceInput.setCustomValidity(`Минимальная цена должна быть ${  TYPE_PRICE[apartmantTypeList.value] } ₽/ночь`);
  } else if (priceInput.value > MAX_PRICE_VALUE) {
    priceInput.setCustomValidity(`Максимальная цена должна быть ${  MAX_PRICE_VALUE } ₽/ночь`);
  } else {
    priceInput.setCustomValidity('');
  }

});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

const guestCapacity = function (guestText) {
  const guestOption = document.createElement('option');
  guestOption.value = roomNumber.value;
  guestOption.textContent = guestText;
  guestNumber.appendChild(guestOption);
};

const guestSelect = function (guestCount) {
  guestNumber.innerHTML = '';
  for (let i = 0; i < roomNumber.value; i++) {
    guestCapacity(guestCount);
  }
};

guestSelect('для 1 гостя');

roomNumber.addEventListener('change', () => {
  if (roomNumber.value === '1') {
    guestSelect('для 1 гостя');
  } else if (roomNumber.value === '2') {
    guestSelect('для 2 гостей');
    guestNumber.firstChild.textContent = 'для 1 гостя';
  } else if (roomNumber.value === '3') {
    guestSelect('для 2 гостей');
    guestNumber.firstChild.textContent = 'для 1 гостя';
    guestNumber.lastChild.textContent = 'для 3 гостей';
  } else if (roomNumber.value === '100')
  {
    guestNumber.innerHTML = '';
    guestCapacity('не для гостей');
  }
});


// formSubmit.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   window.open('url', 'https://24.javascript.pages.academy/keksobooking');
// });
