let _number1 = 1;
let _number2 = 5;
let _number3 = 2;

if (_number1 != 0 && _number2 != 0 && _number3 != 0) {
  if (_number1 % 2 === 0 || _number2 % 2 === 0 || _number3 % 2 === 0) {
    console.log("Há pelo menos um número par? " + true);
  } else {
    console.log("Há pelo menos um número par? " + false);
  }
} else {
  console.log("Números nulos são inválidos.");
}
