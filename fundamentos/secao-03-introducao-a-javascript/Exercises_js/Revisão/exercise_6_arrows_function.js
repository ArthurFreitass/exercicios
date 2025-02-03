// Revisão sobre function arrows

function HelloWord(name) {
  return "Hello Word " + name;
}

console.log(HelloWord("Nicolle"));

// Em arrow Function

const Hello = (name) => {
  return "Hello " + name;
};

console.log(Hello("Parça"));

// Simplificando

const Hello_2 = (name) => `Hello 2.0 ${name}`;

console.log(Hello_2("Duke"));
