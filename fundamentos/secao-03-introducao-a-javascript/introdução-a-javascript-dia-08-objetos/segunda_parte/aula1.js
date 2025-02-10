// Adicionando novas propriedades

const pessoa = {
  Nome: "Xandão",
  Idade: 23,
};

pessoa["Sobrenome"] = "Arthur";

// Adicionando por função

function AddIPropriedades(objeto, chave, valor) {
  if (typeof objeto[chave] === "undefined") {
    objeto[chave] = valor;
  }
}

AddIPropriedades(pessoa, "País", "Brasil");

console.log(pessoa);
