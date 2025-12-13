const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter the valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter the valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result and message
    let message = "";
    if (BMI < 18.6) {
      message = "You are Under Weight EAT MORE!";
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      message = "You are at Normal range CONGO!";
    } else {
      message = "You are Over Weight EAT LESS!";
    }
    results.innerHTML = `<span>${BMI}</span><br><P>${message}</P>`;
  }
});
