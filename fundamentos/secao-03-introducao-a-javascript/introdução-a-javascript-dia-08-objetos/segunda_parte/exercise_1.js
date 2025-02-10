const customer = {
  firstName: "Roberto",
  age: 22,
  job: "Software Engineer",
};

function AddProperty(objeto, chave, valor) {
  if (typeof objeto[chave] === "undefined") {
    objeto[chave] = valor;
  }
}

AddProperty(customer, "email", "vaitomando@gmail.com");
AddProperty(customer, "fone", 123456789);
AddProperty(customer, "userGithub", "superProgrammmer");
AddProperty(customer, "linkedIn", "Arthur");

console.log(customer);
