/*Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".
Caso num seja um número divisível apenas por 3, a função retorna "fizz".
Caso num seja um número divisível apenas por 5, a função retorna "buzz".
Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.
Caso num não seja um número, a função retorna false.*/

// Importa a função

const myFizzBuzz = require("./js/script");

// Describe

describe("Testes", () => {
  test("Requisito - 1 - Retorno = fizzbuzz", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
  test("Requisito - 2 Retorno = fizz", () => {
    expect(myFizzBuzz(33)).toBe("fizz");
  });
  test("Requisito - 3 Retorno = buzz", () => {
    expect(myFizzBuzz(10)).toBe("buzz");
  });
  test("Requisito - 4 Retorno = num", () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  test("Requisito - 5 Retorno = false", () => {
    expect(myFizzBuzz("5")).toBe(false);
  });
});
