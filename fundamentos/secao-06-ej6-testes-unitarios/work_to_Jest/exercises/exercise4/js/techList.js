/*A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome.
 Para cada tecnologia no array, a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
    {
  tech: 'nomeTecnologia',
  name: name,
    }
*/

// Função se a lista de tecnologia estiver vazia

const listEmpty = (arrayList) => {
  if (arrayList.length == 0) {
    throw new Error("Vazio!");
  }
  return arrayList;
};

// Criando função

const techList = (nameTechArray, stringName) => {
  try {
    listEmpty(nameTechArray);
    const obj = [];
    for (let index = 0; index < nameTechArray.length; index += 1) {
      obj.push({ tech: nameTechArray[index], name: stringName });
    }
    obj.sort((a, b) => a.tech.localeCompare(b.tech));
    return obj;
  } catch (error) {
    return error.message;
  }
};

module.exports = techList;
