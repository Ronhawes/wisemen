document.addEventListener('DOMContentLoaded', () => {
    let scrambledWord = 'lppea';
    let solution = 'apple';
    let timeLeft = 60;
    let score = 0;
    let interval;
  
    const scrambledWordElement = document.getElementById('scrambledWord');
    const userInputElement = document.getElementById('userInput');
    const feedbackElement = document.getElementById('feedbackMessage');
    const timerElement = document.getElementById('timer');
    const scoreElement = document.getElementById('score');
    const nextWordButton = document.getElementById('nextWord');
  
    scrambledWordElement.innerText = scrambledWord;
    timerElement.innerText = timeLeft;
  
    const startTimer = () => {
      interval = setInterval(() => {
        timeLeft -= 1;
        timerElement.innerText = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(interval);
          feedbackElement.innerText = 'Time is up!';
          feedbackElement.style.color = 'red';
          nextWordButton.style.display = 'block';
        }
      }, 1000);
    };
  
    const checkSolution = () => {
      const userGuess = userInputElement.value;
      if (userGuess.toLowerCase() === solution) {
        clearInterval(interval);
        feedbackElement.innerText = 'Correct!';
        feedbackElement.style.color = 'green';
        score += 10;
        scoreElement.innerText = score;
        nextWordButton.style.display = 'block';
      } else {
        feedbackElement.innerText = 'Try again!';
        feedbackElement.style.color = 'red';
      }
    };
  
    document.getElementById('submitGuess').addEventListener('click', checkSolution);
  
    nextWordButton.addEventListener('click', () => {
      // Logic to fetch the next scrambled word
      scrambledWord = 'drtcoo'; // Example for the next word
      solution = 'doctor';
      scrambledWordElement.innerText = scrambledWord;
      userInputElement.value = '';
      feedbackElement.innerText = '';
      timeLeft = 60;
      timerElement.innerText = timeLeft;
      nextWordButton.style.display = 'none';
      startTimer();
    });
  
    startTimer();
  });
  