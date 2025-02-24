// Revisão

const Sofia = [
  {
    Nome: "Sofia",
    Idade: 14.5,
    Caracteristica: "Inteligentissíma",
    SheIs: [{ SheIs: "Beautiful" }],
  },
];

function AddValor(array, key) {
  for (let index = 0; index < array.length; index += 1) {
    array[index][key].push({ SheIs: "REBAIXADA" });
  }
}

AddValor(Sofia, "SheIs");
console.log(Sofia[0]);
