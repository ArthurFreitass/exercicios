const Estoque = [
  {
    Produto: {
      Nome: "Leite",
      Quantidade: 100,
    },
  },
  {
    Produto: {
      Nome: "Café",
      Quantidade: 200,
    },
  },
  {
    Produto: {
      Nome: "Suco Del Valle",
      Quantidade: 123,
    },
  },
];

const EstoqueTotal = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index].Produto.Quantidade;
  }
  return "O estoque total é " + sum;
};

console.log(EstoqueTotal(Estoque));
