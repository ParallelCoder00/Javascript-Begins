

function sayMyname(){
    console.log("J");
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("N");
    }
// sayMyname()

// function addTwonumbers(num1 , num2){
//     console.log(num1 + num2)
// }
function addTwonumbers(num1 , num2){
    const result = num1 + num2
    return result    
}


const result = addTwonumbers(2 , 4)
console.log("Result: ", result);

function loginUserMessage(username = "nitin"){
        if(!username){
            console.log("Please enter the valid username");
            return
        }
        return `${username} just logged in`
    }
console.log(loginUserMessage("elon musk"))


function cartPrice(...num1){
    console.log(num1);
    
}
cartPrice(200 , 300 , 400)

const user = {
    name: "jatin",
    age: 20,
    price: "Rs 2345",
}
function myUser(anyobject){
    console.log(`username is ${anyobject.name} and the price is ${anyobject.price}`);
    
}
myUser(user)

const myArray = [100, 200, 300, 400]
function printMyArray(getArray){
    console.log(getArray[1]);
    
}
printMyArray([100,600,300,400])