const ObjetoTreino = [
  {
    Nome: "Sofia",
    Idade: undefined,
    Telefone: undefined,
    Localização: [
      { País: "Brazil" },
      { Estado: "Minas Gerais" },
      { Cidade: "Esmeralda" },
      { Escola: "Escola Estadual São Tomaz de Aquino - 008931" },
    ],
    Compensa: [{ Compensa: "SlkNumCompensa" }],
  },
];
console.log(ObjetoTreino);

// função que adiciona ao final do array do objeto

const PushObject = (objetoArray, key) => {
  for (let index = 0; index < objetoArray.length; index += 1) {
    objetoArray[index][key].push({ Compensa: "Compensa" });
  }
};

PushObject(ObjetoTreino, "Compensa");
console.log(ObjetoTreino[0]);

ObjetoTreino.Linda = "Perfeita";

console.log(ObjetoTreino);
