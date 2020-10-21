Vue.component("score-board", {
  props: ["gameHistory"],
  template: `
  <div v-if="gameHistory.length !== 0" class="scoreboard">
    <p>Score board:</p>
    <ul v-for="(winner, round) in gameHistory" :key="round">
      <li>{{ winner }} won round {{ round + 1 }}</li>
    </ul>
  </div>
    `,
});

let app = new Vue({
  el: "#app",
  data: function () {
    return {
      guess: null,
      guesses: [],
      secretNum: this.generateRandomNumBetween1And100(),
      message: "",
      guessWrong: null,
      gameHistory: [],
    };
  },

  methods: {
    generateRandomNumBetween1And100() {
      return Math.floor(Math.random() * 100) + 1;
    },

    submitGuess() {
      if (this.guess.length > 9 || isNaN(this.guess)) {
        return;
      }

      if (this.gameOver && this.guess !== this.secretNum) {
        this.gameHistory.push("Computer");
        this.guessWrong = true;
        this.message = `Game over! The number was ${this.secretNum}`;
        return;
      }

      if (this.guesses.includes(this.guess)) {
        this.message = "This number has already been guessed!";
        return;
      }

      this.guesses.push(this.guess);
      this.handleGuess();
      this.guess = null;
    },

    handleGuess() {
      if (this.guess > this.secretNum) {
        this.message = "Too high!";
        this.guessWrong = true;
      } else if (this.guess < this.secretNum) {
        this.message = "Too low!";
        this.guessWrong = true;
      } else {
        this.gameHistory.push("Player");
        this.message = `Congrats! The number was ${this.guess}`;
        this.guessWrong = false;
      }
    },
    resetGame() {
      this.guesses = [];
      this.message = "";
      this.guess = null;
      secretNumber = this.generateRandomNumBetween1And100();
    },
  },
  computed: {
    gameOver() {
      if (this.guesses.length >= 9) {
        console.log("true");
        return true;
      }
      return false;
    },
    guessesList() {
      return this.guesses.join(", ");
    },
    playerScore() {
      return this.gameHistory.reduce(
        (reducer, winner) => (winner === "Player" ? reducer + 1 : reducer),
        0
      );
    },
    computerScore() {
      return this.gameHistory.length - this.playerScore;
    },
  },
});
