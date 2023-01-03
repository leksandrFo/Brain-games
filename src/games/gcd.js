import { generateRandomNumber } from '../utils.js';
import start from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  return b === 0 ? a : getGcd(b, a % b);
};

const generateRound = () => {
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const answer = String(getGcd(number1, number2));
  return { question, expectedAnswer: answer };
};

export default () => {
  start(description, generateRound);
};
