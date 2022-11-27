import readlineSync from 'readline-sync';
import { playerName, player } from './cli.js';
import generateRandomNumber from './generateRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundCount = 3;
const isEven = (num) => num % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');
  playerName();
  console.log(description);
  for (let i = 0; i < roundCount; i += 1) {
    const number = generateRandomNumber();
    let correctAnswer = '';
    if (isEven(number) === true) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const answer = readlineSync.question(`Question: ${number}'\nYour answer: `);
    if (isEven(number) === true && answer === 'yes') {
      if (i < 2) {
        console.log('Correct!');
      } else {
        console.log(`Congratulations, ${player}!`);
        return;
      }
    } else if (isEven(number) === false && answer === 'no') {
      if (i < 2) {
        console.log('Correct!');
      } else {
        console.log(`Congratulations, ${player}!`);
        return;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${player}!`);
      return
    }
  }
};
