// Slider

const sliderMain = document.querySelector(".sliderMain");
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
const control1 = document.querySelector(".control1");
const control2 = document.querySelector(".control2");
const control3 = document.querySelector(".control3");

const progressBars = document.querySelectorAll(".progressBar");

let offset = 0;
let progress = 0;
let intervalID = null;
let avtoSlider = null;
let bar = null;

// Запуск прогресс-бара
function startProgressBar() {
  clearInterval(intervalID);
  progress = 0;

  // Сброс всех полосок
  progressBars.forEach((b) => (b.style.width = "0%"));

  const controlActive = document.querySelector(".controlActive");

  if (!controlActive) return; // <-- исправление: защита от null

  bar = controlActive.querySelector(".progressBar");

  if (!bar) return;

  intervalID = setInterval(() => {
    progress++;
    bar.style.width = progress + "%";
    if (progress >= 100) {
      clearInterval(intervalID);
      bar.style.width = "0%";
    }
  }, 50);
}

// Приостановка и возобновление
function pauseProgressBar() {
  clearInterval(intervalID);
  clearInterval(avtoSlider);
  avtoSlider = null;
}

function resumeProgressBar() {
  // Продолжение бара, если он не закончен
  if (progress < 100 && bar) {
    clearInterval(intervalID); // защита от двойного запуска
    intervalID = setInterval(() => {
      progress++;
      bar.style.width = progress + "%";
      if (progress >= 100) {
        clearInterval(intervalID);
        bar.style.width = "0%";
      }
    }, 50);
  }

  // Продолжение автослайдера
  if (!avtoSlider) {
    avtoSlider = setInterval(nextSlide, 5000);
  }
}

// Сброс и перезапуск слайдера и бара
function resetSlider() {
  clearInterval(avtoSlider);
  clearInterval(intervalID);
  avtoSlider = setInterval(nextSlide, 5000);
  startProgressBar();
}

// Переключение слайдов
function nextSlide() {
  offset += 50;
  if (offset > 100) offset = 0;
  updateSlider();
}

function prevSlide() {
  offset -= 50;
  if (offset < 0) offset = 100;
  updateSlider();
}

// Обновление позиции и активного индикатора
function updateSlider() {
  sliderMain.style.left = -offset + "rem";

  control1.classList.toggle("controlActive", offset === 0);
  control2.classList.toggle("controlActive", offset === 50);
  control3.classList.toggle("controlActive", offset === 100);

  resetSlider(); // сбросим всё и начнём с начала
}

// Переключение слайдов
function nextSlidePhone() {
  offset += 44;
  if (offset > 88) offset = 0;
  updateSliderPhone();
}

function prevSlidePhone() {
  offset -= 44;
  if (offset < 0) offset = 88;
  updateSliderPhone();
}

// Обновление позиции и активного индикатора
function updateSliderPhone() {
  sliderMain.style.left = -offset + "rem";

  control1.classList.toggle("controlActive", offset === 0);
  control2.classList.toggle("controlActive", offset === 44);
  control3.classList.toggle("controlActive", offset === 88);

  resetSliderPhone(); // сбросим всё и начнём с начала
}

function resetSliderPhone() {
  clearInterval(avtoSlider);
  clearInterval(intervalID);
  avtoSlider = setInterval(nextSlidePhone, 5000);
  startProgressBar();
}

// Слушатели
arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", prevSlide);

sliderMain.addEventListener("mouseover", pauseProgressBar);
sliderMain.addEventListener("mouseout", resumeProgressBar);
arrowRight.addEventListener("mouseover", pauseProgressBar);
arrowRight.addEventListener("mouseout", resumeProgressBar);
arrowLeft.addEventListener("mouseover", pauseProgressBar);
arrowLeft.addEventListener("mouseout", resumeProgressBar);

// Старт
function startSlider() {
  if (window.matchMedia("(max-width: 380px)").matches) {
    startProgressBar();
    avtoSlider = setInterval(nextSlidePhone, 5000);
  } else {
    startProgressBar();
    avtoSlider = setInterval(nextSlide, 5000);
  }
}

startSlider();
//Конец Slider

// menu click
const mainContainer = document.querySelector(".mainContainer");
const mainSecond = document.querySelector(".mainSecond");
const coffeeMenuMain = document.querySelector(".coffee-menuMain");
const heroMenu = document.querySelector(".heroMenu");
const burgerListMenuText = document.querySelector(".burgerListMenuText");
const hero = document.querySelector(".hero");
const header = document.querySelector(".header");
const StartMenuBack = document.querySelector(".StartMenuBack");
const mainFirst = document.querySelector(".mainFirst");
let flag = true;

