/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */

//Solution:
export function countPositivesSumNegatives(input: number[] | null) {
  if (input === null || input.length ===0) return []; // Have to check as it is TS and it is a good practice to ensure that your code behaves as expected and to avoid runtime errors. Array methods are designed to work with arrays, and if you try to use them on a non-array or null/undefined value, you might encounter unexpected behavior or errors.
  
  // Get appropriate elements of the array:
  let getPositiveNumbers = input.filter((num: number) => num > 0);
  let getNegativeNumbers = input.filter((num: number) => num < 0);
  
  // Do desired actions:
  let lengthOfPositiveNumbers = getPositiveNumbers.length;
  let sumNegativeNumbers = getNegativeNumbers.reduce((accumulator, current) => {
    return current + accumulator
  }, 0);

  // Concatenat both values into one array:
  return [lengthOfPositiveNumbers, sumNegativeNumbers];
}