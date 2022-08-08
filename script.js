const resultText = document.querySelector(".resultText");
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operation]");
const equalBtn = document.querySelector("[data-equal]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const previousNumber = document.querySelector("[data-previous-operand]");
const currentNumber = document.querySelector("[data-current-operand]");
let firstOperand = '';
let secondOperand = '';
let result;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, c) {
  switch (c) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) {
        return "cant divide by zero";
      } else {
        return divide(a, b);
      }
  }
}
