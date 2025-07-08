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
const StartMenuBack = document.querySelector(".StartMenuBack");
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
StartMenuBack.addEventListener("click", menuOpen);
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

// Coffee Buy Menu Button click end

// Coffee Buy Menu click End

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
