// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s) {
  let u = s.split('');
  let l = s.split('');
  let finalArr = [];
  for (let I = 0; I < u.length; I++) {
    I % 2 == 0 ? (u[I] = u[I].toUpperCase()) : (u[I] = u[I].toLowerCase());
  }
  u = u.join('');
  finalArr.push(u);
  for (let I = 0; I < l.length; I++) {
    I % 2 == 0 ? (l[I] = l[I].toLowerCase()) : (l[I] = l[I].toUpperCase());
  }
  l = l.join('');
  finalArr.push(l);

  return finalArr;
}
