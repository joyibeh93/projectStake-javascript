// Your code here.
function range(start,end,step=1){
    let listOfArrays=[];
    if (step>0){
       for(let i=start;i<=end; i +=step){
      listOfArrays.push(i)
    }
    }
    else{
      for(let i=start;i>=end; i +=step){
        listOfArrays.push(i)
        
        
      }
    
    }
      
      
    
    return listOfArrays
  }
  
  function sum(arrayList){
    listOfArraySum=0;
    for(let value of arrayList){
      listOfArraySum +=value;
    }
    return listOfArraySum
  }
    
    
    
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55