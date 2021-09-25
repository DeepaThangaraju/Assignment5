var a=[1,2,3,4,5,6,11,21];
let prime=function(){for(var i=0;i<a.length;i++){
   
   var p=1;
       for(var j=2;j<a[i];j++){
           if(a[i]%j==0){
             p=0;
             break;  
           }
       }
       if(p==1){
           console.log(a[i]);
       }
   

}};
prime();