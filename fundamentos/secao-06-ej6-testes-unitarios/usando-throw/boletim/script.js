/*Implemente uma lógica que verifique a média da pessoa estudante. Para isso, considere as seguintes informações:
Escreva uma função que receba, como parâmetro, 4 valores do tipo number. 
Caso o valor recebido como parâmetro não seja do tipo number, lance uma exceção.
Lembre-se de quebrar problemas grandes em partes menores, a fim de facilitar sua manutenção e seu entendimento.*/

// Recuperando os valores

const inputName = document.getElementById("name-input");
const notesUser = document.querySelectorAll("div input");
const button = document.querySelector("button");
const message1 = document.querySelector("#first-message");
const message2 = document.querySelector("#second-message");

// Criando as funções

const checkName = (name) => {
  const letters = /[a-zA-Z]/;
  if (letters.test(name)) {
    return name;
  }
  throw new Error("Digite um nome válido.");
};

const checkNumber = (array) => {
  // Criar uma variável para receber o array
  const validNotes = [];
  if (array.length !== 4) {
    throw new Error("Digite um número de notas válido.");
  }

  // Verificar cada valor do array

  for (let index = 0; index < array.length; index += 1) {
    let num = parseFloat(array[index].value);
    if (isNaN(num) || num < 0) {
      throw new Error("Digite um valor válido.");
    }
    validNotes.push(num);
  }
  return validNotes;
};

// Função de soma

const sum = (array) => {
  let sumNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    sumNumber += array[index];
  }
  return sumNumber;
};

// Função da média

const average = (sum) => {
  return sum / 4;
};

// Parte principal

const studentMedia = (name, numbers) => {
  try {
    const validName = checkName(name);
    const notes = checkNumber(numbers);
    const averageStudent = average(sum(notes));
    message1.innerHTML = `O nome do estudante é ${validName}`;
    message2.innerHTML = `A sua média é de cerca de: ${averageStudent}`;
  } catch (error) {
    message2.innerHTML = error.message;
  } finally {
    document.querySelector("#name-id").value = "";
    document.querySelector("#number-id").value = "";
  }
};

button.addEventListener("click", () => {
  const name = inputName.value;
  const notes = notesUser;
  studentMedia(name, notes);
});
