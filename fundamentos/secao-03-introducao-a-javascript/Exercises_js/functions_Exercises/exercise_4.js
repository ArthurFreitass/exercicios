// Elabore uma função que calcule o fatorial de um número inteiro positivo

const Fatorial = (number1) => {
  let sum = 1;
  for (let index = 1; index < number1; index += 1) {
    sum += index * sum;
  }
  return sum;
};

console.log(Fatorial(5));
