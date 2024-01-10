let computer;
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      computer = 'Rock';
      break;
    case 2:
      computer = 'Paper';
      break;
    case 3:
      computer = 'Scissors';
      break;
  }
  return computer;
}
console.log(getComputerChoice());
