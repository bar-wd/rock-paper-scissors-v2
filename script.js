let playerChoice;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  return computerChoice === 0
    ? 'rock'
    : computerChoice === 1
    ? 'paper'
    : 'scissors';
}

function getPlayerChoice(string) {
  playerChoice = prompt('Please choose rock, paper, or scissors');
}

getPlayerChoice();

// If playerChoice === null then make user pick again
// Otherwise convert string to lowercase

function checkNull() {
  if (playerChoice === null) {
    alert("Don't want to play?");
    getPlayerChoice();
  } else {
    playerChoice = playerChoice.toLowerCase();
  }
}
// Must only accept 'rock', 'paper', 'scissors'
// If not, make user pick again

function checkPlayerChoice() {
  if (
    playerChoice !== 'rock' &&
    playerChoice !== 'paper' &&
    playerChoice !== 'scissors'
  ) {
    alert('Must enter rock, paper, or scissors');
    getPlayerChoice();
  }
}

function playSingleRound(playerSelection, computerSelection) {
  // If a tie, replay the round

  console.log(playerSelection, 'player', computerSelection, 'computer');

  if (playerSelection === computerSelection) {
    alert('Tie!!!');
    getPlayerChoice();
    checkNull();
    checkPlayerChoice();
    playSingleRound(playerChoice, getComputerChoice());
  }

  // Winning scenarios for player
  else if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    alert('Good job! You won!');
  } else {
    alert('Aww...try again.');
  }
}

playSingleRound(playerChoice, getComputerChoice());
