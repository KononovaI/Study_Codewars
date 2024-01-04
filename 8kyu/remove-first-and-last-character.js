/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */

// Solution:
function removeChar(str){
  let strAsArray = str.split("");
    strAsArray.splice(0,1);
    strAsArray.splice(-1,1); // Here can be used pop() as well. It delete last element of the array
  return strAsArray.join("");
};

/* Shorter solution can be in reverse view (nevis dzēšam pirmo un pēdējo char, bet izgriežam viduci)
function removeChar(str) {
  return str.slice(1, -1);
} */