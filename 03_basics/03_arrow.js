const user = {
    username: "jatin",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to our website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "nitin"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
    
// }
// chai()

// let newnum = (num1,num2) => {
//     return num1 + num2
// }
// console.log(newnum(3 , 6))

let newnum = (num1,num2) => num1 + num2
console.log(newnum(5 ,6));


let newnum1 = (num1,num2) => (num1 + num2)
console.log(newnum1(100 , 200));


//point to be noted is that if we use () no need to use return keyword and if we use {} braces we have to use return keyword [IN ARROW FUNCTION]



