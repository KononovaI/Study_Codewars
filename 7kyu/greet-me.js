/* Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!" */

var greet = function(name) {
  return "Hello " + name.toUpperCase().slice(0,1) + name.toLowerCase().slice(1) + "!"
};