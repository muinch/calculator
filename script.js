const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value;

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.classList.add("alert-danger");
    resultDiv.textContent = "Error: Please enter valid numbers";
    return;
  }

  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "mul":
      result = num1 * num2;
      break;
    case "div":
      if (num2 === 0) {
        resultDiv.classList.add("alert-danger");
        resultDiv.textContent = "Error: Cannot divide by zero";
        return;
      }
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation";
  }

  const hasDecimals = result % 1 != 0;
  resultDiv.classList.remove("alert-danger");
  resultDiv.classList.add("alert-success");
  resultDiv.textContent = ` Result: ${
    hasDecimals ? result.toFixed(2) : Math.floor(result)
  }`;
});
