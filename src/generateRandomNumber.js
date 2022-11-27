const generateRandomNumber = () => {
  const multiplier = [10, 100];
  const randomMultiplier = multiplier[Math.floor(Math.random() * multiplier.length)];
  return Math.round(Math.random() * randomMultiplier);
};

export default generateRandomNumber;
