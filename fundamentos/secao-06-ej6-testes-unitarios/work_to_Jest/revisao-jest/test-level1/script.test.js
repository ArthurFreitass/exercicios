// Importando as funções

const {
  sum,
  itPair,
  biggestNumber,
  reverseString,
  countCharacter,
} = require("./script");

// Aplicando os devidos testes

describe("Testa se os retornos das funções é correto", () => {
  it("Testa o retorno da função sum", () => {
    expect(5).toBe(sum(2, 3));
  });
  it("Testa o retorno da função itPair", () => {
    expect(false).toBe(itPair(3));
  });
  it("Testa o retorno da função biggestNumber", () => {
    expect(10).toBe(biggestNumber(9, 10));
  });
  it("Testa o retorno da função reverseString", () => {
    expect("ardep").toBe(reverseString("pedra"));
  });
  it("Testa o retorno da função countCharacter", () => {
    expect(7).toBe(countCharacter("no-code"));
  });
});
