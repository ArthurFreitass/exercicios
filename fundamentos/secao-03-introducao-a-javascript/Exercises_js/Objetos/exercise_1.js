const reader = {
  name: "Julia",
  lastName: "Pessoa",
  age: 21,
  favoriteBooks: [
    {
      title: "O Senhor dos Anéis - a Sociedade do Anel",
      author: "J. R. R. Tolkien",
      publisher: "Martins Fontes",
    },
    {
      title: "Harry Potter e o Prisioneiro de Azkaban",
      author: "JK Rowling",
      publisher: "Rocco",
    },
  ],
};

let message = `O livro favorito de ${reader.name} ${reader.lastName} se chama '${reader.favoriteBooks[0]["title"]}\n'`;
console.log(message);

let newMessage = `${reader.name} tem ${reader.favoriteBooks.length} livros favoritos`;
console.log(newMessage);
