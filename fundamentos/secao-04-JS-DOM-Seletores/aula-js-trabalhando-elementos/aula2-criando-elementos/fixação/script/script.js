// PEGANDO O ELEMENTO PAI

const parent = document.getElementById("pai");

// Criando o elemento irmão

const sectionBrother = document.createElement("section");
sectionBrother.innerText = "Adicionado";

// Adicionando ao HTML

parent.appendChild(sectionBrother);

// Verificando se funcionou

const elementWhere = document.getElementById("elementoOndeVoceEsta");
console.log(
  elementWhere.nextElementSibling.nextElementSibling.nextElementSibling
);

// Criando filho do elementoOnde

const h1 = document.createElement("h1");
h1.innerHTML = "<strong>Sou filho primário</strong>";

elementWhere.appendChild(h1);

// Saída

console.log(elementWhere.children);

// Criando filho para primeiroFilhodoFilho

const son_son = elementWhere.firstElementChild;

let li = document.createElement("li");
li.innerText = "FILHO DO FILHO DO FILHO";

son_son.appendChild(li);

// Acessando terceiro filho a partir do filho anterior

console.log(son_son.parentNode.nextElementSibling);

// Exercício finalizado
