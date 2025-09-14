// removeItem.js

function removeItem(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Testando o funcionamento

const array = ["Aluno Arthur", "Aluno Richard", "Aluno Breno", 50];

console.log(removeItem(array, 50));

/*Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.
Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.
*/

module.exports = removeItem;
