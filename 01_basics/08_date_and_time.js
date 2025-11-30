let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2025 , 9 , 4)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toDateString("04-10-2005"));

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let thisDate = new Date()
console.log(thisDate.getMonth() + 1);
console.log(thisDate.getDate());
console.log(thisDate.getFullYear());



thisDate.toLocaleString('default',{
    weekday: "long"
})










