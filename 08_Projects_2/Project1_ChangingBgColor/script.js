// Generating random colors
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[parseInt(Math.random() * 16)];
  }
  return color;
};
let intervalID;
const startChangingColor = function(){
    document.body.style.background = randomColor()
}

document.querySelector("#start").addEventListener("click", function(){
    if(!intervalID){
    intervalID = setInterval(startChangingColor , 1000)
    }
})

document.querySelector("#stop").addEventListener("click", function(){
    clearInterval(intervalID)
    intervalID = null;
})
