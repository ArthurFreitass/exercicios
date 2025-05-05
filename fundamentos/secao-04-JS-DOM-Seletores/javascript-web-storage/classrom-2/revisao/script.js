// Revisando os conceitos de localStorage e sessionStorage

const storage = localStorage;
storage.clear();

// Funciona na forma de chaves: valor

storage.setItem("Acesso", "Arthur");
storage.setItem("Tipo", "Random");

// Recuperando uma key
const tipoAcesso = storage.getItem("Tipo");
console.log(tipoAcesso);

// Trabalhando com objetos

const perfectGirl = {
  Inicial: "S",
  Fraqueza: "Isso existe?",
  Defeito: "Eu",
  Apelido: "R--------",
};

// Adicionando a uma sessionStorage

const session = sessionStorage;

session.setItem("AquelaGarota", JSON.stringify(perfectGirl));

// Recuperando o objeto a partir da key

const obj = JSON.parse(session.getItem("AquelaGarota"));
console.log(obj);

storage.clear();
