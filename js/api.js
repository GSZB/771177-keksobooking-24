import { showAlert } from './util.js';

const fetchAds = () => fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .catch(() => {
    showAlert('Не удалось загрузить данные с сервера.');
  });


const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {fetchAds, sendData};
