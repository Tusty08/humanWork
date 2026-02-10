const burgerMenu = document.querySelector("#burgerMenu");
const navList = document.querySelector("#nav_ul");
const closeOption = document.querySelector("#closeOption");
const logoImage = document.querySelector("#logo");
const nav = document.querySelector("nav");
const mainPage = document.querySelector("main");
const sectionPage = document.querySelector("section");

function menuButton() {
  burgerMenu.addEventListener("click", (i) => {
    burgerMenu.classList.add("hidden");
    burgerMenu.classList.remove("hidden_media");

    closeOption.classList.add("hidden_media");
    closeOption.classList.remove("hidden");

    nav.classList.remove("navPosition");
    nav.classList.add("navChange");
    mainPage.classList.add("blur");
    sectionPage.classList.add("hidden");

    navList.classList.add("navList");
    navList.classList.remove("nav_ul");

    logoImage.classList.add("hidden");
  });

  closeOption.addEventListener("click", () => {
    closeOption.classList.add("hidden");
    closeOption.classList.remove("hidden_media");

    burgerMenu.classList.add("hidden_media");
    burgerMenu.classList.remove("hidden");

    nav.classList.add("navPosition");
    nav.classList.remove("navChange");
    mainPage.classList.remove("blur");
    sectionPage.classList.remove("hidden");

    navList.classList.add("nav_ul");
    navList.classList.remove("navList");

    logoImage.classList.remove("hidden");
  });
}

const dagonImg = document.querySelector("#imgDag");
const btnTwo = document.querySelector("#btnTwo");
const btnT = document.querySelector("#btnT");
const imgOne = document.querySelector("#imgOne");
const imgTwo = document.querySelector("#imgTwo");
const figHide = document.querySelector("#figHide");

function dagon() {
  btnTwo.addEventListener("click", () => {
    dagonImg.classList.remove("hidden");
    imgOne.classList.remove("hidden");
    imgOne.classList.add("dagon");
    imgTwo.classList.remove("hidden");
    imgTwo.classList.add("dagon");
    btnTwo.classList.add("hidden");
    btnT.classList.remove("hidden");
    figHide.classList.add("ref1");
    figHide.classList.remove("hidden");
  });
  btnT.addEventListener("click", () => {
    dagonImg.classList.remove("hidden");
    imgOne.classList.add("hidden");
    imgOne.classList.remove("dagon");
    imgTwo.classList.add("hidden");
    imgTwo.classList.remove("dagon");
    btnTwo.classList.remove("hidden");
    btnT.classList.add("hidden");
    figHide.classList.remove("ref1");
    figHide.classList.add("hidden");
  });
}
