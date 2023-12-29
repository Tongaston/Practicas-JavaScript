const alfabeto = [
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
 
};

const submit = (e) => {
  e.preventDefault();
  result.innerHTML = '';
  shifMessage();
};

cipher.onsubmit = submit;
