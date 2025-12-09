//Switch case

const month = 2
switch (month) {
    case 1:
        console.log("jan");
        
        break;
    case 2:
        console.log("feb");
        
        break;
    case 3:
        console.log("march");
        
        break;    

    default:
        console.log("No month matched");
        
        break;
}

// You can also give key or condition in string not just in number

const month1 = "oct"
switch (month1) {
    case "jan":
        console.log("jan");
        
        break;
    case "feb":
        console.log("feb");
        
        break;
    case "oct":
        console.log("october");
        
        break;    

    default:
        console.log("No month matched");
        
        break;
}