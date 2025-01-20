// Área para a declaração de variáveis

const operation_ = "g";

// Código

console.log(
  `Escolha o símbolo para realizar uma operação. [+ SOMA] [- SUBTRAÇÃO] [/ DIVISÃO] [* TABUADA]\n`
);

switch (operation_) {
  case "+": {
    let number_1 = 10;
    let number_2 = 20;

    console.log(number_1 + number_2);
    break;
  }

  case "-": {
    let number_1 = 1;
    let number_2 = 2;
    console.log(number_1 - number_2);
    break;
  }

  case "/": {
    let number_1 = 100;
    let number_2 = 5;

    console.log(number_1 / number_2);
    break;
  }

  case "*": {
    let number_1 = 200;
    let index = 1;

    while (index <= 10) {
      console.log(`${number_1} x ${index} = ${number_1 * index}`);
      index += 1;
    }
    break;
  }
  default: {
    console.log("Operação inválida.");
  }
}
