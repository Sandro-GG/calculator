function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) return "ERROR";
  return a / b;
}

function operate(a, op, b) {
  switch (op) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return division(a, b);
  }
}

let argOne = 0;
let op = "";
let argTwo = 0;

const display = document.querySelector('.display');

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  display.textContent = "";
  argOne = 0;
  argTwo = 0;
  op = "";
});

const equal = document.getElementById('equal');
equal.addEventListener('click', () => {
  display.textContent = "";
  display.textContent = operate(argOne, op, argTwo);
});


// OPERATORS________
const plus = document.getElementById('plus');
plus.addEventListener('click', () => {
  argOne = +(display.textContent);
  op = "+";
  display.textContent = "";
});
const minus = document.getElementById('minus');
minus.addEventListener('click', () => {
  argOne = +(display.textContent);
  op = "-";
  display.textContent = "";
});
const multi = document.getElementById('multi');
multi.addEventListener('click', () => {
  argOne = +(display.textContent);
  op = "*";
  display.textContent = "";
});
const divide = document.getElementById('divide');
divide.addEventListener('click', () => {
  argOne = +(display.textContent);
  op = "/";
  display.textContent = "";
});


// DIGITS__________
const one = document.getElementById('one');
one.addEventListener('click', () => {
  display.textContent += "1";
  if (op != "") {
    argTwo = +(display.textContent);
  } else {
    op = "";
  }
});
const two = document.getElementById('two');
two.addEventListener('click', () => {
  display.textContent += "2";
  if (op != "") {
    argTwo = +(display.textContent);
  } else {
    op = "";
  }
});
const three = document.getElementById('three');
three.addEventListener('click', () => {
  display.textContent += "3";
  if (op != "") {
    argTwo = +(display.textContent);
  } else {
    op = "";
  }
});
const four = document.getElementById('four');
four.addEventListener('click', () => {
  display.textContent += "4";
  if (op != "") {
    argTwo = +(display.textContent);
  } else {
    op = "";
  }
});
const five = document.getElementById('five');
five.addEventListener('click', () => {
  display.textContent += "5";
  if (op != "") {
    argTwo = +(display.textContent);
  } else {
    op = "";
  }
});
const six = document.getElementById('six');
six.addEventListener('click', () => {
  display.textContent += "6";
  if (op != "") {
    argTwo = +(display.textContent);
  } else {
    op = "";
  }
});
const seven = document.getElementById('seven');
seven.addEventListener('click', () => {
  display.textContent += "7";
  if (op != "") {
    argTwo = +(display.textContent);
  } else {
    op = "";
  }
});
const eight = document.getElementById('eight');
eight.addEventListener('click', () => {
  display.textContent += "8";
  if (op != "") {
    argTwo = +(display.textContent);
  } else {
    op = "";
  }
});
const nine = document.getElementById('nine');
nine.addEventListener('click', () => {
  display.textContent += "9";
  if (op != "") {
    argTwo = +(display.textContent);
  } else {
    op = "";
  }
});
const zero = document.getElementById('zero');
zero.addEventListener('click', () => {
  display.textContent += "0";
  if (op != "") {
    argTwo = +(display.textContent);
  } else {
    op = "";
  }
});