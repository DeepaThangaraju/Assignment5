var str=["james","David","alex","mark"];
var c=[];
let title=(str)=>{
    for(var i=0;i<str.length;i++){
        c.push(str[i].replace(str[i][0],str[i][0].toUpperCase()));
    }
    console.log(c);
};
title(str);