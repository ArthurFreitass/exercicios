// Elabore uma função que imprima uma contagem regressiva de um número fornecido pelo usuário até 0.

const Contador = (number) => {
  for (let index = 0; index <= number; number -= 1) {
    console.log(number);
  }
  return "\nContador";
};

console.log(Contador(10));
