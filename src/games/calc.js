import { generateRandomNumber, generateRandomIndex } from '../utils.js';
import start from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

// Функция подсчета результата выражения
const calculate = (firstOperand, secondOperand, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    // no default
  }
  return result;
};

// Функция аккумулирования генерации выражения и ответа
const getQuestionAndAnswer = () => {
  const operator = generateRandomIndex(operators);
  const firstOperand = generateRandomNumber(0, 100);
  const secondOperand = generateRandomNumber(0, 100);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = String(calculate(firstOperand, secondOperand, operator));
  return { question, expectedAnswer: answer };
};

// Функция запуска
export default () => {
  start(description, getQuestionAndAnswer);
};
