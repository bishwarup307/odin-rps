const playerChoice = document.querySelector("#player-choice");
const resultEl = document.querySelector("#result");

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

playerChoice.addEventListener("change", () => {
  let result = playRound(playerChoice.value, getComputerChoice());
  resultEl.textContent = result;
});
