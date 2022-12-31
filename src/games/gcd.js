import { generateRandomNumber } from '../utils.js';
import start from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

// Функция подсчета наибольшего делителя
const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) return firstNumber;
  return getGreatestCommonDivisor(secondNumber, firstNumber % secondNumber);
};

// Функция аккумулирования генерации выражения и ответа
const getQuestionAndAnswer = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(getGreatestCommonDivisor(firstNumber, secondNumber));
  return { question, expectedAnswer: answer };
};

// Функция запуска
export default () => {
  start(description, getQuestionAndAnswer);
};
