/* The spread operator (...) in JavaScript is used for shallow copying when applied to objects or arrays. It creates a new object or array and copies the enumerable properties or elements from the source object or array into the new one. However, it only creates a shallow copy, meaning that if the original object or array contains nested objects or arrays, those nested references will still point to the same objects or arrays in both the original and copied structures.


Here's an example of using the spread operator for shallow copying, if there isn't nested elements: */
let s = ["bitcoin", "take", "over", "the"];
let shallowCopyS = [...s]; // Made shallow copy
shallowCopyS[3] = "test"; // Changed not nested element

console.log(s); // ["bitcoin","take","over","the"]  The original array didn't change!!!
console.log(shallowCopyS); // ["bitcoin","take","over","test"]


/*Here's an example of using the spread operator for shallow copying, if there IS nested elements: */
let z = ["euro", "take", ["over", "the"]];
let shallowCopyZ = [...z];
shallowCopyZ[2][1] = "test"; // Changed the NESTED element ("the" replaced with "test")

console.log(z); // ["euro", "take", ["over", "test"]] The original array is CHANGED!
console.log(shallowCopyZ); // ["euro", "take", ["over", "test"]]


/* To achieve a deep copy, where nested objects or arrays are also duplicated, you might need to use more advanced techniques, such as a library like Lodash's _.cloneDeep, or convert the object to JSON and then parse it back. Keep in mind that deep copying can be more resource-intensive and may not handle circular references well.

Here's an example using JSON for a deep copy: */
let deepCopyZ = JSON.parse(JSON.stringify(z)); //Made deep copy
deepCopyZ[2][1] = "test"; // Changed the NESTED element

console.log(z); // ["euro", "take", ["over", "test"]] The original array is NOT changed!
console.log(deepCopyZ)// ["euro", "take", ["over", "test"]]