import React, { useState } from 'react';

const Game = () => {
  const options = ['rock', 'paper', 'scissors'];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
  };

  const handleUserChoice = (choice) => {
    const computer = generateComputerChoice();
    setUserChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
      setResult('It\'s a tie!');
    } else if (
      (choice === 'rock' && computer === 'scissors') ||
      (choice === 'paper' && computer === 'rock') ||
      (choice === 'scissors' && computer === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <div>
        <p>Your choice: {userChoice}</p>
        <p>Computer's choice: {computerChoice}</p>
        <p>Result: {result}</p>
      </div>
      <div>
        {options.map((option) => (
          <button key={option} onClick={() => handleUserChoice(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Game;
