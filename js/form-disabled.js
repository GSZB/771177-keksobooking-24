const formDisabled = document.querySelector('.ad-form');
const formDisabledFieldsets = formDisabled.querySelectorAll('fieldset');
const mapFormDisabled = document.querySelector('.map__filters');
const mapFormDisabledSelects = mapFormDisabled.querySelectorAll('select');

formDisabled.classList.add('ad-form--disabled');

formDisabledFieldsets.forEach((formDisabledFieldset) => {
  formDisabledFieldset.setAttribute('disabled', '');
});

mapFormDisabled.classList.add('map__filters--disabled');

mapFormDisabledSelects.forEach((mapFormDisabledSelect) => {
  mapFormDisabledSelect.setAttribute('disabled', '');
});

const removeDisableCondition = function () {
  formDisabled.classList.remove('ad-form--disabled');

  formDisabledFieldsets.forEach((formDisabledFieldset) => {
    formDisabledFieldset.removeAttribute('disabled');
  });

  mapFormDisabled.classList.remove('map__filters--disabled');

  mapFormDisabledSelects.forEach((mapFormDisabledSelect) => {
    mapFormDisabledSelect.removeAttribute('disabled');
  });
};

export {removeDisableCondition};
