//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
var num = 10;
function addFive(num) { 
console.log(num+5);
}
var result = addFive(num);



//Write a function called “getOpposite”.
//Given a number, return its opposite
var num = -5;
function getOpposite(num) {
    
    if(num!=0){
        console.log(-1*num);
    }else if(num==0){
        console.log(0);
    }else{
        console.log(-1);
    }
}
var result = getOpposite(num);



//Fill in your code that takes an number minutes and converts it to seconds.

var min = 5;
function toSeconds(min) {
    console.log(`seconds: ${min*60}`);
}
var secs = toSeconds(min);



//Create a function that takes a string and returns it as an integer.

var mystr = "5000";
function toInteger(mystr) {
    console.log(parseInt(mystr));
}
var myint = toInteger(mystr);



//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;
function nextNumber(myint) {
    console.log(++myint);
}
var myNextint = nextNumber(myint);




//Create a function that takes an array and returns the first element.

var arr = [1, 2, 3];
function getFirstElement(arr) {
    console.log(arr[0]);
}
var data = getFirstElement(arr);



//Write a function that converts hours into seconds.
var arr = [1, 2, 3];
function hourToSeconds(arr) {
    var sum=0;
    for(var i in arr){
        sum=sum+arr[i];
    }
    console.log(`seconds: ${sum*60*60}`);
}
var data = hourToSeconds(arr);


//Find the Perimeter of a Rectangle

function findPerimeter(num1,num2) {
    console.log(2*(num1+num2));
}
var peri = findPerimeter(6,7);




//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1,num2) {
    if((num1+num2)<100){
        console.log("true");
    }else{
        console.log("false");
    }
}
var res = lessThan100(22,15);



//providing the remainder of a division operation.
function remainder(num1,num2) {
    console.log(num1%num2);
}
var res = remainder(1,3);



//The farmer has counted his animals and he gives you a subtotal for each species. 
//You have to implement a function that returns the total number of legs of all the animals.
function CountAnimals(tur,horse,pigs) {
    console.log((tur*2)+(horse*4)+(pigs*4));
}
var legs = CountAnimals(2,3,5);




//Frames Per Second
function frames(num1,num2) {
    console.log(num1*num2*60);
}
var fps = frames(10,25)

//Check if an Integer is Divisible By Five
function divisibleByFive(num1) {
    if(num1%5===0){
        console.log("true");
    }else{
        console.log("false");
    }
}
var divisible = divisibleByFive(5);


//Given a number, “isEven” returns whether it is even.
function isEven(num){
    if(num%2===0){
        console.log("true")
    }else if(num%2!==0){
        console.log("false");
    }else{
        console.log(-1);
    }
   }
   var even = isEven(5);

//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2){
   if((num1%2!=0) && (num2%2!=0)){
       console.log("true");
   }else{
       console.log("false");
   }
   }
areBothOdd(1,3);


//Write a function called “getFullName”.
function getFullName(firstName, lastName){
    console.log("FullName:" +firstName + " " +lastName);
   }
getFullName("Guvi","Geeks");


//Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1){
    
    console.log(word1.length);
   }

   getLengthOfWord("guvi");


   //Given two words, “isSameLength” returns whether the given words have the same length.
   function isSameLength(word1, word2){
    if(word1.length===word2.length){
        console.log("true");
    }else{
        console.log("false");
    }
   }
   isSameLength("Guvi","Geek");


   //Create a function to calculate the distance between two points defined by their x, y coordinates
console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
 var a=Math.pow((x2-x1),2);
 var b=Math.pow((y2-y1),2);
 return parseInt(Math.sqrt(a+b));
}


//Write a function called “getNthElement”.
var array=[1,2,3,4];
function getNthElement(array,n){
    for(var i=0;i<array.length;i++){
        if(i===n){
            console.log(array[i]);
        }
    }
   }
   getNthElement(array,2);


   //Write a function called “getLastElement”.
   var array=[1,2,3,4];
   function getLastElement(array){
    if(array.length===0){
        console.log(-1);
    }else{
        console.log(array[array.length-1]);
    }
   }
   getLastElement(array);



   //Write a function called “getProperty”.
   var obj = {
    mykey: "value"
   };
   function getProperty(obj, key) {
       console.log(obj[key]);

   }
   getProperty(obj,'mykey');




   //Write a function called “addProperty”.
   var obj = {
    mykey: "value"
   };
   function addProperty(obj, key){
    obj[key]="true";
    console.log(obj);
   }
   addProperty(obj,'mykey');


   //Write a function called “removeProperty”.
   var obj = {
    mykey: "value"
   };
   function removeProperty(obj, key){
    obj[key]="";
    console.log(obj.key);
   }
   removeProperty(obj,'mykey');


   //Return an array, where the first element is the count of positives
   // numbers and the second element is sum of negative numbers.
   var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function (arr) {
    var positive=0,c=[],sum=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>=0){
            positive++;
        }else if(arr[i]<0){
            
            arr[i]=-(1*arr[i]);
            sum=sum+arr[i];    
        }
        
    }
    
console.log(positive,sum);
}
ar2(arr);



//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar)
{
 var c=[];
 for(var i=0;i<ar.length;i++){
     if(ar[i]>=0){

         c.push(ar[i]);
     }
 }
 console.log(c);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
getPositives(ar);



//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n){
    var c=[];
  for(var i=0;i<=n;i++){
c.push(Math.pow(2,i));
  }
  console.log(c);
  }

powersOfTwo(5);


//Find the maximum number in an array of numbers
function findMax(ar)
{
var maxvar=-Infinity;
for(var i in ar){
    if(ar[i]>maxvar){
        maxvar=ar[i];
    }
}
return maxvar;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);


//Reverse a string
reverseString("JavaScript");

function reverseString(s)
{
    var c=[];
 for (var i=s.length-1;i>=0;i--){
 c.push(s[i]);
 }
 console.log(c.join(''));
}


//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 
 for(let el of ar2)
 {
 result.push(el);
 }
 return result;
}



//Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
    let strArr = s.split(",");
    let sum = strArr.reduce(function(total, num){
        return parseFloat(total) + parseFloat(num);
    });
    return sum;
}