function menuOpen() {
  if (flag) {
    header.style.height = 3.75 + "rem";
    hero.style.display = "none";
    mainFirst.style.display = "none";
    mainSecond.style.display = "flex";
    if (window.matchMedia("(max-width: 380px)").matches) {
      mainContainer.style.height = 208.5 + "rem";
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      mainContainer.style.height = 160 + "rem";
    }
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
StartMenuBack.addEventListener("click", menuOpen);
burgerListMenuText.addEventListener("click", function () {
  menuOpen();
  burgerMenu.style.display = "none";
});
// menu click end

// Coffee Tea Dessert menu
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
  if (window.matchMedia("(max-width: 768px)").matches) {
    mainSecond.style.height = 98.938 + "rem";
  }
  if (window.matchMedia("(max-width: 380px)").matches) {
    mainSecond.style.height = 155.625 + "rem";
  }
});
teaTabsMain.addEventListener("click", function () {
  gridCoffeeMain.style.display = "none";
  gridDessertMain.style.display = "none";
  gridTeaMain.style.display = "flex";
  teaTabsMain.classList.add("activeTabs");
  coffeeTabsMain.classList.remove("activeTabs");
  dessertTabsMain.classList.remove("activeTabs");
  mainSecond.style.height = 48.875 + "rem";
  if (window.matchMedia("(max-width: 768px)").matches) {
    mainSecond.style.height = 98.938 + "rem";
  }
  if (window.matchMedia("(max-width: 380px)").matches) {
    mainSecond.style.height = 155.625 + "rem";
  }
});
dessertTabsMain.addEventListener("click", function () {
  gridCoffeeMain.style.display = "none";
  gridTeaMain.style.display = "none";
  gridDessertMain.style.display = "flex";
  dessertTabsMain.classList.add("activeTabs");
  coffeeTabsMain.classList.remove("activeTabs");
  teaTabsMain.classList.remove("activeTabs");
  mainSecond.style.height = 83 + "rem";
  if (window.matchMedia("(max-width: 768px)").matches) {
    mainSecond.style.height = 98.938 + "rem";
  }
  if (window.matchMedia("(max-width: 380px)").matches) {
    mainSecond.style.height = 155.625 + "rem";
  }
});
// End Coffee Tea Dessert menu

// Coffee Buy Menu click
const coffeeGrid1 = document.querySelector(".coffeeGrid1");
const coffeeGrid2 = document.querySelector(".coffeeGrid2");
const coffeeGrid3 = document.querySelector(".coffeeGrid3");
const coffeeGrid4 = document.querySelector(".coffeeGrid4");
const coffeeGrid5 = document.querySelector(".coffeeGrid5");
const coffeeGrid6 = document.querySelector(".coffeeGrid6");
const coffeeGrid7 = document.querySelector(".coffeeGrid7");
const coffeeGrid8 = document.querySelector(".coffeeGrid8");
const backDrop = document.querySelector(".backDrop");
const coffeeBuyMenuClose = document.querySelectorAll(".coffeeBuyMenuClose");
const IrishID = document.getElementById("IrishID");
const KahluaID = document.getElementById("KahluaID");
const HoneyRafID = document.getElementById("HoneyRafID");
const IceCappuccinoID = document.getElementById("IceCappuccinoID");
const EspressoID = document.getElementById("EspressoID");
const LatteID = document.getElementById("LatteID");
const LatteMacchiatoID = document.getElementById("LatteMacchiatoID");
const CoffeeWithCognacID = document.getElementById("CoffeeWithCognacID");

coffeeGrid1.addEventListener("click", function () {
  backDrop.style.display = "flex";
  IrishID.style.display = "flex";
});
coffeeGrid2.addEventListener("click", function () {
  backDrop.style.display = "flex";
  KahluaID.style.display = "flex";
});
coffeeGrid3.addEventListener("click", function () {
  backDrop.style.display = "flex";
  HoneyRafID.style.display = "flex";
});
coffeeGrid4.addEventListener("click", function () {
  backDrop.style.display = "flex";
  IceCappuccinoID.style.display = "flex";
});
coffeeGrid5.addEventListener("click", function () {
  backDrop.style.display = "flex";
  EspressoID.style.display = "flex";
});
coffeeGrid6.addEventListener("click", function () {
  backDrop.style.display = "flex";
  LatteID.style.display = "flex";
});
coffeeGrid7.addEventListener("click", function () {
  backDrop.style.display = "flex";
  LatteMacchiatoID.style.display = "flex";
});
coffeeGrid8.addEventListener("click", function () {
  backDrop.style.display = "flex";
  CoffeeWithCognacID.style.display = "flex";
});

coffeeBuyMenuClose.forEach(function (close) {
  close.addEventListener("click", function () {
    backDrop.style.display = "none";
    IrishID.style.display = "none";
    KahluaID.style.display = "none";
    HoneyRafID.style.display = "none";
    IceCappuccinoID.style.display = "none";
    EspressoID.style.display = "none";
    LatteID.style.display = "none";
    LatteMacchiatoID.style.display = "none";
    CoffeeWithCognacID.style.display = "none";
  });
});
// Coffee Buy Menu Button click
const SizeS = document.querySelectorAll(".SizeS");
const SizeSText = document.querySelectorAll(".SizeSText");
const SizeSIcon = document.querySelectorAll(".SizeSIcon");
const SizeM = document.querySelectorAll(".SizeM");
const SizeMText = document.querySelectorAll(".SizeMText");
const SizeMIcon = document.querySelectorAll(".SizeMIcon");
const SizeL = document.querySelectorAll(".SizeL");
const SizeLText = document.querySelectorAll(".SizeLText");
const SizeLIcon = document.querySelectorAll(".SizeLIcon");

