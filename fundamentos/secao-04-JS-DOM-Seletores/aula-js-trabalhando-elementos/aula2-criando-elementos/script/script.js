// Crie um array para adicionar as informações

let sun = [
  "Produção de vitamina D, que ajuda a manter os ossos e dentes saudáveis",
  "Combate de doenças da pele relacionadas à imunidade, como psoríase, vitiligo ou dermatite atópica",
  "Melhora da saúde ocular, prevenindo contra diversas doenças, como pterígio e degeneração macular ",
];

// Pegue o elemento pai no DOM
const fatherSun = document.querySelector("#add");

// Loop for para percorrer o sun

for (let index = 0; index < sun.length; index += 1) {
  // Criando o elemento do array

  let beneficio = sun[index];

  // Criando no HTML
  let elementoItem = document.createElement("li");

  // Colocando o texto
  elementoItem.innerText = beneficio;

  console.log(elementoItem);

  // Adicionando ao HTML

  fatherSun.appendChild(elementoItem);
}
