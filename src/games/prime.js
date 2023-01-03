import { generateRandomNumber, isPrime } from '../utils.js';
import start from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = generateRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, expectedAnswer: answer };
};

export default () => {
  start(description, generateRound);
};
