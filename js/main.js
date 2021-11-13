import './ad-generator.js';
import './form.js';
import './form-disabled.js';
import './map.js';
import './api.js';
// import { getData } from './api.js';
// import { SIMILAR_AD_COUNT } from './data.js';

// getData((ads) => {
//   createBalloon(ads.slice(0, SIMILAR_AD_COUNT));
// });

// const getData = (onSuccess) => {
//   fetch('https://24.javascript.pages.academy/keksobooking/data')
//     .then((response) => response.json())
//     .then((ads) => {
//       onSuccess(ads);
//     });

// };

// const sendData = (onSuccess, onFail, body) => {
//   fetch(
//     'https://24.javascript.pages.academy/keksobooking/data',
//     {
//       method: 'POST',
//       body,
//     },
//   )
//     .then((response) => {
//       if (response.ok) {
//         onSuccess();
//       } else {
//         onFail('Не удалось отправить форму. Попробуйте ещё раз');
//       }
//     })
//     .catch(() => {
//       onFail('Не удалось отправить форму. Попробуйте ещё раз');
//     });
// };

// export {getData, sendData};
