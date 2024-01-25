/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty */

// Solution:
function getAverage(marks){
  let summ = marks.reduce((a, b) => {
    return a + b;
  })
  let avg = summ / marks.length
  return Math.floor(avg);
}