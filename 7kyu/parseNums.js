// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray) {
  return stringarray.map((num) => Number(num));
}

//prep it out
// p should be an array filled with strings of numbers
//need to return the array, but with the stringed numbers converted into numbers
//ie:["1", "2", "3"] to [1, 2, 3]

//start by taking the array
//can map through the array, and return numbers
