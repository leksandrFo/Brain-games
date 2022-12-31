import readlineSync from 'readline-sync';

const roundsCount = 3;

const start = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, expectedAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== expectedAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default start;
