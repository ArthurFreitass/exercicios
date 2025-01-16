const number_ = 5;
let simbol_ = "*";

if (number_ > 1) {
  for (let index = 1; index <= number_; index += 1) {
    let linha = "";

    for (let i = 0; i < index; i += 1) {
      linha += simbol_;
    }
    console.log(linha);
  }
}
