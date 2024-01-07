/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

// Solution:
function abbrevName(name){
  const indexOfFirstCharOfSurname = (name.indexOf(" ")+1);
  const firstCharOfSurname = name[indexOfFirstCharOfSurname];
  const firstCharOfName = name.charAt(0);
  return firstCharOfName.concat(".", firstCharOfSurname).toUpperCase();
}