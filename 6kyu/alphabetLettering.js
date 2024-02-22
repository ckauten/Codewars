// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    text = text.toLowerCase()
    text = text.split('')
    let numerics = []
    let junk = []
    for (letter of text){
      if(/[a-z]/.test(letter)){
        numerics.push(letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
      }else{
        junk.push(letter)
      }
    }
    return numerics.join(' ')
  }