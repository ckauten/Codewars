//write a function that takes in an array made of integers and return the average of the array

function findAverage(array) {
  return array.length == 0
    ? 0
    : array.reduce((acc, c) => acc + c, 0) / array.length;
}