const Additives1 = document.querySelectorAll(".Additives1");
const AdditivesIcon1 = document.querySelectorAll(".AdditivesIcon1");
const AdditivesText1 = document.querySelectorAll(".AdditivesText1");
const Additives2 = document.querySelectorAll(".Additives2");
const AdditivesIcon2 = document.querySelectorAll(".AdditivesIcon2");
const AdditivesText2 = document.querySelectorAll(".AdditivesText2");
const Additives3 = document.querySelectorAll(".Additives3");
const AdditivesIcon3 = document.querySelectorAll(".AdditivesIcon3");
const AdditivesText3 = document.querySelectorAll(".AdditivesText3");

SizeS.forEach((sizeS, index) => {
  sizeS.addEventListener("click", () => {
    SizeM[index].classList.remove("SizeActive");
    SizeMText[index].classList.remove("SizeActive1");
    SizeMIcon[index].classList.remove("SizeActive2");
    SizeL[index].classList.remove("SizeActive");

    SizeLText[index].classList.remove("SizeActive1");
    SizeLIcon[index].classList.remove("SizeActive2");
    SizeSIcon[index].classList.remove("SizeActive3");

    sizeS.classList.add("SizeActive");
    SizeLIcon[index].classList.add("SizeActive3");
    SizeMIcon[index].classList.add("SizeActive3");
    SizeSText[index].classList.add("SizeActive1");
    SizeSIcon[index].classList.add("SizeActive2");

    AdditivesClear();
  });
});

SizeM.forEach((sizeM, index) => {
  sizeM.addEventListener("click", () => {
    SizeS[index].classList.remove("SizeActive");
    SizeSText[index].classList.remove("SizeActive1");
    SizeSIcon[index].classList.remove("SizeActive2");

    SizeL[index].classList.remove("SizeActive");
    SizeLText[index].classList.remove("SizeActive1");
    SizeLIcon[index].classList.remove("SizeActive2");
    SizeMIcon[index].classList.remove("SizeActive3");

    sizeM.classList.add("SizeActive");
    SizeLIcon[index].classList.add("SizeActive3");
    SizeMText[index].classList.add("SizeActive1");
    SizeMIcon[index].classList.add("SizeActive2");
    SizeSIcon[index].classList.add("SizeActive3");

    AdditivesClear();
  });
});

SizeL.forEach((sizeL, index) => {
  sizeL.addEventListener("click", () => {
    SizeM[index].classList.remove("SizeActive");
    SizeMText[index].classList.remove("SizeActive1");
    SizeMIcon[index].classList.remove("SizeActive2");

    SizeS[index].classList.remove("SizeActive");
    SizeSText[index].classList.remove("SizeActive1");
    SizeSIcon[index].classList.remove("SizeActive2");
    SizeLIcon[index].classList.remove("SizeActive2");
    SizeLIcon[index].classList.remove("SizeActive3");

    sizeL.classList.add("SizeActive");
    SizeLText[index].classList.add("SizeActive1");
    SizeLIcon[index].classList.add("SizeActive2");
    SizeSIcon[index].classList.add("SizeActive3");
    SizeMIcon[index].classList.add("SizeActive3");

    AdditivesClear();
  });
});

Additives1.forEach((additives1, index) => {
  additives1.addEventListener("click", () => {
    const isActive = additives1.classList.contains("SizeActive");
    if (isActive) {
      additives1.classList.remove("SizeActive");
      AdditivesText1[index].classList.remove("SizeActive1");
      AdditivesIcon1[index].classList.remove("SizeActive2");
      AdditivesIcon1[index].classList.add("SizeActive3");
    } else {
      AdditivesIcon1[index].classList.remove("SizeActive3");
      additives1.classList.add("SizeActive");
      AdditivesText1[index].classList.add("SizeActive1");
      AdditivesIcon1[index].classList.add("SizeActive2");
    }
  });
});
Additives2.forEach((additives2, index) => {
  additives2.addEventListener("click", () => {
    const isActive = additives2.classList.contains("SizeActive");
    if (isActive) {
      additives2.classList.remove("SizeActive");
      AdditivesText2[index].classList.remove("SizeActive1");
      AdditivesIcon2[index].classList.remove("SizeActive2");
      AdditivesIcon2[index].classList.add("SizeActive3");
    } else {
      AdditivesIcon2[index].classList.remove("SizeActive3");
      additives2.classList.add("SizeActive");
      AdditivesText2[index].classList.add("SizeActive1");
      AdditivesIcon2[index].classList.add("SizeActive2");
    }
  });
});

