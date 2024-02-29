// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  // Split the string into an array of words
  const words = s.split(" ");

  // Initialize a variable to keep track of the shortest word length
  let shortestLength = Infinity;

  // Iterate through each word in the array
  for (let i = 0; i < words.length; i++) {
    // Get the length of the current word
    const wordLength = words[i].length;

    // Update the shortestLength if the current word length is shorter
    if (wordLength < shortestLength) {
      shortestLength = wordLength;
    }
  }

  // Return the shortest word length
  return shortestLength;
}
