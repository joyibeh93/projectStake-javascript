// Your code here.
function loop(value, test, update, body) {
    for (let current = value; test(current); current = update(current)) {
      body(current);
    }
  }
  
  // Example usage of the loop function
  
//   Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

// When defining the function, you can use a regular loop to do the actual looping.
  
  
  
  
  let startValue = 0;
  
  loop(
    startValue,
    (value) => value < 5, // Test function
    (value) => value + 1, // Update function
    (value) => {
      console.log(value); // Body function
    }
  );
  
  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1