Additives3.forEach((additives3, index) => {
  additives3.addEventListener("click", () => {
    const isActive = additives3.classList.contains("SizeActive");
    if (isActive) {
      additives3.classList.remove("SizeActive");
      AdditivesText3[index].classList.remove("SizeActive1");
      AdditivesIcon3[index].classList.remove("SizeActive2");
      AdditivesIcon3[index].classList.add("SizeActive3");
    } else {
      AdditivesIcon3[index].classList.remove("SizeActive3");
      additives3.classList.add("SizeActive");
      AdditivesText3[index].classList.add("SizeActive1");
      AdditivesIcon3[index].classList.add("SizeActive2");
    }
  });
});

coffeeBuyMenuClose.forEach(function (close) {
  close.addEventListener("click", function () {
    backDrop.style.display = "none";
    IrishID.style.display = "none";
    KahluaID.style.display = "none";
    HoneyRafID.style.display = "none";
    IceCappuccinoID.style.display = "none";
    EspressoID.style.display = "none";
    LatteID.style.display = "none";
    LatteMacchiatoID.style.display = "none";
    CoffeeWithCognacID.style.display = "none";
  });
});

// Функция для очистки классов при смене выбора размера стакана для коффе и чая
function AdditivesClear() {
  Additives1.forEach((additives1, index) => {
    additives1.classList.remove("SizeActive");
    AdditivesText1[index].classList.remove("SizeActive1");
    AdditivesIcon1[index].classList.remove("SizeActive2");
    AdditivesIcon1[index].classList.add("SizeActive3");
  });
  Additives2.forEach((additives1, index) => {
    additives1.classList.remove("SizeActive");
    AdditivesText2[index].classList.remove("SizeActive1");
    AdditivesIcon2[index].classList.remove("SizeActive2");
    AdditivesIcon2[index].classList.add("SizeActive3");
  });
  Additives3.forEach((additives1, index) => {
    additives1.classList.remove("SizeActive");
    AdditivesText3[index].classList.remove("SizeActive1");
    AdditivesIcon3[index].classList.remove("SizeActive2");
    AdditivesIcon3[index].classList.add("SizeActive3");
  });
}

// Функция для очистки классов при смене выбора размера стакана для дессертов
function AdditivesClearDessert() {
  Additives1Dessert.forEach((additives1Dessert, index) => {
    additives1Dessert.classList.remove("SizeActive");
    AdditivesText1Dessert[index].classList.remove("SizeActive1");
    AdditivesIcon1Dessert[index].classList.remove("SizeActive2");
    AdditivesIcon1Dessert[index].classList.add("SizeActive3");
  });
  Additives2Dessert.forEach((additives1Dessert, index) => {
    additives1Dessert.classList.remove("SizeActive");
    AdditivesText2Dessert[index].classList.remove("SizeActive1");
    AdditivesIcon2Dessert[index].classList.remove("SizeActive2");
    AdditivesIcon2Dessert[index].classList.add("SizeActive3");
  });
  Additives3Dessert.forEach((additives1Dessert, index) => {
    additives1Dessert.classList.remove("SizeActive");
    AdditivesText3Dessert[index].classList.remove("SizeActive1");
    AdditivesIcon3Dessert[index].classList.remove("SizeActive2");
    AdditivesIcon3Dessert[index].classList.add("SizeActive3");
  });
}

// Coffee Buy Menu Button click end

// Coffee Buy Menu click End

// Tea buy menu click

const teaGrid1 = document.querySelector(".teaGrid1");
const teaGrid2 = document.querySelector(".teaGrid2");
const teaGrid3 = document.querySelector(".teaGrid3");
const teaGrid4 = document.querySelector(".teaGrid4");
const TeaBuyMenuClose = document.querySelectorAll(".TeaBuyMenuClose");
const MoroccanID = document.getElementById("MoroccanID");
const GingeID = document.getElementById("GingeID");
const CranberryID = document.getElementById("CranberryID");
const SeaBuckthornID = document.getElementById("SeaBuckthornID");

teaGrid1.addEventListener("click", function () {
  backDrop.style.display = "flex";
  MoroccanID.style.display = "flex";
});
teaGrid2.addEventListener("click", function () {
  backDrop.style.display = "flex";
  GingeID.style.display = "flex";
});
teaGrid3.addEventListener("click", function () {
  backDrop.style.display = "flex";
  CranberryID.style.display = "flex";
});
teaGrid4.addEventListener("click", function () {
  backDrop.style.display = "flex";
  SeaBuckthornID.style.display = "flex";
});

TeaBuyMenuClose.forEach(function (close) {
  close.addEventListener("click", function () {
    backDrop.style.display = "none";
    MoroccanID.style.display = "none";
    GingeID.style.display = "none";
    CranberryID.style.display = "none";
    SeaBuckthornID.style.display = "none";
  });
});

// Tea buy menu click end

// Dessert buy menu click
const dessertGrid1 = document.querySelector(".dessertGrid1");
const dessertGrid2 = document.querySelector(".dessertGrid2");
const dessertGrid3 = document.querySelector(".dessertGrid3");
const dessertGrid4 = document.querySelector(".dessertGrid4");
const dessertGrid5 = document.querySelector(".dessertGrid5");
const dessertGrid6 = document.querySelector(".dessertGrid6");
const dessertGrid7 = document.querySelector(".dessertGrid7");
const dessertGrid8 = document.querySelector(".dessertGrid8");
const DessertBuyMenuClose = document.querySelectorAll(".DessertBuyMenuClose");

