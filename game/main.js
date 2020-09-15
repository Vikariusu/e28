let secretNumber = generateRandomNumBetween1And100();
let guessesList = [];
let remainingGuesses = 9;

let responseParagraph = document.getElementById("response");
const guessBtn = document.querySelector("#guess-btn");
const restartBtn = document.querySelector("#restart-btn");
document.querySelector("#guesses-number").innerText = remainingGuesses;

// listeners
guessBtn.addEventListener("click", guess);
restartBtn.addEventListener("click", startOver);

function generateRandomNumBetween1And100() {
  return Math.floor(Math.random() * 100) + 1;
}

function guess() {
  const usersGuess = Number(document.querySelector("input").value);
  document.querySelector("input").value = ""; // reset the input

  if (guessesList.includes(usersGuess)) {
    return (responseParagraph.innerText =
      "This number has already been guessed!");
  }

  // compare the guess with the secret number
  if (usersGuess > secretNumber) {
    responseParagraph.style.color = "red";
    responseParagraph.innerText = "Too high!";
  } else if (usersGuess < secretNumber) {
    responseParagraph.style.color = "red";
    responseParagraph.innerText = "Too low!";
  } else {
    responseParagraph.style.color = "green";
    responseParagraph.innerText = `Congrats! The number was ${usersGuess}`;
    restartBtn.style.display = "block";
    return;
  }

  remainingGuesses--;
  guessesList.push(usersGuess);

  if (remainingGuesses === 0 && usersGuess !== secretNumber) {
    responseParagraph.innerText = `Game over! The number was ${secretNumber}`;
    restartBtn.style.display = "block";
  }

  document.querySelector("#guesses-number").innerText = remainingGuesses;
  document.querySelector("#guesses-list").innerText = guessesList.join(" ");
}

function startOver() {
  // reset variables
  guessesList = [];
  remainingGuesses = 9;
  secretNumber = generateRandomNumBetween1And100();

  document.querySelector("#guesses-number").innerText = remainingGuesses;
  document.querySelector("#guesses-list").innerText = "No guesses yet";
  responseParagraph.innerText = "Take a guess!";
  responseParagraph.style.color = "black";
  restartBtn.style.display = "none";
}
