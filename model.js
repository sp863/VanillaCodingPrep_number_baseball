export const gameData = {
  answer: 0,
  triesRemaining: 10,
  strike: 0,
  ball: 0,
};

export const isValidNumber = function (number) {
  const checkNumberSet = new Set();
  for (const x of number) {
    checkNumberSet.add(x);
  }
  const isNumber = Number(number);
  const noDuplicate = checkNumberSet.size === 3;
  const notContainZero = !number.includes("0");
  if (isNumber && noDuplicate && notContainZero) return true;
  return false;
};

export const generateNumber = function (min, max) {
  while (true) {
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    const number = randomNum + "";

    if (isValidNumber(number)) {
      gameData.answer = number;
      return;
    }
  }
};

export const compareNumber = function (guess, answer) {
  gameData.strike = 0;
  gameData.ball = 0;
  for (const num of guess) {
    if (answer.includes(num) && answer.indexOf(num) === guess.indexOf(num)) {
      gameData.strike++;
    } else if (answer.includes(num)) {
      gameData.ball++;
    }
  }
};
