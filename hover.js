const target = document.querySelector('.target');
const gameContainer = document.querySelector('.game-container');
const timerDisplay = document.querySelector('.timer');
const startButton = document.getElementById('start-button');
let score = 0;
let timeLeft = 10;
let timerInterval;

function moveTarget() {
  const maxX = gameContainer.clientWidth - target.clientWidth;
  const maxY = gameContainer.clientHeight - target.clientHeight;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

function increaseScore() {
  score++;
  target.textContent = `${score}`;
  moveTarget();
}

function updateTimer() {
  timerDisplay.textContent = `Time: ${timeLeft} s`;
}

function startGame() {
  startButton.disabled = true;
  timeLeft = 10;
  score = 0;
  updateTimer();
  clearInterval(timerInterval);
  target.addEventListener('mouseover', increaseScore);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      target.removeEventListener('mouseover', increaseScore);
      alert(`Time's up!\nYour score: ${score}`);
      startButton.disabled = false;
    }
  }, 1000);
}

startButton.addEventListener('click', startGame);
