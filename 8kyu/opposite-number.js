// Very simple, given an integer or a floating-point number, find its opposite.

// Solution:
function opposite(number) {
  return number*(-1);
}

/* 
Shorter option:
function opposite(number) {
  return -number;
} 


There is an option with using Math.abs() method:
function opposite(number) {
  return Math.abs(number) * -1;
}
BUT it works only if given number is positive, because this method first takes the absolute value of the given number and the absolute value means that the returned value always is positive. 
"Absolute value" ir matemātisks jēdziens, kas norāda attālumu no punkta līdz oriģinālajai nullei uz reālo skaitļu asi. Ja skaitlis ir pozitīvs vai nulle, tā absolūtā vērtība ir vienāda ar pašu skaitli. Ja skaitlis ir negatīvs, tā absolūtā vērtība ir vienāda ar skaitļa pretējo vērtību (noņemot negatīvo zīmi). ĪSāk sakot - absolūtā vērtība vienmēr ir pozitīva!
*/