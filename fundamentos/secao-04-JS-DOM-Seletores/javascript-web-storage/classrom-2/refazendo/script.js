const storage = sessionStorage;

// Recupere cada elemento

const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

// Verificar se o Storage já existe ou o cria

const checkStorage = () => {
  if (storage.getItem("cartãoSalvo") == null) {
    storage.setItem("cartãoSalvo", JSON.stringify([]));
  }
};

// Criar agora cada li da ul

const createList = (text) => {
  let elementLi = document.createElement("li");
  elementLi.innerText = text;
  list.appendChild(elementLi);
};

// Salvar no storage

const saveStorage = () => {
  const text = input.value;
  if (text === "") {
    return;
  }
  let listaTotal = JSON.parse(storage.getItem("cartãoSalvo"));
  listaTotal.push(text);
  storage.setItem("cartãoSalvo", JSON.stringify(listaTotal));
  createList(text);
  input.value = "";
};

// Adicionar Evento

checkStorage();
button.addEventListener("click", saveStorage);
