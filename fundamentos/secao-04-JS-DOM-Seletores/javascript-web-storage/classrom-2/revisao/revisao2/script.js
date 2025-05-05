// Recupere os elementos

const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("frases");

// Após recuperar os elementos, devo adicionar a frase ao clicar no botão

function AddFrase() {
  const li = document.createElement("li");
  li.innerText = input.value;
  ul.appendChild(li);
}

// Devo agora adicionar o evento

button.addEventListener("click", AddFrase);

// Como posso Adicionar cada frase ao localStore

storage.clear();
