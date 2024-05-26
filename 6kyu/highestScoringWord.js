// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  let holder = [];
  let wordCounter = [];
  let FI = 0;
  let OS = x.split(' ');
  let nums = x.split('').map((char) => char.charCodeAt(0) - 96);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== -64) {
      holder.push(nums[i]);
    } else {
      wordCounter[FI] = holder.reduce((acc, c) => acc + c);
      holder = [];
      FI++;
    }
  }
  //last word processor
  if (holder.length > 0) {
    wordCounter[FI] = holder.reduce((acc, c) => acc + c, 0);
  }

  let unsorted = wordCounter;
  let sorted = wordCounter.slice().sort((a, b) => a - b);
  let max = sorted[sorted.length - 1];
  return OS[unsorted.indexOf(max)];
}
