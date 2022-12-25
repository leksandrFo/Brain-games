import generateRandomNumber from '../generateRandomNumber.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const sayPrimeOrNot = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const questionAndAnswer = () => {
  const question = generateRandomNumber(0, 100);
  const answer = sayPrimeOrNot(question);
  return { question, answer };
};

const isPrime = () => {
  startGame(description, questionAndAnswer);
};

export default isPrime;
