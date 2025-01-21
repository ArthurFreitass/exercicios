const phrase_ = "Vamos viver e cantar";

phrase_Array = phrase_.split(" ").join(" ");

function LerArray(words) {
  words = `Em 2025 ${words}`;
  return words;
}

console.log(LerArray(phrase_Array));

// Com o Loop For

const array = ["1 Posição", "2 Posição", "3 Posição"];

function LerArrayFor(leitor) {
  for (let index = 0; index < leitor.length; index += 1) {
    console.log(`A ${leitor[index]}`);
  }
}

LerArrayFor(array);
