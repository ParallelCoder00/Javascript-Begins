let score = "33nod"

console.log(score)

let valueInnumber = Number(score)
console.log(typeof valueInnumber)
console.log(valueInnumber)

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

// If we are converting in boolean Then
// 1 => True , 0 => false
// "" => False
// "jatin" => True

// Similarly we can convert into string also just by putting string in front of the number or boolean

// ********************************Operations*********************************

let value = 3
negValue = -value
console.log(negValue)

// console.log(2-2);
// console.log(2+2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = 3
let str2 = 4
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
console.log(1 + 2 + "3" * 2); 

//never write this type of code , it will be very confusing for client or company, they will reject the code as soon as they see it. Just put some brackets to look cleaner

let a = 4
let b = a++
console.log(a , b); // expected result a = 5, b = 4

let x = 4
let y = ++x
console.log(x , y); // expected result x = 5 , y = 5

// Keep in mind postfix and prefix is little tricky
// postfix = pahle use , baadme update
// prefix = pahle update , baadme use