const MarbleCheesecakeID = document.getElementById("MarbleCheesecakeID");
const RedVelvetID = document.getElementById("RedVelvetID");
const CheesecakesID = document.getElementById("CheesecakesID");
const CremeBruleeID = document.getElementById("CremeBruleeID");
const PancakesID = document.getElementById("PancakesID");
const HoneyCakeID = document.getElementById("HoneyCakeID");
const ChocolateCakeID = document.getElementById("ChocolateCakeID");
const BlackForestID = document.getElementById("BlackForestID");

dessertGrid1.addEventListener("click", function () {
  backDrop.style.display = "flex";
  MarbleCheesecakeID.style.display = "flex";
});
dessertGrid2.addEventListener("click", function () {
  backDrop.style.display = "flex";
  RedVelvetID.style.display = "flex";
});
dessertGrid3.addEventListener("click", function () {
  backDrop.style.display = "flex";
  CheesecakesID.style.display = "flex";
});
dessertGrid4.addEventListener("click", function () {
  backDrop.style.display = "flex";
  CremeBruleeID.style.display = "flex";
});
dessertGrid5.addEventListener("click", function () {
  backDrop.style.display = "flex";
  PancakesID.style.display = "flex";
});
dessertGrid6.addEventListener("click", function () {
  backDrop.style.display = "flex";
  HoneyCakeID.style.display = "flex";
});
dessertGrid7.addEventListener("click", function () {
  backDrop.style.display = "flex";
  ChocolateCakeID.style.display = "flex";
});
dessertGrid8.addEventListener("click", function () {
  backDrop.style.display = "flex";
  BlackForestID.style.display = "flex";
});

DessertBuyMenuClose.forEach(function (close) {
  close.addEventListener("click", function () {
    backDrop.style.display = "none";
    MarbleCheesecakeID.style.display = "none";
    RedVelvetID.style.display = "none";
    CheesecakesID.style.display = "none";
    CremeBruleeID.style.display = "none";
    PancakesID.style.display = "none";
    HoneyCakeID.style.display = "none";
    ChocolateCakeID.style.display = "none";
    BlackForestID.style.display = "none";
  });
});

// Dessert buy menu button click
const SizeSDessert = document.querySelectorAll(".SizeSDessert");
const SizeSTextDessert = document.querySelectorAll(".SizeSTextDessert");
const SizeSIconDessert = document.querySelectorAll(".SizeSIconDessert");
const SizeMDessert = document.querySelectorAll(".SizeMDessert");
const SizeMTextDessert = document.querySelectorAll(".SizeMTextDessert");
const SizeMIconDessert = document.querySelectorAll(".SizeMIconDessert");
const SizeLDessert = document.querySelectorAll(".SizeLDessert");
const SizeLTextDessert = document.querySelectorAll(".SizeLTextDessert");
const SizeLIconDessert = document.querySelectorAll(".SizeLIconDessert");

const Additives1Dessert = document.querySelectorAll(".Additives1Dessert");
const AdditivesIcon1Dessert = document.querySelectorAll(
  ".AdditivesIcon1Dessert"
);
const AdditivesText1Dessert = document.querySelectorAll(
  ".AdditivesText1Dessert"
);
const Additives2Dessert = document.querySelectorAll(".Additives2Dessert");
const AdditivesIcon2Dessert = document.querySelectorAll(
  ".AdditivesIcon2Dessert"
);
const AdditivesText2Dessert = document.querySelectorAll(
  ".AdditivesText2Dessert"
);
const Additives3Dessert = document.querySelectorAll(".Additives3Dessert");
const AdditivesIcon3Dessert = document.querySelectorAll(
  ".AdditivesIcon3Dessert"
);
const AdditivesText3Dessert = document.querySelectorAll(
  ".AdditivesText3Dessert"
);

SizeSDessert.forEach((sizeSDessert, index) => {
  sizeSDessert.addEventListener("click", () => {
    SizeMDessert[index].classList.remove("SizeActive");
    SizeMTextDessert[index].classList.remove("SizeActive1");
    SizeMIconDessert[index].classList.remove("SizeActive2");
    SizeLDessert[index].classList.remove("SizeActive");

    SizeLTextDessert[index].classList.remove("SizeActive1");
    SizeLIconDessert[index].classList.remove("SizeActive2");
    SizeSIconDessert[index].classList.remove("SizeActive3");

    sizeSDessert.classList.add("SizeActive");
    SizeLIconDessert[index].classList.add("SizeActive3");
    SizeMIconDessert[index].classList.add("SizeActive3");
    SizeSTextDessert[index].classList.add("SizeActive1");
    SizeSIconDessert[index].classList.add("SizeActive2");

    AdditivesClearDessert();
  });
});

