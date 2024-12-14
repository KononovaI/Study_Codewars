/* Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.

Examples
"red white blue"  =>  "white"
"red blue gold"   =>  "gold" */

function longestWord(stringOfWords) {
  let result;
  if (stringOfWords.length === 1) {
    result = stringOfWords;
  } else {
    let arr = stringOfWords.split(" ");
    result = arr[0];
    for ( let i = 1; i < arr.length ; i++){
      arr[i].length >= result.length ? result = arr[i] : result = result
    }
  }
  return result;
}