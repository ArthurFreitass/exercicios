// Adicionando Dados user com localStorage

localStorage.setItem("Name", "User");
localStorage.setItem("Profession", "Programmer");
localStorage.setItem("Language", "English");
localStorage.setItem("Age", 32);
console.log(localStorage.getItem("Profession"));
localStorage.removeItem("Language");
console.log(localStorage.length);

// Os comandos são iguais para a sessionStorage

sessionStorage.setItem("NomeFinal", "Joãozinho");
sessionStorage.setItem("Apelido", "Cabrito");
sessionStorage.removeItem("Apelido");
console.log(sessionStorage.getItem("NomeFinal"));

// Podemos armazenar em uma variável
// Quero armazenar a key 'Age' do localStorage

const AgelocalStorage = localStorage.getItem("Age");
console.log(typeof AgelocalStorage);

// Nesse caso irá retornar uma string, devemos usar JSON.parse para retornar o valor original

let numberlocalStorage = JSON.parse(AgelocalStorage);
console.log(`Idade é um: ${typeof numberlocalStorage}`);

// Utilizando agora com objetos

const obj = {
  Nome: "Sofia",
  Tipo: "Especial",
};

// Converte o objeto em uma string

localStorage.setItem("Garota", JSON.stringify(obj));
const Girl = localStorage.getItem("Garota");
console.log(typeof Girl);
