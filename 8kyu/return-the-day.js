/* Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7" */

function whatday(num) { 
  let answer;
  switch(num) {
    case 1:
      answer = "Sunday";
      break;
    case 2:
      answer = "Monday";
      break;
    case 3:
      answer = "Tuesday";
      break;
    case 4:
      answer = "Wednesday";
      break;
    case 5:
      answer = "Thursday";
      break;
    case 6:
      answer = "Friday";
      break;
    case 7:
      answer = "Saturday";
      break;
    default:
      answer = "Wrong, please enter a number between 1 and 7";
    }
  return answer;
}