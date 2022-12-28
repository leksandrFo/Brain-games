import generateRandomNumber from '../utils.js';
import start from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = generateRandomNumber(0, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return { question, answer };
};

export default () => {
  start(description, getQuestionAndAnswer);
};