SizeMDessert.forEach((sizeMDessert, index) => {
  sizeMDessert.addEventListener("click", () => {
    SizeSDessert[index].classList.remove("SizeActive");
    SizeSTextDessert[index].classList.remove("SizeActive1");
    SizeSIconDessert[index].classList.remove("SizeActive2");
    SizeLDessert[index].classList.remove("SizeActive");

    SizeLTextDessert[index].classList.remove("SizeActive1");
    SizeLIconDessert[index].classList.remove("SizeActive2");
    SizeMIconDessert[index].classList.remove("SizeActive3");

    sizeMDessert.classList.add("SizeActive");
    SizeLIconDessert[index].classList.add("SizeActive3");
    SizeMTextDessert[index].classList.add("SizeActive1");
    SizeMIconDessert[index].classList.add("SizeActive2");
    SizeSIconDessert[index].classList.add("SizeActive3");

    AdditivesClearDessert();
  });
});

SizeLDessert.forEach((sizeLDessert, index) => {
  sizeLDessert.addEventListener("click", () => {
    SizeMDessert[index].classList.remove("SizeActive");
    SizeMTextDessert[index].classList.remove("SizeActive1");
    SizeMIconDessert[index].classList.remove("SizeActive2");

    SizeSDessert[index].classList.remove("SizeActive");
    SizeSTextDessert[index].classList.remove("SizeActive1");
    SizeSIconDessert[index].classList.remove("SizeActive2");
    SizeLIconDessert[index].classList.remove("SizeActive2");
    SizeLIconDessert[index].classList.remove("SizeActive3");

    sizeLDessert.classList.add("SizeActive");
    SizeLTextDessert[index].classList.add("SizeActive1");
    SizeLIconDessert[index].classList.add("SizeActive2");
    SizeSIconDessert[index].classList.add("SizeActive3");
    SizeMIconDessert[index].classList.add("SizeActive3");

    AdditivesClearDessert();
  });
});

Additives1Dessert.forEach((additives1Dessert, index) => {
  additives1Dessert.addEventListener("click", () => {
    const isActiveDessert = additives1Dessert.classList.contains("SizeActive");
    if (isActiveDessert) {
      additives1Dessert.classList.remove("SizeActive");
      AdditivesText1Dessert[index].classList.remove("SizeActive1");
      AdditivesIcon1Dessert[index].classList.remove("SizeActive2");
      AdditivesIcon1Dessert[index].classList.add("SizeActive3");
    } else {
      AdditivesIcon1Dessert[index].classList.remove("SizeActive3");
      additives1Dessert.classList.add("SizeActive");
      AdditivesText1Dessert[index].classList.add("SizeActive1");
      AdditivesIcon1Dessert[index].classList.add("SizeActive2");
    }
  });
});
Additives2Dessert.forEach((additives2Dessert, index) => {
  additives2Dessert.addEventListener("click", () => {
    const isActiveDessert = additives2Dessert.classList.contains("SizeActive");
    if (isActiveDessert) {
      additives2Dessert.classList.remove("SizeActive");
      AdditivesText2Dessert[index].classList.remove("SizeActive1");
      AdditivesIcon2Dessert[index].classList.remove("SizeActive2");
      AdditivesIcon2Dessert[index].classList.add("SizeActive3");
    } else {
      AdditivesIcon2Dessert[index].classList.remove("SizeActive3");
      additives2Dessert.classList.add("SizeActive");
      AdditivesText2Dessert[index].classList.add("SizeActive1");
      AdditivesIcon2Dessert[index].classList.add("SizeActive2");
    }
  });
});

Additives3Dessert.forEach((additives3Dessert, index) => {
  additives3Dessert.addEventListener("click", () => {
    const isActiveDessert = additives3Dessert.classList.contains("SizeActive");
    if (isActiveDessert) {
      additives3Dessert.classList.remove("SizeActive");
      AdditivesText3Dessert[index].classList.remove("SizeActive1");
      AdditivesIcon3Dessert[index].classList.remove("SizeActive2");
      AdditivesIcon3Dessert[index].classList.add("SizeActive3");
    } else {
      AdditivesIcon3Dessert[index].classList.remove("SizeActive3");
      additives3Dessert.classList.add("SizeActive");
      AdditivesText3Dessert[index].classList.add("SizeActive1");
      AdditivesIcon3Dessert[index].classList.add("SizeActive2");
    }
  });
});

// Dessert buy menu button click end

// Dessert buy menu click end

// coffee and tea prise

