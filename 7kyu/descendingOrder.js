// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  return Number(n.toString().split('').sort().reverse().join(''));
}

// perameter will be a non negative integer

// returns will be that number, rearranged to create the highest possible number

// Input: 42145 Output: 54421

// take n, convert it to string, split it into array, sort it, reverse it, join it
