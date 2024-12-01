// Treino do operador lógico (AND)

const real = true;
const Isfalse = true;
let message = '';

message = (real === true && Isfalse === false) && 'Tudo ok!';

console.log (message)

const number1 = 2;
const number2 = 5;
let message_1;

message_1 = (number2 > number1 && number1 != number2) &&  'Será verdadeiro'; 

console.log(message_1)

// Treino do operador lógico (OR)

const real_1 = true
const false_ = false
let retorno;

retorno = (real_1 === true || false_ === true) && 'Teste OR'

console.log (retorno)

// Treino com duas expressões

const sair = true;
const nSair = false;
let retorno_2;

if ((sair === false && nSair === true) || (sair === true && nSair === false)) {
    retorno_2 = 'Verdadeiro'
} else {
    retorno_2 = 'Falso'
}

console.log (retorno_2)

const goToSP = true;
const goToGO = false;

if ((goToSP === false && goToGO === false) || (goToSP === false || goToGO === true)) {
  console.log('Eu fui para apenas um dos lugares.');
} else {
  console.log('Eu fui para os dois, ou para nenhum.');
}

// Operador Não (NOT

console.log(!(2 + 2) === 4);

const ichigo = 'Mais beress'

console.log(!ichigo)

console.log(!null)

console.log(!undefined)