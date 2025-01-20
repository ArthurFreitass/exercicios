// Área para a declaração de variáveis

const message = "Vamos viver e cantar";

let message_Array = message.split("").;

let vowel_Counter = 0;

// Loop e lógica

for (let index = 0; index < message.length; index += 1) {
  if (message_Array[index] == "a") {
    vowel_Counter += 1;
  } else if (message_Array[index] == "e") {
    vowel_Counter += 1;
  } else if (message_Array[index] == "i") {
    vowel_Counter += 1;
  } else if (message_Array[index] == "o") {
    vowel_Counter += 1;
  } else if (message_Array[index] == "u") {
    vowel_Counter += 1;
  }
}
// Saída

console.log(`O número de vogais é ${vowel_Counter}`);
