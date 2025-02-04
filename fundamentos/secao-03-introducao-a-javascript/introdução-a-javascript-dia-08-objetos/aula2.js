// Objeto dentro de um array

const moradores = [
  {
    Nome: "Xande",
    Idade: 23,
    Numero: 67,
  },
  {
    Nome: "Super",
    Idade: 9000,
    Numero: 61,
  },
];

const primeiroMorador = moradores[0];
console.log(primeiroMorador);

const numeroPrimeiro = moradores[0].Numero;
console.log(numeroPrimeiro);

// Mostrar todos os residentes

for (let index = 0; index < moradores.length; index += 1) {
  const moradoresTotal = moradores[index];
  console.log(moradoresTotal.Nome);
}