const CofeeBuyMenu = document.querySelectorAll(".coffeeBuyMenu");
CofeeBuyMenu.forEach(function (CoffeeBlock) {
  const priseCoffe = CoffeeBlock.querySelector(".coffeeBuyMenuTotalText2");
  const sizeM = CoffeeBlock.querySelector(".SizeM");
  const sizeL = CoffeeBlock.querySelector(".SizeL");
  const sizeS = CoffeeBlock.querySelector(".SizeS");
  const Sugar = CoffeeBlock.querySelector(".Additives1");
  const Cinnamon = CoffeeBlock.querySelector(".Additives2");
  const Syrup = CoffeeBlock.querySelector(".Additives3");

  const basePrice = parseFloat(priseCoffe.textContent.replace("$", "")); // достаём число из строки и сохраняем базовую цену

  let currentPrice = basePrice; //переменная для хранения текущей суммы

  sizeS.addEventListener("click", function () {
    priseCoffe.textContent = `$${basePrice.toFixed(2)}`;
  });
  sizeM.addEventListener("click", function () {
    const newPrice = (basePrice + 0.5).toFixed(2); //округляем до 2 знаков после запятой
    priseCoffe.textContent = `$${newPrice}`;
  });
  sizeL.addEventListener("click", function () {
    const newPrice = (basePrice + 1).toFixed(2); //округляем до 2 знаков после запятой
    priseCoffe.textContent = `$${newPrice}`;
  });
  sizeM.addEventListener("click", function () {
    const newPrice = (basePrice + 0.5).toFixed(2); //округляем до 2 знаков после запятой
    priseCoffe.textContent = `$${newPrice}`;
  });

  Sugar.addEventListener("click", function () {
    if (Sugar.classList.contains("SizeActive")) {
      const newPrice = (currentPrice + 0.5).toFixed(2); //округляем до 2 знаков после запятой
      priseCoffe.textContent = `$${newPrice}`;
    } else {
      const newPrice = currentPrice.toFixed(2); //округляем до 2 знаков после запятой
      priseCoffe.textContent = `$${newPrice}`;
    }
    updatePrice();
  });
  Cinnamon.addEventListener("click", function () {
    if (Cinnamon.classList.contains("SizeActive")) {
      const newPrice = (currentPrice + 0.5).toFixed(2); //округляем до 2 знаков после запятой
      priseCoffe.textContent = `$${newPrice}`;
    } else {
      const newPrice = currentPrice.toFixed(2); //округляем до 2 знаков после запятой
      priseCoffe.textContent = `$${newPrice}`;
    }
    updatePrice();
  });
  Syrup.addEventListener("click", function () {
    if (Syrup.classList.contains("SizeActive")) {
      const newPrice = (currentPrice + 0.5).toFixed(2); //округляем до 2 знаков после запятой
      priseCoffe.textContent = `$${newPrice}`;
    } else {
      const newPrice = currentPrice.toFixed(2); //округляем до 2 знаков после запятой
      priseCoffe.textContent = `$${newPrice}`;
    }
    updatePrice();
  });
  function updatePrice() {
    let currentPrice = basePrice;
    if (sizeM.classList.contains("SizeActive")) currentPrice += 0.5;
    if (sizeL.classList.contains("SizeActive")) currentPrice += 1;

    if (Sugar.classList.contains("SizeActive")) currentPrice += 0.5;
    if (Cinnamon.classList.contains("SizeActive")) currentPrice += 0.5;
    if (Syrup.classList.contains("SizeActive")) currentPrice += 0.5;

    priseCoffe.textContent = `$${currentPrice.toFixed(2)}`;
  }
});

// coffee prise end

// dessert prise

const coffeeBuyMenuDessert = document.querySelectorAll(".coffeeBuyMenuDessert");

