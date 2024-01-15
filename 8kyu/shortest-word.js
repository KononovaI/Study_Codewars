/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

// Solution:
function findShort(s){
  let sAsArray = s.split(" ");
  let newArray = [];
  sAsArray.map((str) => {
    newArray.push(str.length)
  });
  let minValue = Math.min(...newArray);
  return minValue;
}