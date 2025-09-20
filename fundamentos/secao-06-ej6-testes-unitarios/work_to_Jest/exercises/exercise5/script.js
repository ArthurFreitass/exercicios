/*A função hydrate recebe uma string no formato “número bebida” e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água, a fim de evitar ressaca. Exemplo de saída:
// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'
 */

// Função de saída correta

const returnCorrect = (total) => {
  if (total == 1) {
    return `${total} copo de água`;
  }
  return `${total} copos de água`;
};

// Implementando a função

const hydrate = (string) => {
  // Pegando todos os digitos
  const num = /\d+/g;
  const arrayNumbers = string.match(num);
  let totalglassWater = 0;
  // Criando um for para somar todos os números
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    totalglassWater += Number(arrayNumbers[index]);
  }

  return returnCorrect(totalglassWater);
};

// Exportando função

module.exports = hydrate;
