import generateRandomNumber from '../generateRandomNumber.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

// Функция подсчета результата выражения
const resultOfExpression = (question) => {
  const arrFromExpression = question.split(' ');
  const [firstNumber, secondNumber] = arrFromExpression;
  function greatestCommonDivisor (x, y) {
    if (!y) return x;
    return greatestCommonDivisor(y, x % y);
  };
  return greatestCommonDivisor(firstNumber, secondNumber);
};

// Функция аккумулирования генерации выражения и ответа
const questionAndAnswer = () => {
  const number = {};
  number.first = generateRandomNumber(0, 100);
  number.second = generateRandomNumber(0, 100);
  const question = `${number.first} ${number.second}`;
  const answer = String(resultOfExpression(question));
  return { question, answer };
};

// Функция калькулятора
const GCP = () => {
  startGame(description, questionAndAnswer);
};

export default GCP;
