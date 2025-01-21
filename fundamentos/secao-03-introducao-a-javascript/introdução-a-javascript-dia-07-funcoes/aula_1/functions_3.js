const trybeBankCustomers = ["Oliva", "Nat", "Gus"];

function addCustomers(costumers, newCostumers) {
  for (let index = 0; index < newCostumers.length; index += 1) {
    if (typeof newCostumers[index] === "string") {
      costumers.push(newCostumers[index]);
    } else {
      return "Todos os valores precisam ser strings";
    }
  }
  return trybeBankCustomers;
}

console.log(addCustomers(trybeBankCustomers, ["Joaquim"]));

// Pessoa adicionada com sucesso!
