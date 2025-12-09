// IF and ELSE

if(3 == 4){
    console.log("jatin");
}
else {
    console.log("nitin");
}
//OPERATORS

// = , == , === , != , <= , >= , < , >

const score = 200
if(score > 100){
    console.log(`the score is ${score}`);  
}

if(true) console.log("jatin") , console.log("Nitin"); // Never write this type of code this is unreadable 

const userIsLoggedIn = true
const debitCard = true
const isLoggedInUsingGoogle = false
const isLoggedInUsingEmail = true

if (userIsLoggedIn && debitCard){
    console.log("User is allow to purchase");
    
}

if(isLoggedInUsingEmail || isLoggedInUsingGoogle){
    console.log("user has logged in");
    
}
