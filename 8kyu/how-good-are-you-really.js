/* There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array! */

// Solution:
function betterThanAverage(classPoints, yourPoints) {
  let allPointsArr = classPoints.concat(yourPoints); // Concate all points in one array
  // Calculate the count of all points:
	let summOfAllPoints = allPointsArr.reduce(function(total, current) {
  return current + total;
  }, 0);
	//Calculate the score:
  let calculateScore = summOfAllPoints / allPointsArr.length;
	// Compare your's points and calculated score, return the result:
  return yourPoints > calculateScore ? true : false;
}