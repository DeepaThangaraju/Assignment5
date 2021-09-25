var a=[1,2,3,4,5];
var el;
const isPrime = (a) => {
  a.forEach(el => {
    var p=1;
    for(var j=2;j<el;j++){
        if(el%j==0){
          p=0;
          break;  
        }
    }
    if(p==1){
        console.log(el);
    }
    
  });
  }
isPrime(a);