/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

function removeExclamationMarks(s) {
  return s.split('').map(item=>item.replace('!', "")).join('');
}