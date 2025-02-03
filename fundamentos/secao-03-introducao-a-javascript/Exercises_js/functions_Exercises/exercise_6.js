// Implemente uma função que recebe dois números e retorna o maior deles

const MaiorNumero = (number1, number2) => {
  if (number1 > number2) {
    return `O maior número é o ${number1}`;
  } else if (number2 > number1) {
    return `O maior número é o ${number2}`;
  } else {
    return `Os números são iguais.`;
  }
};

console.log(MaiorNumero(10, 10));
