// Tipos de variáveis em JS

let year = 2024; // number
let caracter = 'Arthur Freitas'; // string
let real = false; // booleano
let indefinido; //indefinido
let nulo = null; // nulo

console.log(year)
console.log(caracter)
console.log(real)
console.log(indefinido)
console.log(nulo)

const teste = 'JS > ALL';
console.log (teste);

// Const é imutável

if (true) {
    var xablau = 10
    console.log(xablau)
}

console.log(xablau)

//Var tem escopo global

if (3>2) {
    let pick =  15
    console.log(pick)
}


// let não tem escopo global e pode ter seus valores alterados.

let patientId = '50';
let isEnrolled = true;
let patientEmail = 'ana@email.com';

console.log(typeof patientId); // number
console.log(typeof patientAge);