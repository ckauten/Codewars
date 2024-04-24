// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let fixed = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      fixed.push(a[i]);
    }
  }
  return fixed;
}

//Perameters-
//a - array containing multiple digits
//b- array containing multiple digits

//Returns
// should be the list a with all of the list b removed from it

//Examples
//arrayDiff([1,2],[1]) == [2]

//Pseudocode
//need to take list b and remove it from a
// first i will take list a and iterate through it
// i will check for similarity between the a[i] and the b[i]
//if they dont match i will send them to the fixed array
