// Implemente uma função que troca os valores de duas variáveis. Ou seja, a função recebe duas variáveis, troca seus valores e imprime os novos valores.

function TrocaValores(num1, num2) {
  let numero1 = num1;
  num1 = num2;
  return `${num1} ${numero1}`;
}

console.log(TrocaValores(10, 5));
