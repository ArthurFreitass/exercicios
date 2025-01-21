const balance = 100;

function sumBalance(value) {
  value += 100;
  return value;
}

function subBalance(value) {
  return balance - value;
}

function multBalance(value) {
  return balance * value;
}

function divBalance(value) {
  return balance / value;
}

console.log(divBalance(10));
