/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

// Solution:
function sumMix(x){
  let xToNumber = x.map((item) => {
    return +item;
  });
  let result = xToNumber.reduce((a, b) => a + b);
  return result;
}