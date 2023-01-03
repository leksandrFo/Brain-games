import { generateRandomNumber, generateRandomIndex } from '../utils.js';
import start from '../index.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const progression = [firstNumber];
  const progressionStep = generateRandomNumber(1, 10);
  const progressionLength = generateRandomNumber(5, 10);
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  const randomIndex = generateRandomIndex(progression);
  const answer = String(progression.splice(randomIndex, 1, '..').join());
  const question = progression.join(' ');
  return { question, expectedAnswer: answer };
};

export default () => {
  start(description, generateRound);
};
