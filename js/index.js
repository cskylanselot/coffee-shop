// Slider
const sliderMain = document.querySelector(".sliderMain");
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
let offset = 0;
arrowRight.addEventListener("click", function () {
  offset = offset + 50;
  if (offset > 100) {
    offset = 0;
  }
  sliderMain.style.left = -offset + "rem";
});
arrowLeft.addEventListener("click", function () {
  offset = offset - 50;
  if (offset < 0) {
    offset = 100;
  }
  sliderMain.style.left = -offset + "rem";
});
//
