// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because
// 1 + 4 = 5

function squareSum(numbers) {
  if (numbers == []) {
    return 0;
  } else {
    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = numbers[i] * numbers[i];
    }
    return numbers.reduce((acc, c) => acc + c, 0);
  }
}
