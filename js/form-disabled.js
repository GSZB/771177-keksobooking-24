const formDisabled = document.querySelector('.ad-form');
const formDisabledFieldsets = formDisabled.querySelectorAll('fieldset');
const formFilter = document.querySelector('.map__filters');
const filterSelect = formFilter.querySelectorAll('select');

formDisabled.classList.add('ad-form--disabled');

formDisabledFieldsets.forEach((formDisabledFieldset) => {
  formDisabledFieldset.setAttribute('disabled', '');
});

formFilter.classList.add('map__filters--disabled');

filterSelect.forEach((formFilterSelect) => {
  formFilterSelect.setAttribute('disabled', '');
});

const removeDisableCondition = function () {
  formDisabled.classList.remove('ad-form--disabled');

  formDisabledFieldsets.forEach((formDisabledFieldset) => {
    formDisabledFieldset.removeAttribute('disabled');
  });

  formFilter.classList.remove('map__filters--disabled');

  filterSelect.forEach((formFilterSelect) => {
    formFilterSelect.removeAttribute('disabled');
  });
};

export {removeDisableCondition, formFilter, filterSelect};
