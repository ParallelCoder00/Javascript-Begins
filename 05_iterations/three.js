// for of loop

let arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
  console.log(`your array is : ${num}`);
}

let arr1 = ["jatin", "nitin", "superman"];
for (const elements of arr1) {
  console.log(elements);
}
// Maps

const mymap = new Map();
mymap.set("IN", "India");
mymap.set("UK", "United Kingdom");
mymap.set("AU", "Australia");

console.log(mymap);

//  for (const keys of mymap) {
//     console.log(keys);

//  }

for (const [key , value] of mymap) {
    console.log(key ,':', mymap);
    
}
