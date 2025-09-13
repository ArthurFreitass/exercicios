const clients = [
  {
    name: "João da Silva",
    age: 28,
    email: "joao.silva@gmail.com",
    phone: "(11) 5555-5555",
    address: {
      street: "Rua dos Lírios",
      number: 123,
      neighborhood: "Jardim Primavera",
      city: "São Paulo",
      state: "SP",
      cep: "01234-567",
    },
  },
  {
    name: "Maria Souza",
    age: 35,
    email: "maria.souza@hotmail.com",
    address: {
      street: "Rua dos Cravos",
      number: 456,
      neighborhood: "Copacabana",
      city: "Rio de Janeiro",
      state: "RJ",
      cep: "12345-678",
    },
  },
  {
    name: "Pedro Oliveira",
    age: 42,
    email: "pedro.oliveira@gmail.com",
    address: {
      street: "Rua das Margaridas",
      number: 789,
      neighborhood: "Boa Viagem",
      city: "Recife",
      state: "PE",
      cep: "23456-789",
    },
  },
  {
    name: "Ana Santos",
    age: 25,
    email: "ana.santos@gmail.com",
    phone: "(71) 5555-5555",
    address: {
      street: "Rua dos Girassóis",
      number: 1011,
      neighborhood: "Barra",
      city: "Salvador",
      state: "BA",
      cep: "34567-890",
    },
  },
  {
    name: "Luiz Costa",
    age: 32,
    email: "luiz.costa@hotmail.com",
    address: {
      street: "Rua das Acácias",
      number: 1213,
      neighborhood: "Centro",
      city: "Belo Horizonte",
      state: "MG",
      cep: "45678-901",
    },
  },
  {
    name: "Isabela Almeida",
    age: 37,
    email: "isabela.almeida@gmail.com",
    phone: "(21) 5555-5555",
    address: {
      street: "Rua das Hortênsias",
      number: 1415,
      neighborhood: "Botafogo",
      city: "Rio de Janeiro",
      state: "RJ",
      cep: "56789-012",
    },
  },
  {
    name: "Rafael Ferreira",
    age: 29,
    email: "rafael.ferreira@hotmail.com",
    address: {
      street: "Rua das Orquídeas",
      number: 1617,
      neighborhood: "Pinheiros",
      city: "São Paulo",
      state: "SP",
      cep: "67890-123",
    },
  },
];

const findPersonByName = (name) => {
  // Recuperando o valor

  let nameUser = name;

  // Verificar se não está vazio

  if (nameUser == "") {
    throw new Error("Digite o nome de uma pessoa, e tente novamente.");
  }

  const obj = clients;

  // Loop para verificar
  for (let index = 0; index < obj.length; index += 1) {
    if (obj[index].name === nameUser) {
      // Destinatário: Ana Santos. Endereço: Rua dos Girassóis, 1011, Barra, Salvador - BA. CEP: 34567-890
      return `${obj[index].name}. Endereço: ${obj[index].address.street}, ${obj[index].address.number}, ${obj[index].address.neighborhood} - ${obj[index].address.state}. CEP: ${obj[index].address.cep}`;
    }
  }
  throw new Error("Pessoa não encotrada, tente novamente.");
};

const findPersonByPosition = (position) => {
  /*A função findPersonByPosition() recebe uma posição (do array) por parâmetro e retorna uma string com o nome e o e-mail da pessoa. Cliente: João da Silva. email: joao.silva@gmail.com.
Caso a função findPersonByPosition() não localize uma pessoa por posição, lance uma exceção com a mensagem 'Posição inválida, tente novamente'.*/

  // Recuperando a posição

  const numberPosition = position;

  // Ver se é válido

  if (isNaN(numberPosition)) {
    throw new Error("Posição inválida, tente novamente.");
  }

  // Recuperar o objeto
  const obj = clients;

  // Verificar dentro do objeto se a posição existe

  if (obj[numberPosition] === undefined) {
    throw new Error("Posição inválida, tente novamente");
  }
  // João da Silva. email: joao.silva@gmail.com.
  return `${obj[numberPosition].name}. E-mail: ${obj[numberPosition].email}.`;
};

const findPeopleByState = (state) => {
  /*A função findPeopleByState recebe um estado por parâmetro e retorna um array contendo o nome das pessoas que moram naquele estado.
Caso a função findPeopleByState localize nenhuma pessoa no estado, lance uma exceção com a mensagem 'Ops, nenhuma pessoa mora nesse estado, tente outro'*/

  // Recuperando o objeto

  const obj = clients;
  let states = [];
  let peoples = [];

  // Recuperando todos os estados
  for (let index = 0; index < obj.length; index += 1) {
    states.push(obj[index].address.state);
  }

  // Condicional

  for (let index = 0; index < obj.length; index += 1) {
    if (state === states[index]) {
      if (obj[index].address.state == state) {
        peoples.push(obj[index].name);
      }
    }
  }

  // Lançando exceção

  if (peoples.length == 0) {
    throw new Error("Ops, nenhuma pessoa mora nesse estado, tente outro.");
  }

  return peoples;
};

console.log(findPersonByName("Rafael Ferreira"));
console.log(findPersonByPosition(3));
console.log(findPeopleByState("ES"));
