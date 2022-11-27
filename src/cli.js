import readlineSync from 'readline-sync';

let player = '';

const playerName = () => {
  player = readlineSync.question('May I have your name? ');
  while (player === '') {
    player = readlineSync.question('Excuse me, could you tell me your name again? ');
  }
  console.log(`Hello, ${player}!`);
};

export { playerName, player };
