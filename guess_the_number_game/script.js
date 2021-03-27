"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".number").value = secretNumber;
document.querySelector(".number").textContent = "?";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When there's no input
  if (!guess) {
    displayMessage("No number! 😞");

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage("You won 😁");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High  😞" : "Too Low 😔");
    }
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    displayMessage("You lost the game 🤯");
    document.querySelector(".score").textContent = 0;
  }
});
//When clicking "again" button
document.querySelector(".again").addEventListener("click", function () {
  let score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".number").value = secretNumber;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
