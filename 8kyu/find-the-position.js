/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1" */

// Solution:
function position(letter){
  let result = letter.toUpperCase().charCodeAt() -'A'.charCodeAt(0) +1;
return `Position of alphabet: ${result}`
}