// Array 
// we can declare array in two ways 
// first like (let arr[])
// second like (let myarr = new Arr())
const myArr = [1,2,3,4,5,6];
console.log(myArr[1]);
console.log(myArr.length);



myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(0)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr);

console.log(myArr.indexOf(5));
console.log(myArr);


const secondArr = myArr.join()
console.log( secondArr);

console.log(" A" , myArr);
console.log(myArr.slice(1 , 4))

const myn1 = myArr

console.log(" B" , myn1);
console.log(myArr.splice(1 , 4));
const myn2 = myArr 
console.log(myn2);

const onepiece = ["luffy" , "zoro" , "sanji"]
const naruto = ["naruto" , "sasuke" , "madara"]

// onepiece.push(naruto)
// console.log(onepiece);
// const anime = onepiece.concat(naruto)
// console.log(anime);
const anime1 = [...onepiece , ...naruto] // this is the best way to concate the arrays
console.log(anime1);

const anime2 = [1 , 2 , 3 , [4 , 5 ], 6 , [1 , 2 , [3 , 4] ,5 , 6]]
console.log(anime2.flat(Infinity))

console.log(Array.from("Jatin"));

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1, num2, num3));


 



