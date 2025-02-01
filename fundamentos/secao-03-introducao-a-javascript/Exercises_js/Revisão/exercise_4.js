// Verifica se o número é Primo

console.log("VERIFICADOR DE PRIMOS\n");

function VerificaPrimo(number) {
  let result = true;
  if (number <= 1) {
    result = false;
    return result;
  } else {
    for (let index = 2; index < number; index += 1) {
      if (number % index == 0) {
        result = false;
      }
    }
    return result;
  }
}

console.log(VerificaPrimo(10));
