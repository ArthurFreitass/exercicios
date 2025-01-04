// Área para declaração de variáveis
const numbers_Array = [
  192, 1234, 4654, -345, -1111, 1342, 5758, 86653, 1000000, -125,
];

let bigger = 0;
let smaller = 0;

// Loop

for (let index = 0; index < numbers_Array.length; index += 1) {
  if (numbers_Array[index] >= bigger) {
    bigger = numbers_Array[index];
  } else if (numbers_Array[index] < bigger && numbers_Array[index] < smaller) {
    smaller = numbers_Array[index];
  }
}

console.log(`O maior é ${bigger} e o menor é ${smaller}`);
