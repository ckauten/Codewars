// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {
  let newArr = [];
  for (let i = 0; i <= n; i++) {
    newArr.push(Math.pow(2, i));
  }
  return newArr;
}

//perameters comming are single nums
//take that number and run it as the exponent until it reaches that number
//for loop
//returns should be an array with the numbers back in it

//n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//i have a number
//i need to create a for loop with that number
//that number will be what i count to
