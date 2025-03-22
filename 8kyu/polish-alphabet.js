/* There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski" */

function correctPolishLetters (string) {
  const letters = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z"
}
  let result = "";
  for(let i = 0; i< string.length; i++){
    result += letters[string[i]] || string[i];
  }
  return result;
}

/* Other correct solution with "map":
function correctPolishLetters (string) {
  const letters = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z"
}
  let result = string
		.split("")
		.map(char => letters[char] || char) // Replace if exists in letters, else keep original
  	.join("");
  }
  return result;
}

*/