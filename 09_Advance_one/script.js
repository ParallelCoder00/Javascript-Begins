const cardstyle = document.querySelector("#card");
cardstyle.style.backgroundColor = "purple"; 
cardstyle.style.border = "2px solid black";
cardstyle.style.padding = "10px";
cardstyle.style.margin = "10px";
cardstyle.style.borderRadius = "10px";
cardstyle.style.color = "white";
cardstyle.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.3)";
cardstyle.style.fontFamily = "Arial, sans-serif";
cardstyle.style.textAlign = "center";
cardstyle.style.transition = "transform 0.3s, box-shadow 0.3s";

const getUrl = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();

let data = null;

xhr.open("GET", getUrl);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { 
    console.log("Status:",xhr.status);
    if(xhr.status === 200){
        data = JSON.parse(this.responseText);
        console.log("data loaded", data);
        
    } else {
        console.error("API error")
    }
  }
};
xhr.send();
const result = document.querySelector("#show");
result.addEventListener("click", function () {
  if (!data) {
    alert("The data is not fetched yet!!");
    return;
  }
  const card = document.querySelector("#card");
  card.innerHTML = `<img src="${data.avatar_url}" width="150" style="border-radius:50%">
    <h3>Followers: ${data.followers}</h3>`;
});


// I have to revise this since it is not well understandable and it is tough to use little bit 
// APIs are little bit complex for beginners so its tough to understand in start