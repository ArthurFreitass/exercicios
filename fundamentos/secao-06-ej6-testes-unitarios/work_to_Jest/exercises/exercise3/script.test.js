const { mapString, encode, decode } = require("./script");

describe("Requisito 1 - Testando se encode e decode são funções", () => {
  test("Verifica encode", () => {
    expect(typeof encode).toBe("function");
  });

  test("Verifica decode", () => {
    expect(typeof decode).toBe("function");
  });
});

describe("Requisito 2 - Verificando as saídas", () => {
  it("Saída correta de encode", () => {
    expect(encode("a e i o u")).toBe("1 2 3 4 5");
  });

  it("Saída correta de decode", () => {
    expect(decode("1 2 3 4 5")).toBe("a e i o u");
  });
});

describe("Requisito 3 - Testando se caracteres não mapeados permanecem", () => {
  test("Verifica conversão do encode", () => {
    expect(mapString({ a: 1, e: 2, i: 3, o: 4, u: 5 }, "Cachorro")).toBe(
      "C1ch4rr4"
    );
  });

  test("Verifica conversão do decode", () => {
    expect(
      mapString(
        { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" },
        "cachorro e 1234567"
      )
    ).toBe("cachorro e aeiou67");
  });
});

describe("Requisito 4 - Testando comprimento da string", () => {
  test("Número de caracteres - encode", () => {
    expect(encode("arte").length).toBe(4);
  });

  test("Número de caracteres - decode", () => {
    expect(decode("1rt2").length).toBe(4);
  });
});
