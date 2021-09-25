var a=[1,2,3,4,5,6];
(function(){for(var i in a){
    if(a[i]%2!=0){
        console.log(a[i]);
    }
}})();