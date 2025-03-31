// Recuperando elemento através do DOM, e o modificando ao mesmo tempo

const header = document.getElementById("header");

// Mudando a cor de fundo

header.style.backgroundColor = "purple";
header.style.width = "500px";
header.style.margin = "auto";

const title = document.querySelector("h1");
title.style.fontSize = "2rem";
title.style.textAlign = "center";

const text = document.querySelectorAll(".text p");
// A variável text se torna um array
console.log(text[0]);

// Alterando todos os p
for (let index = 0; index < text.length; index += 1) {
  text[index].style.color = "white";
  text[index].style.fontSize = "1.4rem";
}

// Criando e acessando um elemento pai

console.log(title.parentNode);

// Agora acessando os elementos filhos
const section = document.querySelector(".text");
console.log(section.firstElementChild);
console.log(section.lastElementChild);

// Retornando todos os filhos agora
console.log(section.children);

// Retornando os irmãos
console.log(text[2].previousElementSibling);
