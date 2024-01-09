const wordContainer = document.getElementById('wordContainer');
const usedLettersElement = document.getElementById('usedLetters');
const startButton = document.getElementById('startButton');

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width = 0;
ctx.canvas.height = 0;

const bodyParts = [
  [4, 2, 1, 1],
  [4, 3, 1, 3],
  [3, 5, 1, 1],
  [5, 5, 1, 1],
  [3, 3, 1, 1],
  [5, 3, 1, 1],
];

let selectedPlayer;
let usedLetters;
let mistakes;
let hits;

const startGame = () => {
  usedLetters = [];
  mistakes = 0;
  hits = 0;
  wordContainer.innerHTML = '';
  usedLettersElement.innerHTML = '';
  startButton.style.display = 'none';
  drawHangMan();
  selectRandomPlayer();
  drawWord();
  document.addEventListener('keydown', letterEvent);
};

const drawHangMan = () => {
  ctx.canvas.width = 120;
  ctx.canvas.height = 160;
  ctx.scale(20, 20);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#d95d39';
  ctx.fillRect(0, 7, 4, 1);
  ctx.fillRect(1, 0, 1, 8);
  ctx.fillRect(2, 0, 3, 1);
  ctx.fillRect(4, 1, 1, 1);
};

const selectRandomPlayer = () => {
  let player =
    players[Math.floor(Math.random() * players.length)].toUpperCase();
  selectedPlayer = player.split('');
};

const drawWord = () => {
  selectedPlayer.forEach((letter) => {
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter.toUpperCase();
    letterElement.classList.add('letter');
    letterElement.classList.add('hidden');
    wordContainer.appendChild(letterElement);
  });
};

const letterEvent = (event) => {
  let newLetter = event.key.toUpperCase();
  if (newLetter.match(/^[a-zñ]$/i) && !usedLetters.includes(newLetter)) {
    letterImput(newLetter);
  }
};

const letterImput = (letter) => {
  if (selectedPlayer.includes(letter)) {
    correctLetter(letter);
  } else {
    wrongLetter();
  }
  addLetter(letter)
  usedLetters.push(letter)
};

const correctLetter = (letter) => {
  const { children } = wordContainer;
  for (let i = 0; i < children.length; i++) {
    if (children[i].innerHTML === letter) {
      children[i].classList.toggle('hidden');
      hits++;
    }
  }
  if (hits === selectedPlayer.length) endGame();
};

const wrongLetter = () => {
  addBodyPart(bodyParts[mistakes]);
  mistakes++;
  if (mistakes === bodyParts.length) endGame();
};

const addBodyPart = (bodyPart) => {
  ctx.fillStyle = '#fff';
  ctx.fillRect(...bodyPart);
};

const addLetter = letter => {
    const letterElement = document.createElement('span')
    letterElement.innerHTML = letter.toUpperCase()
    usedLettersElement.appendChild(letterElement)
}

const endGame = () => {
  document.removeEventListener('keydown', letterEvent);
  startButton.style.display = 'block';
};

startButton.addEventListener('click', startGame);
