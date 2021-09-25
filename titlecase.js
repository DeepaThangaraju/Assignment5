var str=["deepa","arun","divya"];
var c=[];
(function(str){for(var i=0;i<str.length;i++){
    c.push(str[i].replace(str[i][0],str[i][0].toUpperCase()));
}
console.log(c);})(str);