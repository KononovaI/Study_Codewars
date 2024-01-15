/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9   */

// Solution:
function squareSum(numbers) {
  let squaredNumbers = numbers.map((num) => {
    return num * num;
  });
  let result = squaredNumbers.reduce((total, current) => {
    return current + total;
  }, 0);
  return result;
}

/* Shorter version where action is made directly within the reduce(), without separate squere action:
function squareSum(numbers) {
  return numbers.reduce((total, num) => total + num * num, 0);
}
*/