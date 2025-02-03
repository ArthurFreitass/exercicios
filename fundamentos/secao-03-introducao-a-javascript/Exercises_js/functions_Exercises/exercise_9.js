// Crie uma função que verifique se um número inteiro é primo ou não.

const Primo = (number) => {
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
  }
  return "O número é primo? " + result;
};

console.log(Primo(2));
