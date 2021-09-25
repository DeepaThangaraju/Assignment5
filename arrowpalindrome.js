var a=[12,111,121,303,89,980];
var pal=(a)=>{
    for(var i=0;i<a.length;i++) {
        var temp=a[i];
        var sum=0;
        while(a[i]>0){
            rem=a[i]%10;
            sum=sum*10+rem;
            a[i]=parseInt(a[i]/10);
        }
        
        if(sum===temp){
            console.log(sum);
        }
        
    }
}
pal(a);