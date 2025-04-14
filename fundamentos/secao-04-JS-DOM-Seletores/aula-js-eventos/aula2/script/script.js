// Codígo sem usar o AddEventListener

function pclicado() {
  let p = document.getElementById("p-one");
  p.innerText = "Fui clicado";
  p.style.backgroundColor = "Crimson";
  p.style.width = "100px";
}

// Usando o AddEventListener

// Recuperando o elemento

const h3_Click = document.getElementById("h3-click");

// Adicionando o evento do click

h3_Click.addEventListener("click", RecebeuClick);
h3_Click.addEventListener("mouseover", MouseEmCima);

function RecebeuClick(EventoOrigem) {
  // O nome EventoOrigem não muda nada, apenas recebe o evento como parâmetro

  console.log(EventoOrigem.type);
}

// Recuperando elemento

const pMouseOver = document.getElementById("removed-p");

// Adicionando o evento

pMouseOver.addEventListener("mouseover", MouseEmCima);

pMouseOver.addEventListener("mouseleave", MouseSaiu);

function MouseEmCima(evento) {
  console.log("Mouse em cima");
  pMouseOver.style.backgroundColor = "pink";
  console.log(evento.target);
}

function MouseSaiu() {
  console.log("Mouse saiu");
  pMouseOver.style.backgroundColor = "violet";
}
