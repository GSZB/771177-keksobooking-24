// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomInt(min, max) {
  if (min >= max) {

    throw new ReferenceError('Минимальное значение не может превышать максимальное');
  }

  return Math.floor(min + Math.random() * (max - min));
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomDecimal(min, max, decimal) {
  if (min >= max) {

    throw new ReferenceError('Минимальное значение не может превышать максимальное');
  }

  return (min + Math.random() * (max - min)).toFixed(decimal);
}

//Функция, возвращяющая случайный элемент с массива

function getRandomArrayElement(elements) {
  return elements[getRandomInt(0, elements.length)];
}

export {getRandomInt, getRandomDecimal, getRandomArrayElement};
