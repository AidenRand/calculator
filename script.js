class Calculator {
  constructor(previousNumberTextElement, currentNumberTextElement) {
    this.previousNumberTextElement = previousNumberTextElement;
    this.currentNumberTextElement = currentNumberTextElement;
    this.clear();
  }

  // clear all numbers
  clear() {
    this.currentNumber = "";
    this.previousNumber = "";
    this.operation = undefined;
  }

  delete() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1);
  }

  // Make numbers form string to go side by side instead of adding
  appendNumber(number) {
    if (number === "." && this.currentNumber.includes(".")) return;
    this.currentNumber = this.currentNumber.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentNumber === "") return;
    if (this.previousNumber !== "") {
      this.operate();
    }
    this.operation = operation;
    this.previousNumber = this.currentNumber;
    this.currentNumber = "";
  }

  operate() {
    let computation;
    const previous = parseFloat(this.previousNumber);
    const current = parseFloat(this.currentNumber);
    if (isNaN(previous) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = previous + current;
        break;
      case "-":
        computation = previous - current;
        break;
      case "×":
        computation = previous * current;
        break;
      case "÷":
        computation = previous / current;
        break;
      default:
        return "Syntax error";
    }
    this.currentNumber = computation.toFixed(2);
    this.operation = undefined;
    this.previousNumber = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerNumbers = parseFloat(stringNumber.split(".")[0]);
    const decimalNumbers = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerNumbers)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerNumbers.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalNumbers != null) {
      return `${integerDisplay}.${decimalNumbers}`
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentNumberTextElement.textContent = this.getDisplayNumber(
      this.currentNumber
    );
    if (this.operation != null) {
      this.previousNumberTextElement.textContent = 
      `${this.getDisplayNumber(this.previousNumber)} ${this.operation}`;
    } else {
      this.previousNumberTextElement.textContent = '';
    }
  }
}

const resultText = document.querySelector(".resultText");
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operation]");
const equalBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const previousNumber = document.querySelector("[data-previous-operand]");
const currentNumber = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousNumber, currentNumber);

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.textContent);
    calculator.updateDisplay();
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.textContent);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener("click", (button) => {
  calculator.operate();
  calculator.updateDisplay();
});

allClearBtn.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteBtn.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
