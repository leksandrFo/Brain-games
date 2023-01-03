import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  let playerName = '';
  playerName = readlineSync.question('May I have your name? ');
  while (playerName === '') {
    playerName = readlineSync.question('Excuse me, could you tell me your name again? ');
  }
  console.log(`Hello, ${playerName}!`);
};
