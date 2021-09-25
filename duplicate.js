var a=[1,2,4,3,5,5];
var c={};
var notrepeated=[];
let show=function(){for(var i=0;i<a.length;i++){
    var currentvalue=a[i];
    if(c[currentvalue]){
        c[currentvalue]+=1;
    }else{
        c[currentvalue]=1;
    }
}
for(var key in c){
    if(c[key]===1){
        notrepeated.push(key);
    }
}
console.log(notrepeated.join(' '));}

show();