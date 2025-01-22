const trybeBankCustomers = ["Oliva", "Nat", "Gus"];

// customer está recebendo trybebank - o outro parâmetro irá receber os novos clientes

function addCustomers(customer, novosClientes) {
  for (let index = 0; index < customer.length; index += 1) {
    if (typeof customer[index] != "string") {
      return "O parâmetro passado deve ser do tipo string";
    }
  }
  // Loop verifica se cada valor no parâmetro customer é uma string

  for (let index = 0; index < novosClientes.length; index += 1) {
    if (typeof novosClientes[index] === "string") {
      customer.push(novosClientes[index]);
    } else {
      return "Todos os valores precisam ser strings";
    }
  }
  return "Pessoa adicionada com sucesso!";

  // loop verifica se cada elemento é uma string no novo parâmetro, e se for adiciona ao final
}

console.log(addCustomers(trybeBankCustomers, ["Evaristo"])); // Pessoa adicionada com sucesso!
