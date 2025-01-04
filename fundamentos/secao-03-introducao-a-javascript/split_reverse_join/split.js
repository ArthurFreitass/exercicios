// o split transforma strings em Arrays

let message = "O Arthur é um perdedor, Super Arthur, Omen";

let newMessage = message.split(",").reverse();

// O split separou cada elemento antes e depois da vírgula como um array, e o join, marcou a vírgula com um _

console.log(newMessage[2]);

// Transformou a string em um array
