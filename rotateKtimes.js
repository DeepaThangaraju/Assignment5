var arr=[1,2,3,4,5];
var k=3;

(function(){const sub= arr.slice(0, k);
var c=arr.slice(k,arr.length);
var d=[...c,...sub];
console.log(d);})();