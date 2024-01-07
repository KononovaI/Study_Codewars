/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

// Solution:
function abbrevName(name){
  const indexOfFirstCharOfSurname = (name.indexOf(" ")+1); //Got the INDEX of the first character of the surname
  const firstCharOfSurname = name[indexOfFirstCharOfSurname]; // Got the first character of the surname
  const firstCharOfName = name.charAt(0); // Got the first character of the name
  return firstCharOfName.concat(".", firstCharOfSurname).toUpperCase(); // Concatenate both characters into one string, with dot in the middle
}

/* Shorter option:
function abbrevName(name){
	return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();
}
*/