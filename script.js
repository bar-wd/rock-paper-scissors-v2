let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  return computerChoice === 0
    ? 'rock'
    : computerChoice === 1
    ? 'paper'
    : 'scissors';
}

function playerChoicePrompt() {
  return prompt('Please choose rock, paper, or scissors');
}

function getPlayerChoice() {
  let playerChoice = playerChoicePrompt();

  // Keep asking the user for an input when clicking cancel

  while (playerChoice === null) {
    alert('Please input rock, paper, or scissors');
    playerChoice = playerChoicePrompt();
  }

  // Can't make null lowercase, this will make the user input lowercase
  // once it is no longer null

  playerChoice = playerChoice.toLowerCase();

  while (
    playerChoice !== 'rock' &&
    playerChoice !== 'paper' &&
    playerChoice !== 'scissors'
  ) {
    alert('Must enter rock, paper, or scissors');
    playerChoice = playerChoicePrompt().toLowerCase();
  }

  return playerChoice;
}

// Must only accept 'rock', 'paper', 'scissors'
// If not, make user pick again

function playSingleRound(playerSelection, computerSelection) {
  // If a tie, replay the round

  if (playerSelection === computerSelection) {
    alert('Tie!!!');
  }

  // Winning scenarios for player
  else if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    alert('Good job! You won!');
    playerScore++;
  } else {
    alert('Aww...try again.');
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

game();
