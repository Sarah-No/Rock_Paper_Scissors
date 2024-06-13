let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber == 1) {
    return (computerChoice = "Rock");
  } else if (randomNumber == 2) {
    return (computerChoice = "Paper");
  } else {
    return (computerChoice = "Scissor");
  }
}

function getHumanChoice() {
  let choice;
  choice = prompt("Choice between Rock, Paper, Scissor : ");
  if (String(choice.toLowerCase()) === "rock") {
    return (humanChoice = "Rock");
  } else if (String(choice.toLowerCase() === "paper")) {
    return (humanChoice = "Paper");
  } else if (String(choice.toLowerCase() === "scissor")) {
    return (humanChoice = "Scissor");
  } else {
    return console.log("PB in getHumanChoice");
  }
}

function playRound(humanChoice, computerChoice) {
  // your code here! “You lose! Paper beats Rock”.
  if (humanChoice === computerChoice) {
    return console.log("Nobody lose.");
  } else if (humanChoice === "Rock") {
    humanScore++;
    return console.log("You win! Rock beats ", computerChoice);
  } else if (computerChoice === "Rock") {
    computerScore++;
    return console.log("You lose! Rock beats ", humanChoice);
  } else if (humanChoice === "Paper") {
    computerScore++;
    return console.log("You lose! ", computerChoice, " beats Paper");
  } else if (computerChoice === "Paper") {
    humanScore++;
    return console.log("You win! ", humanChoice, " beats Paper");
  } else {
    return console.log("Pb in playRound funct");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(round, " computer choice : ", computerChoice);
console.log(round, " human choice : ", humanChoice);
console.log(round, " human score : ", humanScore);
console.log(round, " computer score : ", computerScore);

function playRound() {}
