// Área para declaração de variáveis

let word = "";
let word_Contrary;
let message = "";
let conte = 1;

// Loop de repetição e lógica

for (let index = 0; index < conte; index += 1) {
  word = "evaristo";
  word_Contrary = word.split("").reverse().join("");
  message = word_Contrary;
}

// Saída

console.log(message);
