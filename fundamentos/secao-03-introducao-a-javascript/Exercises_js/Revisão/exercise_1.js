// Criar uma função que verifica se um número é impar ou par

function Impa_Par(number) {
  let resultado = true;
  if (number % 2 == 0) {
    return `O número é par? ${resultado}`;
  } else {
    resultado = false;
    return `O número é par? ${resultado}`;
  }
}

console.log(Impa_Par(11));
