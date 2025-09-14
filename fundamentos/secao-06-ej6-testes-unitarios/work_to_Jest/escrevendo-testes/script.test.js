// Recuperando o módulo lançado

const sum = require("./js/script");

// Criando o test

test("Verifica a multiplicação entre dois números", () => {
  expect(sum(10, 10)).toEqual(1);
});
