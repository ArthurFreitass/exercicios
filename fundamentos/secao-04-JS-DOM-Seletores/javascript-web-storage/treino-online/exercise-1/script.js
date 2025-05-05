const storage = localStorage;

// Recuperando os elementos

const input = document.getElementById("inputTexto");
const buttom = document.getElementById("botão");
const list = document.getElementById("lista");

// Verificar se a lista já existe

function listExists() {
  if (storage.getItem("NomesSalvos") === null) {
    storage.setItem("NomesSalvos", JSON.stringify([]));
  }
}

// Inserir cada nome

function InsertName(nomeTexto) {
  const liName = document.createElement("li");
  liName.innerText = nomeTexto;
  list.appendChild(liName);
}

// Adicionar ao storage agora

function SaveStorage() {
  const nomeTexto = input.value;
  if (input.value === "") return;

  const antigaLista = JSON.parse(storage.getItem("NomesSalvos"));
  antigaLista.push(nomeTexto);

  // Para transformar a key em uma string
  storage.setItem("NomesSalvos", JSON.stringify(antigaLista));
  InsertName(nomeTexto);
}

// Mostrar todos os elementos salvos

function loadValues() {
  const nomes = JSON.parse(storage.getItem("NomesSalvos"));
  for (let index = 0; index < nomes.length; index += 1) {
    const nome = nomes[index];
    InsertName(nome);
  }
}

listExists();
loadValues();
buttom.addEventListener("click", SaveStorage);
