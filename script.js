const resultText = document.querySelector(".resultText");
const numberBtns = document.querySelectorAll(".numberBtns");
const operatorBtns = document.querySelectorAll(".operatorBtns");
const oddBtns = document.querySelectorAll(".oddBtns");
const clearBtn = document.querySelector("#clearBtn");

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

numberBtns.forEach(function (i) {
  i.addEventListener('click', function() {
    resultText.textContent = this.textContent;
  })
})

operatorBtns.forEach(function (i) {
  i.addEventListener('click', function() {
    resultText.textContent = this.textContent;
  })
})

oddBtns.forEach(function (i) {
  i.addEventListener('click', function() {
    resultText.textContent = this.textContent;
  })
})

clearBtn.addEventListener('click', function() {
  resultText.textContent = '';
})

