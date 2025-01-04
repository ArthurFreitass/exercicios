const numbers_Array = [-10, 131, 17, 19, 1455];
let sum = 0;

for (let index = 0; index < numbers_Array.length; index += 1) {
  sum += numbers_Array[index] + sum;
}

console.log(sum);
