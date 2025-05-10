const storage = sessionStorage;

// Recuperando

const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

// Criando o sessionStorage

const createStorage = () => {
  if (storage.getItem("Data") == null) {
    // Nessa caso cria uma nova key
    // Já cria um array vazio, e o converte para string
    storage.setItem("Data", JSON.stringify([]));
  }
};

const insertLi = (text) => {
  const liElement = document.createElement("li");
  liElement.innerText = text;
  list.appendChild(liElement);
};

const saveStorage = () => {
  let text = input.value;
  if (text === "") {
    return;
  }
  // É necessário receber a chave
  const keyTotal = JSON.parse(storage.getItem("Data"));
  // keyTotal recebeu um array, logo é um array
  keyTotal.push(text);
  // inserindo ao li
  insertLi(text);
  // storage deve receber keyTotal
  storage.setItem("Data", JSON.stringify(keyTotal));
};

createStorage();
button.addEventListener("click", saveStorage);
