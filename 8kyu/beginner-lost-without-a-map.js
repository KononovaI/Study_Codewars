/* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

//WITH map:

function maps(x){
	return x.map(int => int * 2)
	}

//WITHOUT map:
function maps(x){
	let arr = [];
	for(let i = 0; i < x.length; i++){
	arr.push(x[i] * 2);
	}
	return arr;
	}