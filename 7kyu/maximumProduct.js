// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Explanation:
// Max product obtained from multiplying 5 * 10  =  50 .

function adjacentElementsProduct(array) {
  let max = 0;
  let current = 0;
  let newArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    current = array[i] * array[i + 1];
    newArr.push(current);
  }
  newArr = newArr.sort((a, b) => a - b);
  return newArr[newArr.length - 1];
}
