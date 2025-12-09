const email = "jatin@google.com"
if(email){
    console.log("email found");
    
}

// FALSY VALUES

// false , 0 , -0 , null , undefined , BigInt 0n , "" , NaN 

// TRUTHY VALUES

// [] , " " , "0" , `0` , 'false' ,  {} , function(){} 
// Anything inside string is truthy value

let myArr = [];
if(myArr.length === 0){
    console.log("Array is empty");
    
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}

// Null Coalescing operator (??):
// This operator is used for ignoring the null and undefined element

let val1 = 55 ?? 66
val1 = null ?? 100
val1 = undefined ?? 50
val1 = null ?? undefined ?? 10 ?? 30
console.log(val1);

// Terniary operator
// condition ? true : false;

let jatincourse = 999
jatincourse >= 1200 ? console.log("NO its not less then 999") : console.log("Yes its less then 999");

