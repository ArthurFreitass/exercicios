// Tudo será feito utilizando apenas JavaScript
// Recuperando a página

const body = document.querySelector("body");
body.style.background = "#AD49E1";

// Crie um h3 com js

const firsth3 = document.createElement("h3");
firsth3.innerText = "Conteúdo que será passado";
body.appendChild(firsth3);

// Criar um evento que quando o mouse é passado cria um alerta

firsth3.addEventListener("mouseover", MousePassou);
function MousePassou(evento) {
  firsth3.style.background = "#CF0F47";
  firsth3.style.width = "13em";
  console.log(evento.target);
  console.log(evento.type);
}

// Adicionar um p, e colocar texto no mesmo

const firstP = document.createElement("p");
firstP.innerText =
  "JavaScript é uma linguagem de programação de script de alto nível, amplamente utilizada para adicionar interatividade e dinamismo às páginas da web, além de ser usada em ambientes de back-end através de ferramentas como Node.js. É uma linguagem interpretada, o que significa que não requer compilação, e é conhecida por sua flexibilidade e capacidade de manipulação do HTML e CSS diretamente no navegador. ";

body.appendChild(firstP);

// Criar um evento de quando clicado duas vezes alterar o background

firstP.addEventListener("dblclick", ClicarDuas);
function ClicarDuas() {
  firstP.innerText = "Fui clicado duas vezes";
  firstP.style.background = "#750d37";
  firstP.style.width = "7em";
  firstP.style.color = "white";
}

// Evento que ocorre quando a página carregar

window.addEventListener("load", Carregado);
function Carregado() {
  window.onload = alert("Carregou");
}

// Adicionar um input com efeito de alterar o contéudo do firsth3

const firstInput = document.createElement("input");
firstInput.placeholder = "Digite algum texto aqui";
body.appendChild(firstInput);

firstInput.addEventListener("keyup", AlteraTexto);
function AlteraTexto() {
  firsth3.innerText = firstInput.value;
}

// Criar um botão que quando clicado envia o usuário para outra página

const firstBtn = document.createElement("button");
firstBtn.innerText = "Clique aqui";
body.appendChild(firstBtn);

firstBtn.addEventListener("click", MudarPágina);
function MudarPágina() {
  window.location.href = "https://www.youtube.com/";
}
