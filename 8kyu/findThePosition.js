// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter) {
  letter = letter.toUpperCase(); // Ensure the input is uppercase
  switch (letter) {
    case 'A':
      number = 1;
      break;
    case 'B':
      number = 2;
      break;
    case 'C':
      number = 3;
      break;
    case 'D':
      number = 4;
      break;
    case 'E':
      number = 5;
      break;
    case 'F':
      number = 6;
      break;
    case 'G':
      number = 7;
      break;
    case 'H':
      number = 8;
      break;
    case 'I':
      number = 9;
      break;
    case 'J':
      number = 10;
      break;
    case 'K':
      number = 11;
      break;
    case 'L':
      number = 12;
      break;
    case 'M':
      number = 13;
      break;
    case 'N':
      number = 14;
      break;
    case 'O':
      number = 15;
      break;
    case 'P':
      number = 16;
      break;
    case 'Q':
      number = 17;
      break;
    case 'R':
      number = 18;
      break;
    case 'S':
      number = 19;
      break;
    case 'T':
      number = 20;
      break;
    case 'U':
      number = 21;
      break;
    case 'V':
      number = 22;
      break;
    case 'W':
      number = 23;
      break;
    case 'X':
      number = 24;
      break;
    case 'Y':
      number = 25;
      break;
    case 'Z':
      number = 26;
      break;
    default:
      number = 'Invalid letter'; // Handle cases outside A-Z
  }
  return `Position of alphabet: ${number}`;
}
