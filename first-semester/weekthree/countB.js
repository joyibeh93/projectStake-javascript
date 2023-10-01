// Your code here
function countBs(str) {
    let count = 0; // Initialize a count variable to keep track of the number of 'B' characters
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Check if the current character is an uppercase 'B'
      if (str[i] === 'B') {
        count++; // If it is, increment the count
      }
    }
  
    return count; // Return the final count
  }
  
  function countChar(str, charToCount) {
    let count = 0; // Initialize a count variable to keep track of the number of specified characters
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Check if the current character matches the specified character
      if (str[i] === charToCount) {
        count++; // If it does, increment the count
      }
    }
  
    return count; // Return the final count
  }
  
  function countBs(str) {
    // Use countChar to count the number of uppercase 'B' characters
    return countChar(str, 'B');
  }
  
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4