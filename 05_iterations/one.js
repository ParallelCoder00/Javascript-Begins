// for loop
// for (let i = 0; i < 5; i++) {
//     const element = i;
//     console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//     console.log(`the outer loop: ${i}`);
//     for (let j = 0; j <=10 ; j++) {
//         // const element = [j];
//         console.log(i + '*' + j + '=' + i*j);
//     }   
// }
let myArray = ["flash", "superman", "batman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log("5 is detected");
        break
    }
    console.log(index);
    
}
for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log("5 is detected");
        continue
    }
    console.log(index);
    
}