import * as model from "./model.js";
import gameView from "./view.js";

const gameInit = function () {
  model.initGameData();
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
  if (model.gameData.strike === 3) {
    gameView.renderThreeStrikes(model.gameData);
    model.gameData.playing = false;
    return;
  }
  if (model.gameData.triesRemaining <= 0) {
    gameView.renderGameOver();
    model.gameData.playing = false;
    return;
  }
};

const restartGame = function () {
  gameInit();
  gameView.clearResult();
};

gameInit();
gameView.addGameStartHandler();
gameView.addGuessNumberHanlder(controlGame, model.gameData);
gameView.addRestartHandler(restartGame);
