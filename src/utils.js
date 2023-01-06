const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const generateRandomIndex = (data) => Math.floor(Math.random() * data.length);

const isEven = (num) => num % 2 === 0;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  generateRandomNumber,
  generateRandomIndex,
  isEven,
  isPrime,
};
