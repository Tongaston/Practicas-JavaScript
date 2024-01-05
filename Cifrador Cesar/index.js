const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const inputOriginal = document.getElementById('original');
const cipher = document.getElementById('cipher');
const result = document.getElementById('result');
const range = document.getElementById('range');

const shifMessage = () => {
  const wordArray = [...inputOriginal.value.toUpperCase()];
  printChar(0, wordArray);
};

const printChar = (currentLetterIndex, wordArray) => {
  if (wordArray.length === currentLetterIndex) return;
  inputOriginal.value = inputOriginal.value.substring(1);

  const spanChar = document.createElement('span');
  result.appendChild(spanChar);
  animateChar(spanChar)
    .then( () => {
        const charSinCodificar = wordArray[currentLetterIndex];
  spanChar.innerHTML = alphabet.includes(charSinCodificar)
    ? alphabet[
        (alphabet.indexOf(charSinCodificar) + parseInt(range.value)) %
        alphabet.length
      ]
    : charSinCodificar;
  printChar(currentLetterIndex + 1, wordArray);
});
    }

  

const animateChar = (spanChar) => {
  let letterChange = 0;
  return new Promise((resolve) => {
    const interval = setInterval(() => {
        spanChar.innerHTML = alphabet[Math.floor(Math.random() * alphabet.length)]
        letterChange++;
        if(letterChange === 3) {
            clearInterval(interval)
            resolve();
        }
    }, 50);
  });
};

const submit = (e) => {
  e.preventDefault();
  result.innerHTML = '';
  shifMessage();
};

cipher.onsubmit = submit;
