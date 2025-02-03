// Crie uma função que recebe uma string e retorna o número de vogais nela.

function ContadorVogais(word_) {
  let word_Lower = word_.toLowerCase();
  let sum = 0;
  let word_Array = word_Lower.split("");
  for (let index = 0; index < word_Array.length; index += 1) {
    switch (word_Array[index]) {
      case "a":
        sum += 1;
        break;
      case "e":
        sum += 1;
        break;
      case "i":
        sum += 1;
        break;
      case "o":
        sum += 1;
        break;
      case "u":
        sum += 1;
        break;
    }
  }
  return sum;
}

console.log(ContadorVogais("Arthur"));
