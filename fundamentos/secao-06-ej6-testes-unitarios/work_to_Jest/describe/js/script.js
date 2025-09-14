const sumArray = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] == "number") {
      sum += array[index];
    }
  }
  if (sum == 0) {
    return false;
  }
  return true;
};

module.exports = sumArray;
