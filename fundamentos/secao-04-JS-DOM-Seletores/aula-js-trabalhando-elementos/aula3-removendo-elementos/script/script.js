// Removendo um elemento estático

const father = document.querySelector(".header");

father.removeChild(father.firstElementChild);

// Removendo um elemento dinâmico na forma de um array

const ul = document.getElementById("father");

let text_ul = ["HTML", "CSS", "JS"];
let li_array = [];

for (let index = 0; index < text_ul.length; index += 1) {
  let list = text_ul[index];
  let createElement = document.createElement("li");
  createElement.innerText = list;
  ul.appendChild(createElement);
  li_array.push(createElement);
}

for (let index = 0; index < li_array.length; index += 1) {
  ul.removeChild(li_array[index]);
}

// Caso queira que seja apenas um elemento

textoElemento = "Arthur is the best";

createElement = document.createElement("li");

createElement.innerText = textoElemento;

ul.appendChild(createElement);

// Removendo

ul.removeChild(createElement);
