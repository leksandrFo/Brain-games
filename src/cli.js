import readlineSync from 'readline-sync';

const player = {};

const capitalize = (text) => text[0].toUpperCase() + text.slice(1);

const playerName = () => {
  player.name = capitalize(readlineSync.question('May I have your name? '));
  while (player.name === '') {
    player.name = readlineSync.question('Excuse me, could you tell me your name again? ');
  }
  console.log(`Hello, ${player.name}!`);
};

export { playerName, player };
