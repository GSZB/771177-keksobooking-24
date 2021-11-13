export const fetchAds = () => fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json());

// const createLoader = (onSuccess, onError) => () => fetch(
//   'https://24.javascript.pages.academy/keksobooking/data',
//   {
//     method: 'GET',
//     credentials: 'same-origin',
//   },
// )
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }

//     throw new Error(`${response.status} ${response.statusText}`);
//   })
//   .then((data) => {
//     onSuccess(data);
//   })
//   .catch((err) => {
//     onError(err);
//   });

// export {createLoader};

// import {renderAd} from './ad-generator.js';

// fetch('https://24.javascript.pages.academy/keksobooking/data')
//   .then((response) => response.json())
//   .then((ads) => {
//     console.log(ads);
//   });
