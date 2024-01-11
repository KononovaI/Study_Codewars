/* Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s) */

// Solution:
function getNumberFromString(s) {
  return Number(s.replace(/\D/g, '')); // Use RegEx to cutOff chars and transform the result as a number
}