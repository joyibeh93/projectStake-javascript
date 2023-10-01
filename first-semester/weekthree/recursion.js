// Your code here.
function isEven(number) {
    // Base case: If the number is 0, it's even.
    if (number === 0) {
      return true;
    }
    // Base case: If the number is 1, it's odd.
    if (number === 1) {
      return false;
    }
    // Recursive case: For any other positive number,
    // subtract 2 until we reach one of the base cases.
    if (number < 0) {
      // If the number is negative, convert it to a positive number
      // and continue the recursion.
      return isEven(-number);
    }
    return isEven(number - 2);
  }
  
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??