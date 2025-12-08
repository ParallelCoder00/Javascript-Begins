// how to create a object

const mySum = Object("num1")

 const myJs = {
    name : "jatin",
    [mySum] : "num2",
    roll : 52,
    age : 20,
    email : "jatinsingh.google@gmail.com",
    location : "indore",
 }

console.log(myJs.email);
// console.log(myJs["email"]);
console.log(myJs[mySum]);
myJs.email = "happysingh.google@gmail.com"
console.log(myJs.email);
// Object.freeze(myJs)
myJs.email = "nitinsingh.google@gmail.com"
console.log(myJs);

myJs.greeting = function(){
    console.log("hello js user");
    
}
myJs.greetingtwo = function(){
    console.log(`hello js user, ${this.email}`);
    
}
console.log(myJs.greeting());
console.log(myJs.greetingtwo());
// Always use . to access the object cotent like {console.log(myJs.email);}
// In somecases we can use "" to access the object content
// In interview or special cases we use [] to access the object content




