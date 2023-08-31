var menu = document.getElementById("menu-icon");
var navbar = document.getElementById("nav-bar");


menu.addEventListener("click", () => {
    if (navbar.style.left === "-100%") {
        navbar.style.left = "0%";
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");
    } else {
        navbar.style.left = "-100%";
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
    }
});


document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target) && navbar.style.left === "0%" && !menu.contains(event.target)) {
        navbar.style.left = "-100%";
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
    }
});