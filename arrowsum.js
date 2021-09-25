var a=[1,2,3,4,5];
var el,sum=0;
const sumofarray = (a) => {
  a.forEach(el => {
sum=sum+el;
  });
  return sum;
  }
  console.log(sumofarray(a));