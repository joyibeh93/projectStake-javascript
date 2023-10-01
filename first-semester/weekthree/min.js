// Your code here.
const min=(a,b)=>{
    if(a>b){
      return ` ${b} is the smallest number`;
    }
    else{
    return ` ${a} is the smallest number`;
  }
  }
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10