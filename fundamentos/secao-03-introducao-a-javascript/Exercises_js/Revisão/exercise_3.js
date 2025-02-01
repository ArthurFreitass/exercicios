// Programa que recebe um número e mostra a soma de todos os números até N

console.log("SOMA DOS NÚMEROS DE 1 A N\n");

function Progressao(number) {
  let soma = 0;
  for (let index = 1; index <= number; index += 1) {
    soma += index;
  }
  return `A soma de todos os números até N é ${soma}`;
}

console.log(Progressao(100));
