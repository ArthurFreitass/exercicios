// Soma dos primos de 1 a 100
function VerificaPrimo(number) {
  let result = true;
  if (number <= 1) {
    result = false;
    return result;
  } else {
    for (let index = 2; index < number; index += 1) {
      if (number % index == 0) {
        result = false;
        break;
      }
    }
    return result;
  }
}

function SomaPrimos(number) {
  let sum = 0;
  for (let index = 2; index < number; index += 1) {
    if (VerificaPrimo(index)) {
      sum += index;
    }
  }
  return sum;
}

console.log(SomaPrimos(100));
