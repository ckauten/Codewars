// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  return str.slice(str.length - ending.length) == ending ? true : false;
}
//P
//str abcde- the total length string
// ending- cde- a random ending
//R
//it should return a boolean
//E
//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false
//P
// I have 2 perameters. I need to return a boolean
// if the end of the str equals ending, return true
//i need to find out how long ending is so that i can compare it to the end of the string.
// get ending length and compare it to str.slice(str.length-ending.length)
