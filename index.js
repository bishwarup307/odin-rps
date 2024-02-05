// const playerChoice = document.querySelector("#player-choice");
const playerChoice = document.querySelector(".choice-container");
const resultEl = document.querySelector("#result");
const playerScore = document.querySelector("#user-streak");
const computerScore = document.querySelector("#computer-streak");

const LEGAL_MOVES = ["rock", "paper", "scissor"];

let playerStreak = 0;
let computerStreak = 0;

function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      return "rock";

    case 2:
      return "paper";

    case 3:
      return "scissor";

    default:
      return "Computer gone mad!";
  }
}

function capitalize(string) {
  titleString = string.at(0).toUpperCase() + string.substr(1).toLowerCase();
  return titleString;
}

function playRound(playerChoice, computerChoice) {
  let result;

  result = playerChoice === computerChoice ? "tie" : null;

  playerWin1 = playerChoice === "paper" && computerChoice === "rock";
  playerWin2 = playerChoice === "scissor" && computerChoice === "paper";
  playerWin3 = playerChoice === "rock" && computerChoice === "scissor";

  result = result || (playerWin1 || playerWin2 || playerWin2 ? "win" : "lose");

  if (result === "win") {
    playerStreak += 1;
  } else if (result === "lose") {
    computerStreak += 1;
  }

  finalResult = `You picked ${capitalize(
    playerChoice
  )}, computer picked ${capitalize(computerChoice)}. `;

  finalResult =
    result === "tie"
      ? finalResult + `This was a tie`
      : finalResult + `You ${result} this round.`;

  console.log(finalResult);
  return finalResult;
}

function renderColor() {
  const style = getComputedStyle(document.body);
  const green = style.getPropertyValue("--clr-green");
  const red = style.getPropertyValue("--clr-red");

  playerScore.style.color = playerStreak >= computerStreak ? green : red;
  computerScore.style.color = computerStreak >= playerStreak ? green : red;
}

playerChoice.addEventListener("click", (event) => {
  if (!LEGAL_MOVES.includes(event.target.id)) return;
  let result = playRound(event.target.id, getComputerChoice());
  resultEl.textContent = result;
  playerScore.textContent = playerStreak;
  computerScore.textContent = computerStreak;
  renderColor();
});
