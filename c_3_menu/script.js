let main_menu = document.querySelector("nav>ul");
let hewrap = document.querySelector(".header_wrap");

main_menu.addEventListener("mouseenter", function () {
    hewrap.classList.add("on");
});

main_menu.addEventListener("mouseleave", function () {
    hewrap.classList.remove("on");
});