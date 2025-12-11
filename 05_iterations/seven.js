// Reduce 
const myNum = [2, 5, 8];
const result = myNum.reduce(
  (acc, currval) => {console.log(`acc: ${acc} currval: ${currval}`)
   return acc + currval}, 0);
console.log(result);
// This is a little tough loop or something but its super helpful for suming up multiple items prize in single or less lines