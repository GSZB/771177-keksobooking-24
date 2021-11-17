import { TypePrice, GUEST_OPTION_BY_ROOM_NUMBER } from './data.js';
import { sendData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './util.js';
import { TOKYO_COORDINATES, MIN_TITLE_LENGTH, MAX_TITLE_LENGTH } from './data.js';
import { tokyoMap, mainMarker } from './map.js';
import { formFilter } from './form-disabled.js';


const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const apartmentTypeList = document.querySelector('#type');
const roomNumber = document.querySelector('#room_number');
const guestNumber = document.querySelector('#capacity');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const bookingForm = document.querySelector('.ad-form');
const formSubmitButton = document.querySelector('.ad-form__submit');

const coordinateInput = document.querySelector('#address');


coordinateInput.setAttribute('readonly', '');
coordinateInput.setAttribute('value', `${TOKYO_COORDINATES.lat.toFixed(5)}, ${TOKYO_COORDINATES.lng.toFixed(5)}`);

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

    titleInput.setCustomValidity(`Ещё ${ MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${ valueLength - MAX_TITLE_LENGTH } симв.`);

  } else {
    titleInput.setCustomValidity('');
  }
});

const changePriceValue = function () {
  priceInput.setAttribute('min', TypePrice[apartmentTypeList.value]);
  priceInput.placeholder = TypePrice[apartmentTypeList.value];
};

apartmentTypeList.addEventListener('change', () => {
  changePriceValue();
});
changePriceValue();

priceInput.addEventListener('invalid', () => {
  if (priceInput.validity.valueMissing) {
    priceInput.setCustomValidity('Обязательное поле');
  } else if (priceInput.validity.rangeUnderflow) {

    priceInput.setCustomValidity(`Минимальная цена должна быть ${ priceInput.min } ₽/ночь`);
  } else if (priceInput.validity.rangeOverflow) {
    priceInput.setCustomValidity(`Максимальная цена должна быть ${ priceInput.max } ₽/ночь`);

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
const rerenderGuestSelect = function (options, key) {
  const newValue = +roomNumber.value === 100 ? 0 : +roomNumber.value;

  const optionsFragment = document.createDocumentFragment();

  options[key].forEach((text, index) => {
    const i = +key === 100 ? 0 : index += 1;
    const guestOption = createGuestCapacityOption(i, text);
    optionsFragment.appendChild(guestOption);
  });

  guestNumber.innerHTML = '';
  guestNumber.appendChild(optionsFragment);
  guestNumber.value = newValue;
};

rerenderGuestSelect(GUEST_OPTION_BY_ROOM_NUMBER, 1);

roomNumber.addEventListener('change', () => {
  rerenderGuestSelect(GUEST_OPTION_BY_ROOM_NUMBER, roomNumber.value);
});

const removePopupLayer = (element) => {
  const bodyListener = (event) => {
    if (event.code.toLowerCase() === 'escape') {
      element.remove();

      document.body.removeEventListener('keydown', bodyListener);
    }
  };

  element.addEventListener('click', () => {
    element.remove();

    document.body.removeEventListener('keydown', bodyListener);
  });

  document.body.addEventListener('keydown', bodyListener);

  return element;
};

bookingForm.addEventListener('reset', () => {
  mainMarker.setLatLng({ lat: TOKYO_COORDINATES.lat.toFixed(5), lng: TOKYO_COORDINATES.lng.toFixed(5) });
  tokyoMap.closePopup();
  formFilter.reset();
});

bookingForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  bookingForm.disabled = true;
  formSubmitButton.disabled = true;

  sendData(
    () => {
      bookingForm.reset();
      formFilter.reset();

      const alertElement = showSuccessMessage();
      document.body.appendChild(removePopupLayer(alertElement));

      bookingForm.disabled = false;
      formSubmitButton.disabled = false;
    },
    () => {
      const alertElement = showErrorMessage();
      document.body.appendChild(removePopupLayer(alertElement));

      bookingForm.disabled = false;
      formSubmitButton.disabled = false;
    },
    new FormData(evt.target),
  );

});
