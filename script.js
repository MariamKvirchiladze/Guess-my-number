'use strict';
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `correct number`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
*/
let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highScore = 0;
function displayMessage(message) {
  document.querySelector(`.message`).textContent = message;
}
function displayNumber(number) {
  document.querySelector(`.number`).textContent = number;
}
function displayScore(score) {
  document.querySelector(`.score`).textContent = score;
}

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage(`No number`);
  } else if (guess === secretNumber) {
    displayMessage(`Correct number`);
    displayNumber(secretNumber);

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high` : `Too low`);
      score--;
      displayScore(score);
    } else {
      displayMessage(`You lost the game`);
      displayScore(0);
      document.querySelector(`body`).style.backgroundColor = `#f20707`;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  score = 10;
  displayScore(score);
  displayMessage(`Start Guessing...`);
  displayNumber(`?`);
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
