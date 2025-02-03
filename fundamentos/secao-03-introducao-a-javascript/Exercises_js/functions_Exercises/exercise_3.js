// Verificar par ou ímpar

const Number_ = -1;

const verifica_Number = (number) => {
  if (number % 2 == 0) {
    return `O número é par.`;
  } else {
    return `O número é ímpar.`;
  }
};

console.log(verifica_Number(Number_));
