let part_Move = "CAVAL".toLowerCase();
let response;

switch (part_Move) {
  case "peão":
    console.log("Se move para frente e captura nas diagonais.");
    break;

  case "bispo":
    console.log("Se move nas diagonais");
    break;

  case "torre":
    console.log("Se move na horizontal e vertical");
    break;

  case "dama":
    console.log("Se move em todas as direções");
    break;

  case "cavalo":
    console.log("Se move em forma L");
    break;

  default:
    console.log("A peça de xadrez dada é inválida");
}
