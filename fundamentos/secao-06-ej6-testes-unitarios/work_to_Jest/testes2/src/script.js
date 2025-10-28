// Adicionando uma função que remove um valor do array

const arrayValue = ["BYD", "Volvo", "X1", "Audi"]

const removeValue = (array, value) => {
  array.splice(array.indexOf(value), 1)
  return array
}


module.exports = { arrayValue, removeValue}
