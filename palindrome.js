var a=[1,2,45,67,343];
(function(){for(var i=0;i<a.length;i++){
    var n=a[i];
    var t=n;
    var sum=0,rem;
    while(n>0){
        rem=n%10;
        sum=sum*10+rem;
        n=parseInt(n/10);
    }
   
    if(t===sum){
        console.log(a[i]);
    }
}})();