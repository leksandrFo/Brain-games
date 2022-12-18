import generateRandomNumber from '../generateRandomNumber.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionAndAnswer = () => {
  const question = generateRandomNumber(0, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return { question, answer };
};

const isEven = () => {
  startGame(description, questionAndAnswer);
};

export default isEven;
