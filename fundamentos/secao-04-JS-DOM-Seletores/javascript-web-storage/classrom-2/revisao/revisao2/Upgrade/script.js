// Recuperando o sessionStorage
const storage = sessionStorage;

// Recuperando os elementos da interface
const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("frases");

button.style.background = "crimson";

// Garante que a chave existe
if (storage.getItem("listaFrase") === null) {
  storage.setItem("listaFrase", JSON.stringify([]));
}

// Cria e adiciona uma <li> na lista
function insertPhrase(fraseTexto) {
  const frase = document.createElement("li");
  frase.innerText = fraseTexto;
  ul.appendChild(frase);
}

// Adiciona nova frase ao storage e à tela
function saveStorage() {
  const fraseTexto = input.value.trim();
  if (fraseTexto === "") return; // ignora se estiver vazia

  const antigaLista = JSON.parse(storage.getItem("listaFrase"));
  antigaLista.push(fraseTexto);
  storage.setItem("listaFrase", JSON.stringify(antigaLista));
  insertPhrase(fraseTexto);
  input.value = ""; // limpa o campo
}

// Carrega todas as frases ao abrir a página
function carregarFrases() {
  const frases = JSON.parse(storage.getItem("listaFrase"));
  frases.forEach(insertPhrase);
}

// Eventos
button.addEventListener("click", saveStorage);

// Inicializa a lista ao abrir
carregarFrases();
