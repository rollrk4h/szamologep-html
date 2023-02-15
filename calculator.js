$(document).ready(function () {
  const toggleModeBtn = document.getElementById("toggle-mode");
  const body = document.querySelector("body");

  toggleModeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
  });

  const currentOperandText = $("#current-operand");
  const previousOperandText = $("#previous-operand");
  let currentOperand = "";
  let previousOperand = "";
  let operation = undefined;

  // Update the display with the current and previous operands
  function updateDisplay() {
    currentOperandText.text(currentOperand);
    previousOperandText.text(previousOperand);
  }

  // Append a number to the current operand
  function appendNumber(number) {
    if (number === "." && currentOperand.includes(".")) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
  }

  // Set the operation for the calculator
  function setOperation(op) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = "";
    updateDisplay();
  }

  // Perform a calculation
  function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "÷":
        result = prev / current;
        break;
      default:
        return;
    }
    currentOperand = result.toString();
    operation = undefined;
    previousOperand = "";
    updateDisplay();
  }

  // Clear the calculator
  function clearCalculator() {
    currentOperand = "";
    previousOperand = "";
    operation = undefined;
    updateDisplay();
  }

  // Delete the last character of the current operand
  function deleteCharacter() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
  }

  // Add event listeners to the buttons
  $("#zero").click(function () {
    appendNumber(0);
  });

  $("#one").click(function () {
    appendNumber(1);
  });

  $("#two").click(function () {
    appendNumber(2);
  });

  $("#three").click(function () {
    appendNumber(3);
  });
  $("#four").click(function () {
    appendNumber(4);
  });
  $("#five").click(function () {
    appendNumber(5);
  });
  $("#six").click(function () {
    appendNumber(6);
  });
  $("#seven").click(function () {
    appendNumber(7);
  });
  $("#eight").click(function () {
    appendNumber(8);
  });
  $("#nine").click(function () {
    appendNumber(9);
  });
  // Append a number to the current operand
  function appendNumber(number) {
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
  }
  // Clear the calculator
  $("#clear").click(function () {
    currentOperand = "";
    previousOperand = "";
    operator = "";
    updateDisplay();
  });

  // Remove the last character of the current operand
  $("#backspace").click(function () {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
  });

  // Handle the decimal point button
  $("#decimal").click(function () {
    if (currentOperand.includes(".")) return;
    currentOperand = currentOperand.toString() + ".";
    updateDisplay();
  });

  // Handle the operator buttons
  $("#add").click(function () {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      calculate();
    }
    operator = "+";
    previousOperand = currentOperand;
    currentOperand = "";
    updateDisplay();
  });

  $("#subtract").click(function () {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      calculate();
    }
    operator = "-";
    previousOperand = currentOperand;
    currentOperand = "";
    updateDisplay();
  });

  $("#multiply").click(function () {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      calculate();
    }
    operator = "*";
    previousOperand = currentOperand;
    currentOperand = "";
    updateDisplay();
  });

  $("#divide").click(function () {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      calculate();
    }
    operator = "/";
    previousOperand = currentOperand;
    currentOperand = "";
    updateDisplay();
  });

  // Handle the equals button
  $("#equals").click(function () {
    calculate();
    updateDisplay();
  });

  // Calculate the result of the operation
  function calculate() {
    var result;
    var previous = parseFloat(previousOperand);
    var current = parseFloat(currentOperand);

    if (isNaN(previous) || isNaN(current)) return;

    switch (operator) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "*":
        result = previous * current;
        break;
      case "/":
        result = previous / current;
        break;
      default:
        return;
    }

    currentOperand = result.toString();
    operator = "";
    previousOperand = "";
  }
});
