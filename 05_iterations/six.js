//filter
const myArr = [1 , 2 , 3 , 4 , 5]
const newArr = myArr.filter( (num) => num < 4 )
console.log(newArr);
// We can also use foreach loop for fetching the elements of array from any range to any range but filter is considered more simple and readable

//map
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const myresult = myNumbers.map((nums) => { return nums + 20 })
console.log(myresult);

// We can also apply multiple maps or filter with each after the other 
const numbers = [1,2,3,4,5,6,7,8,9,10]
const myresult1 = numbers
                .map((nums) => nums * 10)
                .map((nums) => nums + 5 )
                .filter((nums) => nums > 50)
console.log(myresult1);

