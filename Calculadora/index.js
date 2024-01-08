const displayValorAnterior = document.getElementById('result');
const displayValorActual = document.getElementById('actual-value');
const numbersButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const display = new Display(displayValorAnterior, displayValorActual);

numbersButtons.forEach((button) => {
  button.addEventListener('click', () => display.numAdd(button.innerHTML));
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => display.compute(button.value));
});
