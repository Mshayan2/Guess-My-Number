"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let number = document.querySelector(".number");
let check = document.querySelector(".check");
let again = document.querySelector(".again");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

check.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage(" 🛑 No Number ! ");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number ")
    document.body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
        displayMessage( guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😞 You lose the game ")
      document.querySelector(".score").textContent = 0;
      document.body.style.backgroundColor = "Darkred";

    }
  }
});

again.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start Guessing...")
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
