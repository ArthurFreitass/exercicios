// Recuperando a função

const removeItem = require("./js/script");

// Realizando os testes por meio de um describe

describe("Teste 1 - Verificando chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado", () => {
  test("Verificando se a chamada retorna o Array esperado", () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test(" Teste - 2 Verificando se não retorna o array inicial", () => {
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it("Teste 3 - Verificando se retorna o array inicial", () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
