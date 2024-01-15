// For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

///////////////////////////////////////////////////////////////////////////////////
// Plan

// 1. Remove the prompts

// 2 Remove the 5 round logic

// 3. Three buttons for user to select their choice

// 4. Icons that show user's choice & computer's choice

// 5. Score tracker

// 6. Round tracker

// 7. First to 5 wins

// 8. Reset the game

// 9. Press the button and it highlights it or does something with it

'use-strict';

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
const playerSelectionLogo = document.querySelector('.player-selection');
const computerSelectionLogo = document.querySelector('.computer-selection');
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');

playerScoreEl.innerText = playerScore;
computerScoreEl.innerText = computerScore;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

// reduce this code, add one event listener to all the divs and if it matches the text then change accordingly

rock.addEventListener('click', () => {
  playerSelection = 'rock';
  playerSelectionLogo.innerText = playerSelection;
  getComputerChoice();
  computerSelectionLogo.innerText = computerSelection;
  playSingleRound(playerSelection, computerSelection);
  playerScoreEl.innerText = playerScore;
  computerScoreEl.innerText = computerScore;
});

paper.addEventListener('click', () => {
  playerSelection = 'paper';
  playerSelectionLogo.innerText = playerSelection;
  getComputerChoice();
  computerSelectionLogo.innerText = computerSelection;
  playSingleRound(playerSelection, computerSelection);
  playerScoreEl.innerText = playerScore;
  computerScoreEl.innerText = computerScore;
});

scissors.addEventListener('click', () => {
  playerSelection = 'scissors';
  playerSelectionLogo.innerText = playerSelection;
  getComputerChoice();
  computerSelectionLogo.innerText = computerSelection;
  playSingleRound(playerSelection, computerSelection);
  playerScoreEl.innerText = playerScore;
  computerScoreEl.innerText = computerScore;
});

///////////////////////////////////////////////////

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  return computerChoice === 0
    ? (computerSelection = 'rock')
    : computerChoice === 1
    ? (computerSelection = 'paper')
    : (computerSelection = 'scissors');
}

////////////////////////////
// add score keeping

///////////////////////////////////////////////
// function getPlayerChoice() {
//   let playerChoice = playerChoicePrompt();

//   while (playerChoice === null) {
//     alert('Please input rock, paper, or scissors');
//     playerChoice = playerChoicePrompt();
//   }

//   playerChoice = playerChoice.toLowerCase();

//   while (
//     playerChoice !== 'rock' &&
//     playerChoice !== 'paper' &&
//     playerChoice !== 'scissors'
//   ) {
//     alert('Must enter rock, paper, or scissors');
//     playerChoice = playerChoicePrompt().toLowerCase();
//   }

//   return playerChoice;
// }

function playSingleRound(playerSelection, computerSelection) {
  // If a tie, replay the round

  if (playerSelection === computerSelection) {
    console.log('Tie!!!');
  }

  // Winning scenarios for player
  else if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log('Good job! You won!');
    playerScore++;
  } else {
    console.log('Aww...try again.');
    computerScore++;
  }
}

function game() {
  let roundTracker = 1;

  // Play 5 rounds in a row
  while (roundTracker <= 1) {
    console.log(`Round ${roundTracker}`);
    playSingleRound(getPlayerChoice(), getComputerChoice());
    ++roundTracker;
    console.log('Player Score:', playerScore, 'Computer Score:', computerScore);
  }

  playerScore > computerScore
    ? console.log('You Win!!!')
    : console.log('You Lose!!!');
}

// game();
