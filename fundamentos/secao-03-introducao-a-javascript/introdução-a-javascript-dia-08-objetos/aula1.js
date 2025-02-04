// Objetos em JS

const Pessoa = {
  Age: 16,
  Name: "Arthur",
  Sex: "Masculino",
};

console.log(Pessoa.Age);

// Objeto dentro de outro objeto

const Carro = {
  Marca: "Corolla",
  Tipo: "Sedan",
  Motorização: {
    Cilindrada: 2000,
    Cambio: "Manual",
  },
};

console.log(Carro.Motorização);

console.log();

console.log(Carro.Motorização.Cambio);

// Objeto dentro de objeto dentro de objeto

const Casa = {
  País: "Brasil",
  Estado: "MG",
  Localização: {
    Cidade: "Vespasiano",
    LocalExato: {
      Bairro: "Gávea",
      Numero: 93,
    },
  },
};

console.log(Casa.Localização.LocalExato.Numero);
