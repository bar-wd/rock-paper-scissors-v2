'use-strict';

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
const playerSelectionLogo = document.querySelector('.player-selection');
const computerSelectionLogo = document.querySelector('.computer-selection');
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');
const playerChoices = document.querySelector('.player-choices');
const chooseCarefully = document.querySelector('.choose-carefully');
const rockBeatsPaperMsg = document.querySelector('.score-txt');
const bodyEl = document.querySelector('body');

////////////////////////////////////////////////////////////////

playerChoices.addEventListener('click', e => {
  playerSelection = e.target.className;

  getComputerChoice();
  setSelectionImg();
  playSingleRound(playerSelection, computerSelection);
  setScores();
  gameOver();
});

///////////////////////////////////////////////////

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  computerChoice === 0
    ? (computerSelection = 'rock')
    : computerChoice === 1
    ? (computerSelection = 'paper')
    : (computerSelection = 'scissors');
}

function setScores() {
  playerScoreEl.innerText = playerScore;
  computerScoreEl.innerText = computerScore;
}

function setSelectionImg() {
  playerSelectionLogo.innerText = playerSelection;
  computerSelectionLogo.innerText = computerSelection;
}

function gameOver() {
  if (playerScore === 5 || computerScore === 5) {
    playerChoices.classList.toggle('disable-click');
    bodyEl.classList.toggle('opacity');
  }
}

function playSingleRound(playerSelection, computerSelection) {
  // If a tie, replay the round

  if (playerSelection === computerSelection) {
    chooseCarefully.innerText = "It's a tie!";
    rockBeatsPaperMsg.innerText = `${playerSelection} ties ${computerSelection}`;
  }

  // Winning scenarios for player
  else if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    chooseCarefully.innerText = 'You won!';
    rockBeatsPaperMsg.innerText = `${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    chooseCarefully.innerText = 'You lost!';
    rockBeatsPaperMsg.innerText = `${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
}
