var a=[1,12,15,26,38];
var b=[2,13,17,30,45];
var c=[...a,...b];
let med=function()
    {for(var i=0;i<c.length;i++){
    for(var j=i+1;j<c.length;j++){
        if(c[i]>c[j]){
            t=c[i];
            c[i]=c[j];
            c[j]=t;
        }
    }
}
console.log(c);
var mid=c.length/2;
var median=parseInt((c[mid-1]+c[mid])/2);
console.log(median);}
med();