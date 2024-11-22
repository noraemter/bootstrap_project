const menuIcon = document.getElementById("menu-icon");
const fullscreenMenu = document.getElementById("fullscreen-menu");
const closeMenu = document.getElementById("close-menu");

// Show menu overlay
menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    fullscreenMenu.classList.add("active");
});

// Close menu overlay
closeMenu.addEventListener("click", () => {
    fullscreenMenu.classList.remove("active");
});