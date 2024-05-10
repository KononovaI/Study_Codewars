/* Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs! */

// Solution:
function oddCount(n){
  return Math.floor(n/2);
}

/* Started with this code and it passed fixed tests. Therefore it causes fatal error in random tests, because the code creates an array with too many elements:
function oddCount(n){
  let result = [];
  for (let i = 0; i<n; i++){
    if (i % 2 !== 0)
      {result.push(i)}
  }
  return result.length;
} */