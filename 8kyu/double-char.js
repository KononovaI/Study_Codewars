/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  " */

// Solution:
function doubleChar(str) {
  let strArr = str.split(''); // Split the string to array

  let resultArr = []; // Create empty array which will be used to collect the result

	// Use forEach method to iterate through all array and double the char
  strArr.forEach((char) => {
  resultArr.push(char + char)
  });
  
  return resultArr.join(''); // Use method join() to put all chars together
}