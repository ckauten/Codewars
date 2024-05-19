// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces
// Examples

// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'

function decipherThis(str) {
  str = str.split(' ');
  let isolatedNum = null;
  let firstLetter = null;
  let second = null;
  let last = null;
  for (let i = 0; i < str.length; i++) {
    isolatedNum = parseInt(str[i]);
    let firstLetter = String.fromCharCode(isolatedNum);
    str[i] = str[i].replace(/\d+/g, firstLetter);
    if (str[i].length == 1) {
      str[i];
    } else {
      last = str[i][1];
      second = str[i][str[i].length - 1];
      if (str[i].length == 2) {
        str[i] = firstLetter + second;
      } else {
        str[i] = firstLetter + second + str[i].slice(2, str[i].length - 1) + last;
      }
    }
  }
  str = str.join(' ');
  return str;
}
