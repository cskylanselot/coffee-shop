// Slider

const sliderMain = document.querySelector(".sliderMain");
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
const control1 = document.querySelector(".control1");
const control2 = document.querySelector(".control2");
const control3 = document.querySelector(".control3");
let offset = 0;

arrowRight.addEventListener("click", nextSlide);

function nextSlide() {
  offset = offset + 50;
  if (offset > 100) {
    offset = 0;
  }
  sliderMain.style.left = -offset + "rem";
  if (offset == 0) {
    control1.classList.add("controlActive");
    control2.classList.remove("controlActive");
    control3.classList.remove("controlActive");
  }
  if (offset == 50) {
    control2.classList.add("controlActive");
    control1.classList.remove("controlActive");
    control3.classList.remove("controlActive");
  }
  if (offset == 100) {
    control3.classList.add("controlActive");
    control2.classList.remove("controlActive");
    control1.classList.remove("controlActive");
  }
}

arrowLeft.addEventListener("click", prevSlide);
function prevSlide() {
  offset = offset - 50;
  if (offset < 0) {
    offset = 100;
  }
  sliderMain.style.left = -offset + "rem";
  if (offset == 0) {
    control1.classList.add("controlActive");
    control2.classList.remove("controlActive");
    control3.classList.remove("controlActive");
  }
  if (offset == 50) {
    control2.classList.add("controlActive");
    control1.classList.remove("controlActive");
    control3.classList.remove("controlActive");
  }
  if (offset == 100) {
    control3.classList.add("controlActive");
    control2.classList.remove("controlActive");
    control1.classList.remove("controlActive");
  }
}

let avtoSlider;

function startSlider() {
  avtoSlider = setInterval(nextSlide, 5000);
}

function stopSlider() {
  clearInterval(avtoSlider);
}

startSlider();

sliderMain.addEventListener("mouseover", stopSlider);
sliderMain.addEventListener("mouseout", startSlider);

//Конец Slider

// menu click
const coffeeMenuMain = document.querySelector(".coffee-menuMain");
const heroMenu = document.querySelector(".heroMenu");
const hero = document.querySelector(".hero");
const header = document.querySelector(".header");
const mainFirst = document.querySelector(".mainFirst");
let flag = true;

function menuOpen() {
  if (flag) {
    header.style.height = 3.75 + "rem";
    hero.style.display = "none";
    mainFirst.style.display = "none";
    mainSecond.style.display = "flex";
    flag = false;
  } else {
    header.style.height = 45.25 + "rem";
    hero.style.display = "flex";
    mainFirst.style.display = "block";
    mainSecond.style.display = "none";
    flag = true;
  }
}
coffeeMenuMain.addEventListener("click", menuOpen);
heroMenu.addEventListener("click", menuOpen);
// menu click end

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

// Coffee Buy Menu click
const coffeeGrid1 = document.querySelector(".coffeeGrid1");
const backDrop = document.querySelector(".backDrop");
const coffeeBuyMenuClose = document.querySelector(".coffeeBuyMenuClose");
const IrishID = document.getElementById("IrishID");

coffeeBuyMenuClose.addEventListener("click", function () {
  backDrop.style.display = "none";
  IrishID.style.display = "none";
});
coffeeGrid1.addEventListener("click", function () {
  backDrop.style.display = "flex";
  IrishID.style.display = "flex";
});

// Coffee Buy Menu click End
