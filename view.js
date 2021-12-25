class GameView {
  #headerSection = document.getElementById("header-section");
  #gameSection = document.getElementById("game-info-section");
  #playerSection = document.getElementById("player-control-section");

  addGameStartHandler() {
    const btnStart = document.querySelector(".game-start-btn");
    btnStart.addEventListener("click", function () {
      document.querySelector(".start-page").classList.toggle("open");
      document.querySelector(".game-page").classList.toggle("open");
    });
  }
  addGuessNumberHanlder(handler, gameData) {
    const guessEnter = this.#playerSection.querySelector(".enter");
    guessEnter.addEventListener("click", function () {
      const guess = document.querySelector(".player-guess").value;
      if (!guess) return;
      if (!gameData.playing) return;
      handler(guess);
    });
  }

  addRestartHandler(handler) {
    const restartBtn = this.#headerSection.querySelector(".restart-btn");
    restartBtn.addEventListener("click", function () {
      document.querySelector(".number").textContent = "?";
      document.querySelector(".game-result-message").textContent = "";
      document.querySelector(".game-page").classList.remove("three-strikes");
      document.querySelector(".game-page").classList.remove("game-over");
      handler();
    });
  }

  updateTriesRemaining(tries) {
    this.#playerSection.querySelector(
      ".tries"
    ).textContent = `🥊 남은 시도 : ${tries}회`;
  }

  renderResult(gameData) {
    const strike = gameData.strike;
    const ball = gameData.ball;
    for (let i = 0; i < strike; i++) {
      this.insertStrike();
    }
    for (let i = 0; i < ball; i++) {
      this.insertBall();
    }
    this.#playerSection.querySelector(".player-guess").value = "";
  }

  renderThreeStrikes(gameData) {
    this.#gameSection.querySelector(".number").textContent = gameData.answer;
    this.#headerSection.querySelector(".game-result-message").textContent =
      "⚾️ 3 Strikes!";
    this.#playerSection.querySelector(".player-guess").value = "";
    document.querySelector(".game-page").classList.add("three-strikes");
  }

  renderGameOver() {
    this.#headerSection.querySelector(".game-result-message").textContent =
      "😭 Game Over...";
    this.#playerSection.querySelector(".player-guess").value = "";
    document.querySelector(".game-page").classList.add("game-over");
  }

  insertStrike() {
    const strikeContainer = document.querySelector(".strike-container");
    strikeContainer.insertAdjacentHTML(
      "beforeend",
      '<span class="strike-count count">O</span>'
    );
  }

  insertBall() {
    const ballContainer = document.querySelector(".ball-container");
    ballContainer.insertAdjacentHTML(
      "beforeend",
      '<span class="ball-count count">X</span>'
    );
  }

  clearResult() {
    this.clearStrikeContainer();
    this.clearBallContainer();
  }

  clearStrikeContainer() {
    const strikeContainer = document.querySelector(".strike-container");
    strikeContainer.innerHTML = "";
    strikeContainer.insertAdjacentHTML(
      "afterbegin",
      '<p class="strike">Strike :</p>'
    );
  }
  clearBallContainer() {
    const ballContainer = document.querySelector(".ball-container");
    ballContainer.innerHTML = "";
    ballContainer.insertAdjacentHTML(
      "afterbegin",
      '<p class="ball">Ball :</p>'
    );
  }
}

export default new GameView();
