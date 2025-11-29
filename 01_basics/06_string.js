// String can be written in "" ; '' ; `` ; 
// String is immutable, whichever change we do, we always do in copy not in orginal value

let first = "Jatin";
console.log(first.length); //5
console.log(first.charAt(4)); //n

// Searching in a String

let second = "java script with chai aur code";
console.log(second.indexOf("c")); //6
console.log(second.lastIndexOf("c")); //26
console.log(second.includes("with")); //true
console.log(second.includes("scene")); //false
console.log(second.startsWith("java")); //true
console.log(second.endsWith("code")); //true
console.log(second.endsWith("chai")); //false

// Extracting Substrings

let third = "Mitochondria"
console.log(third.slice(0 , 3)); //Mit
console.log(third.slice(-5)); //ndria
console.log(third.substring(1 , 5)); //itoc
console.log(third.toUpperCase()); //MITOCHONDRIA
console.log(third.toLowerCase()); //mitochondria

let fourth = "  jatin  "
console.log(fourth); //  jatin  //
console.log(fourth.trim()); //jatin//
console.log(fourth.trimStart());//jatin  //
console.log(fourth.trimEnd());//  jatin//
console.log(fourth.replace("t" , "s")); //jasin
console.log(fourth.replaceAll("n" , "s")); //jatis

// Splitting and Joining

let fruits = "apple , banana , mango , orange"
console.log(fruits.split("-")); // converts string to array
// Their is join function also which converts array into string

let six = "hello"
let seven = "world"
console.log("hello" + " world"); //hello world //not recommended
console.log(`I want to run ${six} ${seven}`); // I want to run hello world //recommended
console.log(six.concat(seven)); // helloworld
console.log(typeof(seven));

let eight = 100
console.log(eight.toString()); // 100 but it is string, not the original one

let nine = "ha"
console.log(nine.repeat(5));
console.log(nine.padStart(6 , 0));
console.log(nine.padEnd(6 , 0));
let ten = "c"
console.log(ten.localeCompare("b"));
console.log(ten.localeCompare("a"));
console.log(ten.localeCompare("s"));

// Main Main string functions are over their are few left we will learn them along side creating project


























