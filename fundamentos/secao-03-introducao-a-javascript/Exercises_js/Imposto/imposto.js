// Área para a declaração de variáveis

let salary_ = 6000;
let tax_Inss;
let tax_IR;

// IF - ELSE

if (salary_ > 0 && salary_ <= 1556.94) {
  tax_Inss = (salary_ * 8) / 100;
  tax_IR = (salary_ * 0) / 100;
} else if (salary_ >= 1556.95 && salary_ <= 2594.92) {
  tax_Inss = (salary_ * 9) / 100;
  if (salary_ >= 1903.99 && salary_ <= 2826.65) {
    tax_IR = (salary_ * 7.5) / 100 - 142.8;
  } else {
    tax_IR = 0;
  }
} else if (salary_ >= 2594.93 && salary_ <= 5189.82) {
  tax_Inss = (salary_ * 11) / 100;
  if (salary_ >= 2826.66 && salary_ <= 3751.05) {
    tax_IR = (salary_ * 15) / 100 - 354.8;
  } else if (salary_ >= 3751.06 && salary_ <= 4664.68) {
    tax_IR = (salary_ * 22.5) / 100 - 636.13;
  } else if (salary_ > 4664.68) {
    tax_IR = (salary_ * 27.5) / 100 - 869.36;
  }
} else if (salary_ > 5189.82) {
  tax_Inss = 570.88;
  if (salary_ > 4664.68) {
    tax_IR = (salary_ * 27.5) / 100 - 869.36;
  }

  // SAÍDA
} else {
  console.log("Error: Valor dado como salário inválido.");
}

console.log(
  "De acordo com o meu salário que é de: R$ " +
  salary_ +
  " de INSS minhha alíquota é de: R$ " +
  tax_Inss
);
console.log("e meu IR  é de: R$ " + tax_IR);
