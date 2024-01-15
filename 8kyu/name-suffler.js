/* Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john" */

// Solution:
function nameShuffler(str){
  let strArr = str.split(" ");
  return strArr[1] + " " + strArr[0];
}