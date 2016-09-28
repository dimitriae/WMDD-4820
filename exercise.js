function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

/*  If the number is lower then b, the program returns a, else, if the number 
is higher then a, it returns b.  */

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

/*  If the number is equal to zero, the program will return true. But if the number is 
equal to one, the function will return false, then if the number is lower then zero the 
program will call the function isEven(-n) to transforme the negative number into a positive 
number. With the last 'else' the program will keep subtracting the number given by '-2', go 
back to compare the number with the functions and subtract again by '-2',
it will enter in a loop untill the number becomes 0 and returns true.
  */

  function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

/*  This function I could not grasp.
  */