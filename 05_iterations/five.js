// For each loop

// By using normal function
const arr = ["js", "py", "java", "cpp"]
arr.forEach(   function (item){
    // console.log(item);
}  )

// By using arrow function
const arr1 = ["js", "py", "java", "cpp"]
arr.forEach(  (item) => {
    console.log(item);   
}  )

// If I want to print the index also with the values
const arr2 = ["js", "py", "java", "cpp"]
arr.forEach(  (item , index,arr) => {
    console.log(item,index,arr); 
} )


// This is how we take out any item inside object by using foreach loop
const printme = [
    {
        name : "jatin",
        name2 : "singh",
    },
    {
        name : "avesh",
        name2 : "khan",
    },
    {
        name : "aman",
        name2 : "thakur",
    },    
]
printme.forEach( (item) => {

    console.log(item.name2);
    
} )



