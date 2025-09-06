const sum = (num1, num2) => num1 + num2;

test("sums two three", () => {
  expect(sum(2, 3)).toEqual(5);
});
