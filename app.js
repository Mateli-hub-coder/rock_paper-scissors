'use Strict';
const options = ['rock', 'paper', 'scissor']; // An array to display the gaming options
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)]; // getting the options in the array randomly
  return choice;
}
// getWinner() that shows the winner
function getWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 'Tie';
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')
  ) {
    return 'Player';
  } else {
    return 'Computer';
  }
}
// playRound function that plays one round
function playRound(playerSelection, computerSelection) {
  const result = getWinner(playerSelection, computerSelection);
  if (result == 'Tie') {
    return "It's a tie";
  } else if (result == 'Player') {
    return `"You Win! ${playerSelection} beats ${computerSelection}"`;
  } else {
    return `"You Lose! ${computerSelection} beats ${playerSelection}";`;
  }
}
// getting the players choice and making it caseInsensitive
function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const playerChoice = prompt('Enter rock, paper or scissor');
    if (playerChoice == null) {
      continue;
    }
    const choiceLower = playerChoice.toLowerCase();
    if (options.includes(choiceLower)) {
      validatedInput = true; //stops our loop
      return choiceLower;
    }
  }
}
// PlayGame() that plays the game in five rounds
function PlayGame() {
  let playerScore = 0;
  let computerScore = 0;
  console.log('Hi! Welcome player');
  for (i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log('------');
    if (getWinner(playerSelection, computerSelection) == 'Player') {
      playerScore++;
    } else if (getWinner(playerSelection, computerSelection) == 'Computer') {
      computerScore++;
    }
  }
  console.log('Game Over!');
  if (playerScore > computerScore) {
    console.log('player was the winner');
  } else if (playerScore < computerScore) {
    console.log('computer was the winner');
  } else {
    console.log("It's a tie");
  }
}
PlayGame();
