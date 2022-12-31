import { generateRandomNumber, generateRandomIndex } from '../utils.js';
import start from '../index.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const progressionArray = [firstNumber];
  const progressionStep = generateRandomNumber(1, 10);
  const progressionLength = generateRandomNumber(5, 10);
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progressionArray.push(progressionArray[i] + progressionStep);
  }
  const randomIndex = generateRandomIndex(progressionArray);
  const answer = String(progressionArray.splice(randomIndex, 1, '..').join());
  const question = progressionArray.join(' ');
  return { question, expectedAnswer: answer };
};

// Функция запуска
export default () => {
  start(description, getQuestionAndAnswer);
};
