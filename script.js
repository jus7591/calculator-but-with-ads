const display = document.querySelector('#display');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const buttons = document.querySelector('.buttons');
const secret = document.querySelector('#secret');
const coinSound = new Audio('smb2_coin.wav');

equals.addEventListener('click', calculate);
buttons.addEventListener('click', checkButton);
clear.addEventListener('click', clearDisplay);
secret.addEventListener('click', secretSound);

function checkButton(event) {
  const btn = event.target;

  if (btn.classList.contains('math')) {
    addToDisplay(btn.textContent);
  }
}

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = display.value.replace('X', '*');
    if (Number.isInteger(eval(display.value))) {
      display.value = eval(display.value);
    } else {
      display.value = eval(display.value).toFixed(2);
    }
  } catch (e) {
    display.value = 'Error';
  }
}

function secretSound() {
  coinSound.play();
}
