/* Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
] */

function towerBuilder(nFloors) {
	let result = [];
	for (let i = 1; i <= nFloors; i++) { 
		let spaces = " ".repeat(nFloors - i);
		let stars = "*".repeat(2 * i - 1);
		result.push(spaces + stars + spaces);
	}
	return result;
}