// Importando a função

const { describe } = require("yargs");
const sum = require("./script");

test("Verifica se o retorno da função é válido.", () => {
  expect(sum(10, 2)).toEqual(12);
});

test("Verifica a diferença entre 5 e 5 com aspas", () => {
  expect(5).toEqual("5");
});
