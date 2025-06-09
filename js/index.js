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

//Конец Slider

// Coffee Tea Dessert menu
const mainSecond = document.querySelector(".mainSecond");
const coffeeTabsMain = document.querySelector(".coffeeTabsMain");
const teaTabsMain = document.querySelector(".teaTabsMain");
const dessertTabsMain = document.querySelector(".dessertTabsMain");
const gridCoffeeMain = document.querySelector(".gridCoffeeMain");
const gridTeaMain = document.querySelector(".gridTeaMain");
const gridDessertMain = document.querySelector(".gridDessertMain");
coffeeTabsMain.addEventListener("click", function () {
  gridTeaMain.style.display = "none";
  gridDessertMain.style.display = "none";
  gridCoffeeMain.style.display = "flex";
  coffeeTabsMain.classList.add("activeTabs");
  teaTabsMain.classList.remove("activeTabs");
  dessertTabsMain.classList.remove("activeTabs");
  mainSecond.style.height = 83 + "rem";
});
teaTabsMain.addEventListener("click", function () {
  gridCoffeeMain.style.display = "none";
  gridDessertMain.style.display = "none";
  gridTeaMain.style.display = "flex";
  teaTabsMain.classList.add("activeTabs");
  coffeeTabsMain.classList.remove("activeTabs");
  dessertTabsMain.classList.remove("activeTabs");
  mainSecond.style.height = 48.875 + "rem";
});
dessertTabsMain.addEventListener("click", function () {
  gridCoffeeMain.style.display = "none";
  gridTeaMain.style.display = "none";
  gridDessertMain.style.display = "flex";
  dessertTabsMain.classList.add("activeTabs");
  coffeeTabsMain.classList.remove("activeTabs");
  teaTabsMain.classList.remove("activeTabs");
  mainSecond.style.height = 83 + "rem";
});
// End Coffee Tea Dessert menu
