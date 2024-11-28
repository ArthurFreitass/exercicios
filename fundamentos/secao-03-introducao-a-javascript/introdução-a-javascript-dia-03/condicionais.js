const age = 16;
let message;

if (age >= 18) {
    message = ("Posso tirar carteira de motorista.");
} else if (age < 18) {
    message = ("Ainda não posso tirar carteira de motorista.");
};

console.log (message)