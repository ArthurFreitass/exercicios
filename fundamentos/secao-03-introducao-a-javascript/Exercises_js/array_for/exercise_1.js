// Área para declaração de váriaveis

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

let sum = 0;
let average = 0;
let message;
let bigger = 0;
let odd = 0;
let message_1;

// Loop de repetição e parte lógica

for (index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
  average = sum / 10;
  if (numbers[index] > bigger) {
    bigger = numbers[index];
  }
  if (numbers[index] % 2 != 0) {
    odd += 1;
    message_1 = `O número de ímpares é ${odd}`;
  } else if (odd == 0) {
    message_1 = "Não existem números ímpares";
  }
}

if (average > 20) {
  message = "O valor da média é maior que 20";
} else {
  message = "O valor da média é menor ou igual a 20.";
}
// Saída

console.log(`A soma dos números é igual a: ${sum}
A média dos números é ${average}
${message}
O maior número é: ${bigger}
${message_1}`);
