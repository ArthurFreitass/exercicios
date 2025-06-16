// Recupere as informações
const form = document.querySelector("form");
const p = document.getElementById("form-p");
const input = document.getElementById("input-form");
const namePerson = document.getElementById("name");
const randomNumber = document.getElementById("random-number");

// Criando o evento

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  namePerson.innerHTML = `Nome da pessoa a ser sorteada: ${input.value}`;
  randomNumber.innerHTML = `Número sorteado: ${Math.floor(Math.random() * 10)}`;
});
