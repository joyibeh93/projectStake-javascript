// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.






let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
const combineArrays=arrays.reduce((combination,currentArray) =>{
  return combination.concat(currentArray);
},[]);
console.log(combineArrays)
// → [1, 2, 3, 4, 5, 6]