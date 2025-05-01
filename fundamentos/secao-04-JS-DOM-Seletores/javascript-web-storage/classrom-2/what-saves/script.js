// Demostrando exemplo de coisas que podem ser salvas

const storage = localStorage;
storage.clear();

const Garota = {
  Nome: "S",
  Idade: 16,
  Definição: "Perfeita",
};

storage.setItem("MyGirl", JSON.stringify(Garota));
console.log(storage.getItem("MyGirl"));

// Recuperando obj

let Recupera_storage = JSON.parse(storage.getItem("MyGirl"));
console.log(Recupera_storage);

// exemplos com arrays

let array = ["Little Girl", "Beautiful Girl"];

storage.setItem("Características", JSON.stringify(array));

// Recuperando o array

let Recupera_array = JSON.parse(storage.getItem("C aracterísticas"));
console.log(Recupera_array);
