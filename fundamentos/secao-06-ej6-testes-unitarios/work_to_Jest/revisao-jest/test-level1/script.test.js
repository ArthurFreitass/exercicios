// Importando as funções

const {
  sum,
  itPair,
  biggestNumber,
  reverseString,
  countCharacter,
  checkNumber,
  emptyString,
  verifyindexArray,
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

describe("Testa se as mensagens de erro estão corretas", () => {
    test("Checa se checkValue retorna: Type one number", () => {
        expect(() => checkNumber("Wesley quer todos homens negões").toThrow("Type one number"))
    })
    test("Checa se emptyString retorna: Type one character", () => {
        expect(() => emptyString("").toThrow("Type one character"))
    })
    test("Checa se verifyindexArray retorna: Type two or more characters", () => {
        expect(() => verifyindexArray("a").toThrow("Type two or more characters"))
    })
})
