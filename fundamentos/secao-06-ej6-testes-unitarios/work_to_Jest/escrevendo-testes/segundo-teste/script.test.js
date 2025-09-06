// Importar as funções

const {
  greetingMessage,
  loginErrorMessage,
  verifyCredentials,
} = require("./loginValidation");

/*Mudamos a informação daquele objeto de loginValidation*/

describe("Verificando função verifyCrendetials, alterando as informações do objeto", () => {
  const user = {
    userName: "Joãozinho",
    password: 924234,
  };

  // Chamando agora os antigos testes

  it("Verificando se está correto dependendo do usuário e da senha", () => {
    expect(verifyCredentials(user)).toBe(
      "Hello, Joana! Que bom ter você de volta"
    );
  });

  it("Verificando se está correto dependendo do usuário e da senha", () => {
    expect(greetingMessage("Lucas")).toBe(
      "Hello Lucas! Que bom ter você de volta"
    );
  });

  it("Verificando se está correto dependendo do usuário e da senha", () => {
    expect(loginErrorMessage("Bob")).toBe(
      "Pessoa usuária Bob não encontrada, tente novamente!"
    );
  });
});
