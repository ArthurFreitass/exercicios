// Criar um contador de números negativos e positivos em um array

console.log("CONTADOR DE NEGATIVOS E POSITIVOS");

const Array_Number = [10, -2, 5, -191, -1];

function ContadorPositivoNegativo(numbers) {
  let negative = 0;
  let positive = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0) {
      negative += 1;
    } else if (numbers[index] > 0) {
      positive += 1;
    } else {
    }
  }
  return `
Negativos: ${negative}
Positivos: ${positive}`;
}

console.log(ContadorPositivoNegativo(Array_Number));
