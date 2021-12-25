let triesRemaining = 10;

const headerSection = document.getElementById("header-section");
const gameSection = document.getElementById("game-info-section");
const playerSection = document.getElementById("player-control-section");

playerSection.querySelector(".throw").addEventListener("click", function () {
  const guess = playerSection.querySelector(".player-guess").value;
  if (!guess) return;
  if (!isValidNumber(guess)) {
    alert(
      "입력숫자는 1에서 9까지의 서로 다른 3자리 숫자이어야 하며 0은 사용하지 않습니다."
    );
    playerSection.querySelector(".player-guess").value = "";
    return;
  }
  compareNumber(guess);
});

headerSection.querySelector(".again").addEventListener("click", function () {});

const isValidNumber = function (number) {
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

const generateNumber = function (min, max) {
  while (true) {
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    const number = randomNum + "";

    if (isValidNumber(number)) {
      return number;
    }
  }
};

const gameInit = function () {
  const answer = generateNumber(100, 1000);
  console.log(answer);
};

const compareNumber = function (number) {
  let strike = 0;
  let ball = 0;
  for (const num of number) {
    if (answer.includes(num) && answer.indexOf(num) === number.indexOf(num)) {
      strike++;
    } else if (answer.includes(num)) {
      ball++;
    }
  }
  renderResult(strike, ball);
};

const controlGameResult = function (strike) {};

const renderResult = function (strike, ball) {
  for (let i = 0; i < strike; i++) {
    insertStrike();
  }
  for (let i = 0; i < ball; i++) {
    insertBall();
  }
  playerSection.querySelector(".player-guess").value = "";
};

const insertStrike = function () {
  const strikeContainer = document.querySelector(".strike-container");
  strikeContainer.insertAdjacentHTML(
    "beforeend",
    '<span class="strike-count count">O</span>'
  );
};

const insertBall = function () {
  const ballContainer = document.querySelector(".ball-container");
  ballContainer.insertAdjacentHTML(
    "beforeend",
    '<span class="ball-count count">X</span>'
  );
};
