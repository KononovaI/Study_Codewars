/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */

function removeUrlAnchor(url){
  let index = url.indexOf("#");
  return index <0 ? url : url.slice(0, index);
}