import generateRandomNumber from '../generateRandomNumber.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';
const mathSymbols = ['+', '-', '*'];

const generateRandomMathSymbol = () => mathSymbols[Math.floor(Math.random() * mathSymbols.length)];

// Функция подсчета результата выражения
const resultOfExpression = (question) => {
  const arrFromExpression = question.split(' ');
  const signOfExpression = arrFromExpression[1];
  let result = 0;
  switch (signOfExpression) {
    case mathSymbols[0]:
      result = Number(arrFromExpression[0]) + Number(arrFromExpression[2]);
      break;
    case mathSymbols[1]:
      result = Number(arrFromExpression[0]) - Number(arrFromExpression[2]);
      break;
    case mathSymbols[2]:
      result = Number(arrFromExpression[0]) * Number(arrFromExpression[2]);
      break;
    // no default
  }
  return result;
};

// Функция аккумулирования генерации выражения и ответа
const questionAndAnswer = () => {
  const signOfExpression = generateRandomMathSymbol();
  const number = {};
  number.first = generateRandomNumber(0, 100);
  number.second = generateRandomNumber(0, 100);
  let question = `${number.first} ${signOfExpression} ${number.second}`;
  if (signOfExpression === '-') { // Условия на вычитание
    if (number.first === number.second || number.second > number.first) {
    /* Первое число не должно быть равно нулю и второму числу,
    а также второе число должно быть меньше первого, чтобы не уходить в отрицательные числа */
      while (number.first === number.second || number.second > number.first) {
        number.first = generateRandomNumber(1, 100);
        number.second = generateRandomNumber(0, 100);
      }
      question = `${number.first} ${signOfExpression} ${number.second}`;
    }
  }
  if (signOfExpression === '*') {
    if (number.first > 10 && number.second > 10) {
    /* Первое число не должно быть равно нулю, а также одно из чисел не должно быть больше 10
    для простоты подсчета */
      while (number.first === 0 || (number.first > 10 && number.second > 10)) {
        number.first = generateRandomNumber(1, 100);
        number.second = generateRandomNumber(0, 100);
      }
      question = `${number.first} ${signOfExpression} ${number.second}`;
    }
  }
  const answer = String(resultOfExpression(question));
  return { question, answer };
};

// Функция калькулятора
const calculator = () => {
  startGame(description, questionAndAnswer);
};

export default calculator;
