const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("navbar-two");
hamburger.addEventListener("click", (e) => {
  menu.classList.toggle("show-nav");
  e.stopPropagation;
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !hamburger.contains(e.target))
    menu.classList.remove("show-nav");
});
