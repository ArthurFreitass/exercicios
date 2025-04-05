// Primeira forma de fazer

// Criando o texto do elemento

const text = "Minha primeira <div> - Funcionou";

// Acessando o elemento pai

const parent = document.querySelector("#parent");

// Usando a função create element para adicionar ao arquivo HTML

let elementItem = document.createElement("p");

elementItem.innerText = text;

// Adicionando ao elemento pai

parent.appendChild(elementItem);

// Segunda forma de fazer (Mais direta)

// Cria o elemento

let text_2 = document.createElement("p");

// Adiciona o texto

text_2.innerText = "Meu primeiro <p>";

// Recupera o elemento pai
const parent_2 = document.querySelector("#parent2");

// Adiciona ao HTML
parent_2.appendChild(text_2);
