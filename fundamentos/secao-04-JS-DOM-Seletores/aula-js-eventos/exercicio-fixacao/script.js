// Recuperando os elementos

const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-top");

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
firstLi.classList.remove("tech");

// Adiionando a função

secondLi.addEventListener("click", AdicionaClasse);
function AdicionaClasse() {
  secondLi.className = "tech";
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// Adicionando a função

input.addEventListener("keyup", RecebeTexto);
function RecebeTexto() {
  firstLi.innerText = input.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3',
// redirecione para alguma página.

// Adicionando função

myWebpage.addEventListener("dblclick", Redireciona);
function Redireciona() {
  window.open("https://arthurfreitass.github.io/");
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3', altere
// a cor do mesmo.

// Adicionado função

myWebpage.addEventListener("mouseover", Mousecima);
function Mousecima() {
  myWebpage.style.color = "red";
}

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
};

firstLi.addEventListener("dblclick", resetText);
