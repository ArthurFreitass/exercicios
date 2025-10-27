// Exportando
const { array, newPosition } = require("../script");

describe("Requisito 1", () => {
  test("A função adiciona um novo valor para o Array", () => {
    newPosition("Arthur");
    newPosition("Evaristo");
    // toContain verifica se um array contém um determinado item
    expect(array).toContain("Arthur");
    expect(array).toHaveLength(2);
    // Usando o not
    expect(array).not.toContain("Joaquim");
  });
});

describe("Aprendendo o toHaveProperty", () => {
  const createUser = (firstName, lastName) => {
    const user = {
      email: (firstName + "_" + lastName + "@example.com").toLowerCase(),
      password: Math.floor(Math.random() * 100000000),
    };
    return user;
  };

  test("Cria email e senha", () => {
    const user = createUser("Mona", "Lisa");
    // toHaveProperty verifica se tem uma propriedade e um valor
    expect(user).toHaveProperty("email", "mona_lisa@example.com");
    expect(user).toHaveProperty("password");
  });
});

describe("toThrow", () => {
  test("Utilizando Jest em fluxos de exceções", () => {
    // Criando uma função que verifica se o número é ímpar
    const oddNumber = (num) => {
      if (typeof num !== "number") {
        throw new Error("Type one number");
      }
      if (num % 2 != 0) {
        return `is odd`;
      }
      return `is pair`;
    };

    // Testando se tem retorno correto
    expect(oddNumber(3)).toBe("is odd");
    // Verifica se o erro é lançado
    expect(() => {
      oddNumber();
    }).toThrow();
    // Verificando a mensagem do erro
    expect(() => {
      oddNumber();
    }).toThrow(new Error("Type one number"));
  });
});
