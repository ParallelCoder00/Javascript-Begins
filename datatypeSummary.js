// Two types of main datatypes :
// 1. Primitive
// 2. Non-Primitive

//Primitive - String, Boolean, null, undefined, number, symbol, BigInt
const name = "Jatin Singh"
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('445')
const secondId = Symbol('445')


//Non-primitive
// Array, Objects, Functions

const Heroes = ["saktimaan" , "nagraj" , "Doga"];

let myObj = {
    name : "jatin",
    age : 20,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof secondId) // null has object datatype

// typeof of every non primitive datatype is object except function it has function datatype




