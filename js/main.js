const burgerMenu = document.getElementById("burger-menu-icon");
const menuList = document.getElementById("menu-list");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  menuList.classList.toggle("active");
  document.body.classList.toggle("_blocked");
});
