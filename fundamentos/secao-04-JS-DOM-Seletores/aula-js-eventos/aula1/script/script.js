// Criando um evento de linha HTML

const whenClicked = () => {
  let p = document.getElementById("p");
  p.innerText = "Você foi hackeado";
};

// Testando como funciona o window.onload e Assíncronidade
window.onload = Entrega;

function Entrega() {
  alert("A entrega está a caminho");
  alert("A entrega chegou");
}

alert("Pedido feito");
