const order = {
  name: "Luiz Silva",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 20,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  // Retornar o pedido para o entregador

  return `Olá ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, Número: ${fullOrder.address["number"]}, AP: ${fullOrder.address.apartment}.`;
};

const orderModifier = (fullOrder) => {
  return `Olá, ${
    fullOrder.name
  }, o valor total de seu pedido de marguerita, pepperoni e ${
    fullOrder.order.drinks.coke.type
  } é R$ ${
    fullOrder.order.pizza.marguerita.price +
    fullOrder.order.pizza.pepperoni.price +
    fullOrder.order.drinks.coke.price
  }.`;
  //'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'
};

console.log(customerInfo(order));
console.log(orderModifier(order));
