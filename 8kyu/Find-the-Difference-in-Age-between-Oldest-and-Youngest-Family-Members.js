/* At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age]. */


// Solution:
function differenceInAges(ages){
  const minAge = Math.min(...ages); //Obligāti jābūt spread operatoram, jo citādi nevar izmantot Math.min() un Math.max() masīviem
  const maxAge = Math.max(...ages);
  return [minAge, maxAge, maxAge-minAge];
}

/* One more solution:
function differenceInAges(ages){
  const sortedArray = ages.sort((a,b) => a-b);
  const minAge = sortedArray[0];
  const maxAge = sortedArray[sortedArray.length - 1];
  return [minAge, maxAge, maxAge-minAge];
} */
