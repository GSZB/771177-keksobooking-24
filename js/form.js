import { TYPE_PRICE, guestOptionsByRoomNumber } from './data.js';

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
  } else if (priceInput.validity.rangeUnderflow) {
    priceInput.setCustomValidity(`Минимальная цена должна быть ${  priceInput.min } ₽/ночь`);
  } else if (priceInput.validity.rangeOverflow) {
    priceInput.setCustomValidity(`Максимальная цена должна быть ${  priceInput.max } ₽/ночь`);
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

// Чистая функция принимающая значение и возвращающая новое
const createGuestCapacityOption = function (value, guestText) {
  const guestOption = document.createElement('option');
  guestOption.value = value;
  guestOption.textContent = guestText;
  return guestOption;
};

// Событийная функция с side effect
const rerenderGuestSelect = function (options) {
  const newValue = guestNumber.value > options.length - 1 ? 0 : guestNumber.value;
  const optionsFragment = document.createDocumentFragment();

  options.forEach((text, value) => {
    const guestOption = createGuestCapacityOption(value, text);
    optionsFragment.appendChild(guestOption);
  });

  guestNumber.innerHTML = '';
  guestNumber.appendChild(optionsFragment);
  guestNumber.value = newValue;

};

rerenderGuestSelect(guestOptionsByRoomNumber[1]);

roomNumber.addEventListener('change', () => {
  const options = guestOptionsByRoomNumber[roomNumber.value];

  rerenderGuestSelect(options);

});
