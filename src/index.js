import readlineSync from 'readline-sync';

const roundCount = 3;

const start = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const player = {};
  player.name = readlineSync.question('May I have your name? ');
  while (player.name === '') {
    player.name = readlineSync.question('Excuse me, could you tell me your name again? ');
  }
  console.log(`Hello, ${player.name}!`);
  console.log(description);
  for (let i = 0; i < roundCount; i += 1) {
    const { question, answer } = getQuestionAndAnswer();
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

export default start;
