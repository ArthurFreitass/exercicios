// Recupere os elementos

const number1 = document.querySelectorAll(".input-number input")[0];
const number2 = document.querySelectorAll(".input-number input")[1];
const span = document.querySelector("span");
const button = document.querySelector("button");

const valid_Value = (num1, num2) => {
  let a = parseFloat(num1);
  let b = parseFloat(num2);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error("ERRO: Digite um número.");
  }
};

function convert(value) {
  let number = parseFloat(value);
  if (isNaN(number)) {
    return;
  } else {
    return number;
  }
}

const sum = (number1, number2) => {
  try {
    let a = convert(number1);
    let b = convert(number2);
    valid_Value(number1, number2);
    let result = a + b;
    span.textContent = result;
  } catch (error) {
    span.textContent = error.message;
  }
};

button.addEventListener("click", () => {
  sum(number1.value, number2.value);
});
