function updateTime() {
  //Tokyo
  let tokyoTime = moment.tz("Asia/Tokyo");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss[<small>] A[</small>]");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do[,] YYYY");
  //Sydney
  let sydneyTime = moment.tz("Australia/Sydney");
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss[<small>] A[</small>]"
  );
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do[,] YYYY");
}

updateTime();
setInterval(updateTime, 1000);
