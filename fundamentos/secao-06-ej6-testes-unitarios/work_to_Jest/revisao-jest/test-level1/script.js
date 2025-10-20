/*Level 1*/

/*Create a function sum(a, b) that returns the sum of two numbers.
Create a function ehPar(num) that returns true if the number is even, and false otherwise.
Create a function maiorNumero(a, b) that returns the larger of two numbers.
Create a function invertString(str) that reverses a string.
Create a function contaCaracteres(str) that returns the number of characters in a string.*/

// applying errors

const checkNumber = (num) => {
  if (typeof num !== "number") {
    throw new Error("Type one number");
  }
};

const emptyString = (string) => {
  if (string === "") {
    throw new Error("Type one caracter");
  }
};

const verifyindexArray = (array) => {
  let index = 0;
  for (index; index < array.length; index += 1) {}
  if (index < 2) {
    throw new Error("Type two or more characters");
  }
};

// Functions to be tested

const sum = (num1, num2) => {
  checkNumber(num1);
  checkNumber(num2);
  return num1 + num2;
};
const itPair = (num) => {
  checkNumber(num);
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
const biggestNumber = (num1, num2) => {
  checkNumber(num1);
  checkNumber(num2);
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  }
  throw new Error("Os números são iguais");
};

const reverseString = (string) => {
  emptyString(string);
  const stringArray = string.split("").reverse().join("");
  verifyindexArray(stringArray);
  return stringArray;
};

const countCharacter = (string) => {
  emptyString(string);
  const stringArray = string.split("");
  let countCharacter = 0;
  for (let index = 0; index < stringArray.length; index += 1) {
    countCharacter += 1;
  }
  return countCharacter;
};

module.exports = { sum, itPair, biggestNumber, reverseString, countCharacter };
