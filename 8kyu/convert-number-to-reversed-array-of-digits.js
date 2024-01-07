/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0] */

// Solution:
function digitize(n) {
  let nToString = n.toString();
  let nToArr = nToString.split("");
  let reversedArr = nToArr.reverse();
  return reversedArr.map(i => +i); // With map() we change strings in the array to the integers. It can be done as well so: .map(Number)
}

/* 
Shorter solution with the same result:
function digitize(n) {
  return n.toString().split("").reverse().map(i => +i);
} */