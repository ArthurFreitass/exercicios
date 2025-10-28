const {
  arrayValue,
  removeValue
} = require('../js/script')

describe("Testando se a função removeValue está removendo os valores", () => {
  test("Testando se é uma função", () => {
    expect(typeof removeValue).toBe("function")
  })
  test("Testando o tamanho do array", () => {
    expect(arrayValue).toHaveLength(4)
  })
  test("Testando se o valor foi removido", () => {
    removeValue(arrayValue, "X1")
    expect(arrayValue).not.toContain("X1")
  })
  test("Testando se contém os valores", () => {
    const newArray = ["BYD", "Volvo", "X1", "Audi"]
    expect(removeValue(newArray, "Volvo")).toContain("X1")
  })
})
