const Array_Number = [25, 30, 35, 40, 50];

const Soma = Array_Number.reduce(
  (acumulador, numbers) => acumulador + numbers,
  0
);

console.log(Soma);
