function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `You chose: ${capitalize(userChoice)}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${capitalize(computerChoice)}`;

  let winner = '';

  if (userChoice === computerChoice) {
    winner = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    winner = "You win!";
  } else {
    winner = "Computer wins!";
  }

  document.getElementById('winner').textContent = `Winner: ${winner}`;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
