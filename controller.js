import * as model from "./model.js";
import gameView from "./view.js";

const gameInit = function () {
  model.generateNumber(100, 1000);
  console.log(model.gameData.answer);
  gameView.updateTriesRemaining(model.gameData.triesRemaining);
};

const controlGame = function (guess) {
  const answer = model.gameData.answer;
  if (!model.isValidNumber(guess)) {
    alert(
      "입력숫자는 1에서 9까지의 서로 다른 3자리 숫자이어야 하며 0은 사용하지 않습니다."
    );
    gameView.clearResult();
    return;
  }
  gameView.clearResult();
  model.compareNumber(guess, answer);
  gameView.renderResult(model.gameData);
  model.gameData.triesRemaining--;
  gameView.updateTriesRemaining(model.gameData.triesRemaining);
};
const restartGame = function () {
  gameInit();
};

gameInit();
gameView.addGuessNumberHanlder(controlGame);
gameView.addRestartHandler(restartGame);
