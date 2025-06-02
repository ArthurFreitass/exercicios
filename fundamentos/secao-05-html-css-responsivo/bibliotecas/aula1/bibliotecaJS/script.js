// Criando uma variável que receba a data atual

// Sem formatar
const currentDate = new Date();
console.log(currentDate);

// Formatando agora
const { format } = require("date-fns/format");
const dateFormated = format(currentDate, "dd/MM/yyyy");
console.log(dateFormated);
