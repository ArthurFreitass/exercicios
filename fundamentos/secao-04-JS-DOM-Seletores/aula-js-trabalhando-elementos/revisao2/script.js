// Usar o createElement
// Criar uma tag Main

const Main = document.createElement("main");
Main.id = "main";

// Recuperar o elemento pai

const body = document.querySelector("body");

body.appendChild(Main);

Main.innerText = "Receba";

// Criando um filho para Main

const section = document.createElement("section");
section.className = "section-classes";

Main.appendChild(section);

section.innerHTML = "<em>Revision</em>";

// Removendo esse filho

Main.removeChild(section);
