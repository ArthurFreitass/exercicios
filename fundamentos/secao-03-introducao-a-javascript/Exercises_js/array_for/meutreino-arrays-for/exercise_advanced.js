// Área para criação de variáveis

const numbers_Array = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const number_One = numbers_Array[0];
const last_Number = numbers_Array[9];
let message = "";

// Loop e Lógica

for (let index = 0; index < numbers_Array.length - 1; index += 1) {
  if (numbers_Array[index + 1] > number_One) {
    message = "Os números estão em ordem crescente.";
  } else {
    message = "Os números não estão em  ordem crescente.";
  }
  console.log(message);
}

console.log(message);

// Estudar este exercicio
