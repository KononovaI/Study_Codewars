/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */


// Solution:
function positiveSum(arr) {
  let result;
  if (arr.length === 0) {
  result = 0;
} else {
  const onlyPositive = arr.filter((num) => num > 0);
  result = onlyPositive.reduce((acc, n) => acc + n, 0);
}
  return result;
}