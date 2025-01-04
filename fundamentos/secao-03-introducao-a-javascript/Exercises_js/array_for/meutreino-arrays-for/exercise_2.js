// Área para a declaração de variáveis
let sum = 0;

for (let index = 1; index <= 50; index += 1) {
  if (index % 2 != 0) {
    sum += index;
  }
}

// Saída

console.log(`A soma entre os números é: ${sum}`);
