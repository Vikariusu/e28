let app = new Vue({
  el: "#app",
  data: {
    guess: "",
    guesses: [],
    guessCount: 0,
    secretNum: Math.floor(Math.random() * 100) + 1,
    message: "",
  },
  methods: {
    submitGuess() {
      this.guesses.push(this.guess);
      this.guessCount++;
      this.handleGuess();
    },
    handleGuess() {
      let text = "";
      if (this.guess > this.secretNum) {
        text = "Too high!";
      } else if (this.guess < this.secretNum) {
        text = "Too low!";
      } else {
        text = `Congrats! The number was ${this.guess}`;
      }
      this.message = text;
    },
  },
});
