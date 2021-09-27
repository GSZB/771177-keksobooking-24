// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomInt(min, max) {
  if (min >= max) {
    return 'Минимальное значение не может превышать максимальное';
  }

  return Math.floor(Math.random() * max);
}

getRandomInt(0, 100);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomDecimal(min, max, decimal) {
  if (min >= max) {
    return 'Минимальное значение не может превышать максимальное';
  }

  return (Math.random() * max).toFixed(decimal);
}

getRandomDecimal(0, 100, 1);
