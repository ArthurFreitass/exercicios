function convert(value) {
  number = parseFloat(value);
  if (isNaN(number)) {
    return;
  } else {
    return number + " É um número";
  }
}

console.log(convert("a"));
