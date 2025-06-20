/* Can you implement a function that will return number of words in a string?

You have to ensure that spaces in string is a whitespace for real.

Let's take a look on some examples:

countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
// ... and so on
What kind of tests we made for your code:

Function have to count words and not spaces. You have to be sure that you doing it right
Empty string has no words.
String with spaces around should be trimmed.
Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
Doublecheck that words with chars like -, ', ` are counted right. */


function countWords(str) {
  let result = str
    .replace(/[^\w\s]|_/g, "") /* Remove punctuation
    Removes all characters that are not:
      \w = word characters (letters, numbers, and underscores)
      \s = whitespace characters (spaces, tabs, newlines)
      |_ ensures standalone underscores are also removed. */
    .replace(/\s+/g, " ") /* Normalize all whitespace (spaces, newlines, tabs) to a single space
    This replaces any sequence of whitespace characters (spaces, tabs, newlines, etc.) with a single space.
    */
    .trim() //Removes any extra spaces at the beginning or end of the cleaned string.
    .split(" ") // Splits the string by spaces (safe now that we've normalized whitespace).
    .length; //Counts the number of words in the final array.
  return str === "" ? 0 : result; // If empty string, helps to count correctly
}