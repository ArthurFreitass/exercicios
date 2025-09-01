/*A função studentRegister() recebe dois parâmetros: name, nome da pessoa que quer começar a fazer as aulas; e age, idade da pessoa no momento do cadastro.
Caso a função não receba name ou idade (ou ambos), lance uma exceção com a mensagem 'Todas as informações são necessárias'.
Caso a função receba o nome e uma idade inferior a 18 anos, lance uma exceção com a mensagem 'Ops, infelizmente nesse momento você não pode fazer as aulas'
Caso a função receba o nome e uma idade igual ou superior a 18 anos, retorne a string: 'Nome, seja bem-vindo(a) a autoescola!'*/

// Execeção falta de parâmetros

// função

const parametersUndefined = (value1, value2) => {
  if (value1 == undefined || value2 == undefined) {
    throw new Error("Todas as informações são necessárias.");
  }
  return;
};

// Função idade

const studentAge = (age) => {
  if (age < 18) {
    throw new Error(
      "Ops, infelizmente nesse momento você não pode fazer as aulas."
    );
  }
  return age;
};

// Função mensagem

const message = (name, age) => {
  if (age >= 18) {
    return `${name}, seja bem-vindo(a) a autoescola!`;
  }
};

// Verificador de valores

const valueCheck = (value1) => {
  let age = parseFloat(value1);
  if (isNaN(age)) {
    throw new Error("Digita um valor válido meu amigo.");
  }
  return true;
};

const studentRegister = (name, age) => {
  parametersUndefined(name, age);
  valueCheck(age);
  studentAge(age);
  return message(name, age);
};

console.log(studentRegister("Michael Kaiser", 10));
