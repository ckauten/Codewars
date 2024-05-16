// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  n = n.toString().split('').reverse();
  for (let i = 0; i < n.length; i++) {
    n[i] = parseInt(n[i]);
  }
  return n;
}
