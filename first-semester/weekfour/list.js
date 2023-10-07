// Your code here.
// Function to create a list from an array
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
    }
    return list;
  }
  
  // Function to convert a list to an array
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  // Function to add an element to the front of a list
  function prepend(element, list) {
    return { value: element, rest: list };
  }
  
  // Function to retrieve an element at a given position in the list
  function nth(list, position) {
    if (!list) {
      return undefined; // List is empty or position is out of bounds
    } else if (position === 0) {
      return list.value; // Found the element at the specified position
    } else {
      return nth(list.rest, position - 1); // Recursively search for the element
    }
  }
  
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20