// Listando produtos

const products = [
  {
    Name: "Leite",
    Price: 4.5,
    Avaliable: true,
    Category: "Latício e Bebidas",
    Stock: {
      Quantidade: 51,
    },
    Allergies_Intolerance: true,
    Vitamins_200_ml: {
      B12: 0.2,
      A: 0.14,
    },
    Suplier: {
      Name: "Leite da Roça",
      Contact: {
        Number: 93043213,
        Email: "leitedaroça@email.com",
      },
    },
  },
  {
    Name: "Café",
    Price: 20,
    Avaliable: true,
    Category: "Bebidas",
    Stock: {
      Quantidade: 20,
    },
    Allergies_Intolerance: true,
    Vitamins_200_g: {
      B2: 0.1,
      B3: 0.5,
      B1: 0.2,
      B6: 0.3,
    },
    Suplier: {
      Name: "Café-Bom",
      Contact: {
        Number: 45432131,
        Email: "cafe_bom@email.com",
      },
    },
  },
  {
    Name: "Suco vale",
    Price: 5,
    Avaliable: true,
    Category: "Bebidas",
    Stock: {
      Quantidade: 100,
    },
    Allergies_Intolerance: true,
    Vitamins_200_ml: {
      C: 0.8,
      A: 0.14,
      B: 0.3,
    },
    Suplier: {
      Name: "Sucos do Bom",
      Contact: {
        Number: 122352543,
        Email: "sucos_do_bom@email.com",
      },
    },
  },
  {
    Name: "Biscoito de polvilho",
    Price: 6,
    Avaliable: false,
    Category: "Lanches e comida",
    Stock: {
      Quantidade: 11,
    },
    Allergies_Intolerance: true,
    Vitamins_200_g: {
      B12: 0.1,
      A: 0.34,
      C: 1.0,
    },
    Suplier: {
      Name: "Biscoitos da Roça",
      Contact: {
        Number: 12345678,
        Email: "biscoitoda_roça@email.com",
      },
    },
  },
  {
    Name: "Salgadinho",
    Price: 3.5,
    Avaliable: true,
    Category: "Lanches",
    Stock: {
      Quantidade: 150,
    },
    Allergies_Intolerance: true,
    Vitamins_200_g: {
      B12: 0.02,
      A: 0.01,
    },
    Suplier: {
      Name: "Gulão Alimentos",
      Contact: {
        Number: 987655421,
        Email: "alimentos_gulão@email.com",
      },
    },
  },
  {
    Name: "Batata Ruffles",
    Price: 6.5,
    Avaliable: true,
    Category: "Latício e Bebidas",
    Stock: {
      Quantidade: 1,
    },
    Allergies_Intolerance: true,
    Vitamins_200_g: {
      B12: 0.002,
      C: 0.14,
    },
    Suplier: {
      Name: "Ruffles",
      Contact: {
        Number: 90872371,
        Email: "leitedaroça@email.com",
      },
    },
  },
  {
    Name: "Coca-Cola Especial 2L",
    Price: 7,
    Avaliable: true,
    Category: "Bebidas",
    Stock: {
      Quantidade: 1,
    },
    Allergies_Intolerance: true,
    Vitamins_200_ml: {
      B12: 0.02,
      A: 0.01,
    },
    Suplier: {
      Name: "Coca-Cola",
      Contact: {
        Number: 910124657,
        Email: "coca_cola@email.com",
      },
    },
  },
];

// Função para listar produtos unicos no estoque

function UniqueProduct(array) {
  let productUnique = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].Stock.Quantidade === 1) {
      productUnique += 1;
    }
  }
  return productUnique;
}

// Função de contar todos os produtos em estoque

const CountStock = (array) => {
  let Sum_count = 0;
  for (let index = 0; index < array.length; index += 1) {
    Sum_count += array[index].Stock.Quantidade;
  }
  return Sum_count;
};

// Função de busca de produtos

const SearchProduct = (array, product) => {
  let message = "";
  for (let index = 0; index < array.length; index += 1) {
    switch (product) {
      case "Leite":
        message = `Produto: ${product} existe.`;
        break;
      case "Café":
        message = `Produto: ${product} existe.`;
        break;
      case "Suco vale":
        message = `Produto: ${product} existe.`;
        break;
      case "Biscoito de polvilho":
        message = `Produto: ${product} existe.`;
        break;
      case "Salgadinho":
        message = `Produto: ${product} existe.`;
        break;
      case "Batata Ruffles":
        message = `Produto: ${product} existe.`;
        break;
      case "Coca-Cola Especial 2L":
        message = `Produto: ${product} existe.`;
        break;
      default:
        message = `Produto não encontrado.`;
        break;
    }
  }
  return message;
};

// Promotion

function Promotion(array, index, discount) {
  const desconto = (array[index].Price * discount) / 100;
  return `O produto: ${array[index].Name} com desconto fica R$ ${
    array[index].Price - desconto
  }`;
}

// Saída dos produtos únicos no estoque

console.log(
  "O número de produtos únicos no estoque é: " + UniqueProduct(products)
);

// Saída dos produtos totais em estoque

console.log(
  "\nA quantidade de produtos totais em estoque é: " + CountStock(products)
);

// Saída da busca de produtos

console.log("\n" + SearchProduct(products, "Leite"));

// Saída do produto com desconto

console.log("\n" + Promotion(products, 0, 10));
