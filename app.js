const navContainer = document.querySelector(".nav-container");
const menuOpen = document.querySelector(".menuOpen");
const menuClose = document.querySelector(".menuClose");
const main = document.querySelector(".main");

menuOpen.addEventListener("click", () => {
  navContainer.classList.toggle("hide");
  main.style.filter = "blur(2px)";
});
menuClose.addEventListener("click", () => {
  navContainer.classList.toggle("hide");
  main.style.filter = "blur(0)";
});
