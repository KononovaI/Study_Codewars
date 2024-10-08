/* Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number(). */

function add(a, b){
	if (typeof a === "number" && typeof b === "string") {
        return a == b;
    } else if (typeof a === "string" && typeof b === "number") {
        return a == b; 
    } else if (typeof a === typeof b) {
      return a == b;
    }
    return false;
}

/* Shorter solution :)
function add(a, b){
	return a == b 
} */