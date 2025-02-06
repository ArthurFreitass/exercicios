// Adicionar clientes a um banco, sendo ele um objeto

function AddClientes(array, rua) {
  for (let index = 0; index < array.length; index += 1) {
    array[index][rua].push({ Rua: "Desconhecida" });
  }
}

const Clientes = [
  {
    Nome: "Vinicius",
    Idade: 21,
    Saldo: 2500,
    Local: [{ Estado: "MG" }, { Cidade: "Betim" }],
  },
  {
    Nome: "Lucas",
    Idade: 36,
    Saldo: 5000,
    Local: [{ Estado: "RJ" }, { Cidade: "Cidade de Deus" }],
  },
];

AddClientes(Clientes, "Local");

console.log(Clientes[0]);
