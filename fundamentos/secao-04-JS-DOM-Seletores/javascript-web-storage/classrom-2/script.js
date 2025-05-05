// Converta um objeto para string
// Recupere-o para o formato original

const objeto = {
  Raça: "Humana",
  Idade: 20000,
};

sessionStorage.setItem("Espécie", JSON.stringify(objeto));

// Ao estado original

const recuperandObjeto = JSON.parse(sessionStorage.getItem("Espécie"));
console.log(recuperandObjeto);
