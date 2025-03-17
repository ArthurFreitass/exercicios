// Alterando o texto no getClassName
document.getElementsByClassName("lenda")[0].innerText = "Super";

// Alterando todos as tags

let jogadores = document.getElementsByClassName("lenda");

for (let index = 0; index < jogadores.length; index += 1) {
  document.getElementsByClassName("lenda")[index].innerText = "Cristianoooo";
}
