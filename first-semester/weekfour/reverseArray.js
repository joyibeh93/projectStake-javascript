// Your code here.
function reverseArray(array){
    let arrayValueList=[];
    for(let value of array){
      arrayValueList.unshift(value)
    }
    return arrayValueList;
    
  }
  function reverseArrayInPlace(array){
    let arrayValueList2=[]
    for(let i= array.length;i>0;i--){
      arrayValueList2.push(i);
    }
    return arrayValueList2;
  }
    
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
   let arrayValue = [1, 2, 3, 4, 5];
   reverseArrayInPlace(arrayValue);
   console.log( reverseArrayInPlace(arrayValue));
  // → [5, 4, 3, 2, 1]