// Criar um algoritmo que diga a soma dos primos de 1 a N primeiros números primos;

function VerificaPrimos(number_) {
  let result = true;
  if (number_ <= 1) {
    result = false;
  } else {
    for (let index = 2; index < number_; index += 1) {
      if (number_ % index == 0) {
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
    if (VerificaPrimos(index)) {
      sum += index;
    }
  }
  return sum;
}

console.log(SomaPrimos(100));
