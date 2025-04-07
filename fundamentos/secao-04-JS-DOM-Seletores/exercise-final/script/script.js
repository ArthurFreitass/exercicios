// Feito apenas com JS
// Instruções:
// 1- Adicione a tag h1 com o texto EmpresaTrip - Agência de Viagens como filho da tag body

const body = document.querySelector("body");

let text = "EmpresaTrip - Sua plataforma de investimentos";

const textElement = document.createElement("h1");
textElement.innerText = text;

body.appendChild(textElement);

// 2- Adicione a tag main com a classe main-content como filho da tag body

const main = document.createElement("main");
main.className = "main-content";

body.appendChild(main);

// 3- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const section = document.createElement("section");
section.className = "center-content";

main.appendChild(section);

// 4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

text_P =
  "EmpresaTrip é uma empresa de investimentos focada em transformar objetivos financeiros em realidade.";

const textP_1 = document.createElement("p");

textP_1.innerText = text_P;

section.appendChild(textP_1);

// 5- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const section_2 = document.createElement("section");
section_2.className = "left-content";

main.appendChild(section_2);

// 6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const section_3 = document.createElement("section");
section_3.className = "right-content";

main.appendChild(section_3);

// 7- Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image.
//  Esse elemento deve ser filho do section criado no passo 5

const img = document.createElement("img");
img.className = "small-image";
img.src = "/img/imagem.png";
img.alt = "Imagem aleátoria";

section_2.appendChild(img);

// 8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante.
// Essa lista deve ser filha do section criado no passo 6;

const ul_list = document.createElement("ul");
ul_list.className = "list-ul";

section_3.appendChild(ul_list);

const listText = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

for (let index = 0; index < listText.length; index += 1) {
  let textoElemento = document.createElement("li");
  textoElemento.innerText = listText[index];
  section_3.appendChild(textoElemento);
}

// Adicione 3 tags h3, todas filhas do main criado no passo 2.

const h3s = [
  "Cliente 1 - Guts Berserker",
  "Cliente 2 - Kafka",
  "Cliente 3 - Ligth Yagami",
];

for (let index = 0; index < h3s.length; index += 1) {
  let elementItem = document.createElement("h3");
  elementItem.innerText = h3s[index];
  main.appendChild(elementItem);
}

// Bônus
// Adicione a classe title na tag h1 criada

const h1_Body = body.firstElementChild.nextElementSibling;
h1_Body.className = "title";

// Adicione a classe description nas 3 tags h3 criadas
const allh3 = document.querySelectorAll("h3");
for (let index = 0; index < allh3.length; index += 1) {
  allh3[index].className = "description";
}

// Remova a section criada no passo 5 (aquela que possui a classe left-content) por meio da função .removeChild()

const sectionRemove = document.querySelector(".left-content");
main.removeChild(sectionRemove);

// Centralize a section criada no passo 6 (aquela que possui a classe right-content)

const sectionMargin = document.querySelector(".right-content");
sectionMargin.style.marginRight = "auto";

// Troque a cor de fundo do elemento-pai da section criada no passo 3 (aquela que possui a classe center-content)
//  para a cor verde;

const classSection = document.querySelector(".center-content");
classSection.style.backgroundColor = "green";
