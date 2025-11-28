// Memory is of two types in JS
// 1. Stack(Primitive) 2. Heap(Non-Primitive)
// Since stack is only used in primitive, it means the change in the copy will happen since it is call by value type
// Since Heap is only used in non-primitive, it means the change in the original value will happen since it is call by reference

let myEmail = "jatin@facebook.com" 
let storeEmail = myEmail
storeEmail = "jatin@google.com"

console.log(myEmail)
console.log(storeEmail)

let myObj = {
    name : "jatin",
    age : 20,
}
let anotherObj = myObj
anotherObj.name = "Singh"

console.log(anotherObj.name)
console.log(myObj.name)