coffeeBuyMenuDessert.forEach(function (CoffeeBlockDessert) {
  const priseCoffeDessert = CoffeeBlockDessert.querySelector(
    ".coffeeBuyMenuTotalText2Dessert"
  );
  const sizeMDessert = CoffeeBlockDessert.querySelector(".SizeMDessert");
  const sizeLDessert = CoffeeBlockDessert.querySelector(".SizeLDessert");
  const sizeSDessert = CoffeeBlockDessert.querySelector(".SizeSDessert");
  const SugarDessert = CoffeeBlockDessert.querySelector(".Additives1Dessert");
  const CinnamonDessert =
    CoffeeBlockDessert.querySelector(".Additives2Dessert");
  const SyrupDessert = CoffeeBlockDessert.querySelector(".Additives3Dessert");

  const basePriceDessert = parseFloat(
    priseCoffeDessert.textContent.replace("$", "")
  ); // достаём число из строки и сохраняем базовую цену

  let currentPriceDessert = basePriceDessert; //переменная для хранения текущей суммы

  sizeSDessert.addEventListener("click", function () {
    priseCoffeDessert.textContent = `$${basePriceDessert.toFixed(2)}`;
  });
  sizeMDessert.addEventListener("click", function () {
    const newPriceDessert = (basePriceDessert + 0.5).toFixed(2); //округляем до 2 знаков после запятой
    priseCoffeDessert.textContent = `$${newPriceDessert}`;
  });
  sizeLDessert.addEventListener("click", function () {
    const newPriceDessert = (basePriceDessert + 1).toFixed(2); //округляем до 2 знаков после запятой
    priseCoffeDessert.textContent = `$${newPriceDessert}`;
  });
  sizeMDessert.addEventListener("click", function () {
    const newPriceDessert = (basePriceDessert + 0.5).toFixed(2); //округляем до 2 знаков после запятой
    priseCoffeDessert.textContent = `$${newPriceDessert}`;
  });

  SugarDessert.addEventListener("click", function () {
    if (SugarDessert.classList.contains("SizeActive")) {
      const newPriceDessert = (currentPriceDessert + 0.5).toFixed(2); //округляем до 2 знаков после запятой
      priseCoffeDessert.textContent = `$${newPriceDessert}`;
    } else {
      const newPriceDessert = currentPriceDessert.toFixed(2); //округляем до 2 знаков после запятой
      priseCoffeDessert.textContent = `$${newPriceDessert}`;
    }
    updatePriceDessert();
  });
  CinnamonDessert.addEventListener("click", function () {
    if (CinnamonDessert.classList.contains("SizeActive")) {
      const newPriceDessert = (currentPriceDessert + 0.5).toFixed(2); //округляем до 2 знаков после запятой
      priseCoffeDessert.textContent = `$${newPriceDessert}`;
    } else {
      const newPriceDessert = currentPriceDessert.toFixed(2); //округляем до 2 знаков после запятой
      priseCoffeDessert.textContent = `$${newPriceDessert}`;
    }
    updatePriceDessert();
  });
  SyrupDessert.addEventListener("click", function () {
    if (SyrupDessert.classList.contains("SizeActive")) {
      const newPriceDessert = (currentPriceDessert + 0.5).toFixed(2); //округляем до 2 знаков после запятой
      priseCoffeDessert.textContent = `$${newPriceDessert}`;
    } else {
      const newPriceDessert = currentPriceDessert.toFixed(2); //округляем до 2 знаков после запятой
      priseCoffeDessert.textContent = `$${newPriceDessert}`;
    }
    updatePriceDessert();
  });
  function updatePriceDessert() {
    let currentPriceDessert = basePriceDessert;
    if (sizeMDessert.classList.contains("SizeActive"))
      currentPriceDessert += 0.5;
    if (sizeLDessert.classList.contains("SizeActive")) currentPriceDessert += 1;

    if (SugarDessert.classList.contains("SizeActive"))
      currentPriceDessert += 0.5;
    if (CinnamonDessert.classList.contains("SizeActive"))
      currentPriceDessert += 0.5;
    if (SyrupDessert.classList.contains("SizeActive"))
      currentPriceDessert += 0.5;

    priseCoffeDessert.textContent = `$${currentPriceDessert.toFixed(2)}`;
  }
});

// dessert prise end

// Burger menu

const burgerButton = document.querySelector(".burgerButton");
const burgerMenu = document.querySelector(".burgerMenu");
const burgerKrestick = document.querySelector(".burgerKrestick");

burgerButton.addEventListener("click", function () {
  burgerMenu.style.display = "flex";
});
burgerKrestick.addEventListener("click", function () {
  burgerMenu.style.display = "none";
});

// Burger menu end

// Media button cklick

// Coffee media

const coffeeGridButton = document.querySelector(".coffeeGridButton");

let coffeeGridButtonActive = true;

coffeeGridButton.addEventListener("click", function () {
  if (coffeeGridButtonActive == true) {
    coffeeGrid1.style.display = "none";
    coffeeGrid2.style.display = "none";
    coffeeGrid3.style.display = "none";
    coffeeGrid4.style.display = "none";
    coffeeGrid5.style.display = "grid";
    coffeeGrid6.style.display = "grid";
    coffeeGrid7.style.display = "grid";
    coffeeGrid8.style.display = "grid";
    coffeeGridButtonActive = false;
  } else {
    coffeeGrid1.style.display = "grid";
    coffeeGrid2.style.display = "grid";
    coffeeGrid3.style.display = "grid";
    coffeeGrid4.style.display = "grid";
    coffeeGrid5.style.display = "none";
    coffeeGrid6.style.display = "none";
    coffeeGrid7.style.display = "none";
    coffeeGrid8.style.display = "none";
    coffeeGridButtonActive = true;
  }
});

// Coffee media end

// Dessert media

const dessertGridButton = document.querySelector(".dessertGridButton");

let dessertGridButtonActive = true;

dessertGridButton.addEventListener("click", function () {
  if (dessertGridButtonActive == true) {
    dessertGrid1.style.display = "none";
    dessertGrid2.style.display = "none";
    dessertGrid3.style.display = "none";
    dessertGrid4.style.display = "none";
    dessertGrid5.style.display = "grid";
    dessertGrid6.style.display = "grid";
    dessertGrid7.style.display = "grid";
    dessertGrid8.style.display = "grid";
    dessertGridButtonActive = false;
  } else {
    dessertGrid1.style.display = "grid";
    dessertGrid2.style.display = "grid";
    dessertGrid3.style.display = "grid";
    dessertGrid4.style.display = "grid";
    dessertGrid5.style.display = "none";
    dessertGrid6.style.display = "none";
    dessertGrid7.style.display = "none";
    dessertGrid8.style.display = "none";
    dessertGridButtonActive = true;
  }
});

// Dessert media end

// Media button cklick end
