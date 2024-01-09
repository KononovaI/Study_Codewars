/* Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) */

// Solution:
var summation = function (num) {
	let arr = [num]; // Create an array with value, what is similar to the fiven number (otherwhise it would be missing in reduce() step)
	
	// With while loop iterate through the given number till number 1:
	 while ( num > 1) {
		 num = num - 1;
		 arr.push(num); // And add all resulting numbers into arr.
	}
	// reduce() methode helps to sum all numbers from resulting array:
	 return arr.reduce(function(totalSum, currentNum) {
		 return totalSum + currentNum
	 }, 0);
 }