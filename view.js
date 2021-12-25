class GameView {
  #headerSection = document.getElementById("header-section");
  #gameSection = document.getElementById("game-info-section");
  #playerSection = document.getElementById("player-control-section");

  addGuessNumberHanlder(handler) {
    const guessEnter = this.#playerSection.querySelector(".throw");
    guessEnter.addEventListener("click", function () {
      const guess = document.querySelector(".player-guess").value;
      if (!guess) return;
      handler(guess);
    });
  }

  addAgainHandler(handler) {
    this.#headerSection
      .querySelector(".again")
      .addEventListener("click", function () {});
  }

  renderResult(strike, ball) {
    for (let i = 0; i < strike; i++) {
      this.insertStrike();
    }
    for (let i = 0; i < ball; i++) {
      this.insertBall();
    }
    this.#gameSection.querySelector();
    this.#playerSection.querySelector(".player-guess").value = "";
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
