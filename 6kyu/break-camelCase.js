/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

// Solution:
function solution(string) {
  return string
          .split("")
          .map((item) => {
              return item === item.toUpperCase() ? item = ` ${item}` : item
            })
          .join("")
}