/* Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

['John', 'Smith'], 'Phoenix', 'Arizona'
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona! */

// Solution:
function sayHello( name, city, state ) {
  
	//Define blank variable to have a place for values that will get from for loop in the next steps
  let fullName = '';
	// for loop to get all names/ surnames as much as they are:
  for(i = 0; i < name.length; i++){
    fullName = fullName.concat(' ', name[i]);
  }
  // Combine the text:
  return `Hello,${fullName}! Welcome to ${city}, ${state}!`
}

/* Shorter version (for loop replaced with array method join()):
function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
} 
*/