// singleton object
// const tinderuser = Object()

// non - singleton object
const tinderuser = {}

tinderuser.name = "jatin"
tinderuser.age = 21
tinderuser.isLogedin = false
tinderuser.city = "korba"

// console.log(tinderuser);

const fbook = {
    fullname : {
        firstname : "jatin",
        lastname : "singh"
    }
}

// console.log(fbook.fullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj3 = {...obj1 , ...obj2} //spread method to concatnate two objects
// console.log(obj3);


// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty(`isLogedin`));



// ---------------------------------De - Structure--------------------------------------------------

const ghar = {
    head: "papa",
    vicehead: "mummy",
    bigson: "jatin",
}    
// console.log(ghar.vicehead);

const {bigson: son} = ghar
console.log(son);
