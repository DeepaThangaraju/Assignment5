var arr=[1,2,3,4,5];

const odd=(arr)=>{
  arr.forEach(element => {
    if(element%2){
      console.log(element);
    }
    
  });
}
odd(arr);
