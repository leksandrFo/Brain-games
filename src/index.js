import readlineSync from 'readline-sync';
import { playerName, player } from './cli.js';

const roundCount = 3;

const startGame = (description, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  playerName();
  console.log(description);
  for (let i = 0; i < roundCount; i += 1) {
    const { question, answer } = questionAndAnswer();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== answer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${player.name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${player.name}!`);
};

export default startGame;
