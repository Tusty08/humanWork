const burgerMenu = document.querySelector("#burgerMenu");
const navList = document.querySelector("#nav_ul");
const closeOption = document.querySelector("#closeOption");
const logoImage = document.querySelector("#logo");
const nav = document.querySelector("nav");
// const mainPage = document.querySelector("main");
// const sectionPage = document.querySelector("section");

function menuButton() {
  burgerMenu.addEventListener("click", (i) => {
    burgerMenu.classList.add("hidden");
    burgerMenu.classList.remove("hidden_media");

    closeOption.classList.add("hidden_media");
    closeOption.classList.remove("hidden");

    nav.classList.remove("navPosition");
    nav.classList.add("navChange");
    // mainPage.classList.add("blur");
    // sectionPage.classList.add("hidden");

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
    // mainPage.classList.remove("blur");
    // sectionPage.classList.remove("hidden");

    navList.classList.add("nav_ul");
    navList.classList.remove("navList");

    logoImage.classList.remove("hidden");
  });
}
