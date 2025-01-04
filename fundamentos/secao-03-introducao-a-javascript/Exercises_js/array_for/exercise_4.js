// Criando variável

let numberUser_ = 5;
let linhas;
// Loop de repetição

if (numberUser_ > 1) {
  for (let index = 1; index <= numberUser_; index += 1) {
    linhas = "";
    for (let i = 1; i <= numberUser_; i += 1) {
      linhas += "*";
    }
    console.log(linhas);
  }
}
