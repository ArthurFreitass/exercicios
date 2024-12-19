const lap = 5;

for (let index = 1; index <= lap; index++) {
  console.log(`${index}.o volta completada`);
}

// Somando todos os números de um array com o for

const array_ = [10, 13, 450, 200, 90, 13];
let sum = 0;

for (let index = 0; index < 6; index++) {
  sum += array_[index];
}

console.log(`A soma de todos os elementos é ${sum}`);

// Fazer log de um array de strings

const brands = ["BMW", "Mercedes", "Toyota", "Renault"];

for (index = 0; index < 4; index += 1) {
  console.log(`${index} - ${brands[index]}`);
}
