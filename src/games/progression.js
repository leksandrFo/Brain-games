import { generateRandomNumber, generateRandomIndex } from '../utils.js';
import start from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (first, step, length) => {
  const progression = [];
  for (let i = 0; i <= length - 1; i += 1) {
    progression.push(first + step * i);
  }
  return progression;
};

const generateRound = () => {
  const first = generateRandomNumber(0, 100);
  const step = generateRandomNumber(1, 10);
  const length = generateRandomNumber(5, 10);
  const progression = getProgression(first, step, length);
  const hiddenIndex = generateRandomIndex(progression);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return { question, expectedAnswer: answer };
};

export default () => {
  start(description, generateRound);
};
