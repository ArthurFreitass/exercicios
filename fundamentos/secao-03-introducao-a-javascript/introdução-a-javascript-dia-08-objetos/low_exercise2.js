function AdicionarRua(array, rua) {
  for (let index = 0; index < array.length; index += 1) {
    array[index].Local[rua].push({ Rua: "23" });
  }
}

const Moradores = [
  {
    Nome: "Arthur",
    Numero: 50,
    Local: {
      Estado: "MG",
      Rua: [{ Rua: "Primeira rua" }],
    },
  },
  {
    Nome: "Thiago",
    Numero: 34,
    Local: {
      Estado: "TP",
      Rua: [{ Rua: "Segunda rua" }],
    },
  },
];

AdicionarRua(Moradores, "Rua");

console.log(Moradores[0].Local);
