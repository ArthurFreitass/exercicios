let compras = ["suco", "feijão", "carne"];

// salvando o valor de um array em outra variável

// Alterando o valor de um vetor

compras[1] = "refrigerante";

const vetor = compras[1];

console.log(vetor);

// Usando métodos no array

compras.push(true);
compras.unshift("primeiro");
compras.pop();
compras.shift();

// Nesse caso os metódos pop e shift anularam o push e o unshift

console.log(compras);

// Ver o tamango do array com .length

console.log(compras.length);
