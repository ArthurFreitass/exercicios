const Return = (a, b) => {
  if (b == undefined) {
    return a;
  } else {
    return a + b;
  }
};

console.log(Return(2, 4));
