// Como fiquei um tempo sem estudar, esse arquivo js será a respeito de revisão

// Formas de criar variáveis:

let Firstname = 'Arthur'
let variableNumber = 40
let undefined;
let nulo = null

console.log (typeof Firstname)
console.log (typeof variableNumber)
console.log(typeof undefined);
console.log(typeof nulo)

// Let e Const são variáveis de bloco, ou seja não tem valor global

let numberX = 2;
let numberY = 1

if (numberX > numberY) {
    let result = numberX + numberY 
    console.log (result)
}

const pi = 3.14
console.log (pi)


if (pi < 5) {
    const pi = 12
    console.log(pi);
}

console.log (pi)

let test = true

if (test = true) {
   var result_two = 2
   console.log(result_two);
}

console.log (result_two)

// Logo var funciona em qualquer escopo do código

// OPERADORES

let sum = 5+4
console.log(sum);

let multiplication = (5*4)
console.log(multiplication);

let division = (4/2)
console.log(division);

let subtraction = (5-4)
console.log(subtraction);

let mód = (5 % 2)
console.log(mód);

// Incremento

sum += 12
console.log(sum);

// Decremento

subtraction -= 10
console.log(subtraction);
