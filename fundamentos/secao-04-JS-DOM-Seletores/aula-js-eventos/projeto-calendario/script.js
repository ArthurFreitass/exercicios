// Adicionar dentro da seção o número de dias do mês
// Recuperar a seção

const firstSection = document.getElementById("seção-dias");

// Adicionar os dias da semana

const diasSemana = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];
const AdicionaData = () => {
  for (let index = 0; index < diasSemana.length; index += 1) {
    const divSemana = document.createElement("div");
    divSemana.className = "dia-real";
    divSemana.innerText = diasSemana[index];
    firstSection.appendChild(divSemana);
  }
};

AdicionaData();

// Adicionar cada dia do mês de junho

function AdicionaDias() {
  for (let index = 1; index <= 30; index += 1) {
    // Criar o elemento dia através de uma div
    const divDias = document.createElement("div");
    divDias.className = "div-dias";
    divDias.innerText = index;
    firstSection.appendChild(divDias);
  }
}

AdicionaDias();

// Recuperar dias 19 e 20

const divDias = document.querySelectorAll("#seção-dias .div-dias");
dia19 = divDias[18];
dia20 = divDias[19];

function Feriados() {
  dia19.style.background = "#F39F5A";
  dia20.style.background = "#F39F5A";
}

Feriados();

// Adicionar um evento que envia para a página do feriado

dia19.addEventListener("dblclick", Linkando);
function Linkando() {
  window.open("https://www.significados.com.br/corpus-christi/");
}

dia20.addEventListener("dblclick", Linkando);

dia19.style.cursor = "pointer";
dia20.style.cursor = "pointer";
