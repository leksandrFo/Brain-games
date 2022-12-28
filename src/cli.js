import readlineSync from 'readline-sync';

const player = {};

export default () => {
  console.log('Welcome to the Brain Games!');
  player.name = readlineSync.question('May I have your name? ');
  while (player.name === '') {
    player.name = readlineSync.question('Excuse me, could you tell me your name again? ');
  }
  console.log(`Hello, ${player.name}!`);
};
