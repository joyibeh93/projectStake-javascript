// Your code here.
function deepEqual(value1,value2){
    if(value1 === value2){
      return true;
    }
    if(typeof value1 == "object" && value1 != null && typeof value2 == "object" && value2!=null){
      let value1Keys = Object.keys(value1);
      let value2Keys = Object.keys(value2);
       // Check if the number of keys is the same
      if (value1Keys.length !== value2Keys.length) {
        return false;
      }
  
      // Recursively compare the values of each property
      for (let key of value1Keys) {
        if (!value2Keys.includes(key) || !deepEqual(value1[key], value2[key])) {
          return false;
        }
      }
  
      return true;
    }
  
    // If none of the above conditions are met, the values are not equal
    return false;
  }
    
    
    
  
  
  
  
  
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true