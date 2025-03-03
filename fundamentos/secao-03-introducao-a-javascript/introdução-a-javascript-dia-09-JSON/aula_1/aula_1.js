// Criando um objetoJson

const json = '{"nome": "Arthur", "idade": 16, "profissão": "programador"}';

console.log(json);

// Convertendo

const objeto = JSON.parse(json);

console.log(objeto.nome);
