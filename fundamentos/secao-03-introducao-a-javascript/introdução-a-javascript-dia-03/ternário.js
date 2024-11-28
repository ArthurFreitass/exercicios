const climate = 30;
let message;
const chuva = 'Sim';
let _message_1;

message = climate >= 30 ? "tá fazendo calor" : "tá fresco";
console.log(`À temperatura é de ${climate} graus, e ${message}.`);

_message_1 = chuva === 'Sim' && 'Está chovendo';

console.log(_message_1);
