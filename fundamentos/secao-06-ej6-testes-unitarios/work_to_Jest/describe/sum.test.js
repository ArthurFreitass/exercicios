const sumArray = require("./js/script");

describe("Requisito 1", () => {
  it("Verifica se a função soma de arrays funciona", () => {
    expect(true).toEqual(sumArray(["Mbappé", 20, "Henry", 10, "Bellingham"]));
  });
});
