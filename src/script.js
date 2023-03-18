function updateTime() {
  //Tokyo
  let tokyoTime = moment.tz("Asia/Tokyo");
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss A");
    tokyoDateElement.innerHTML = tokyoTime.format("dddd MMMM D[,] YYYY");
  }
  //Sydney
  let sydneyTime = moment.tz("Australia/Sydney");
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss A");
    sydneyDateElement.innerHTML = sydneyTime.format("dddd MMMM D[,] YYYY");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city"> <div>
   <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        <div class="time">${cityTime.format("h:mm:ss A")}</div>
       </div>
       `;
}
updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
