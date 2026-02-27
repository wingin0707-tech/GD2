
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const menuContainer = document.getElementById("menuContainer");

    menuButton.addEventListener("click", () => {
        menuContainer.classList.toggle("show");
        menuButton.classList.toggle("spin");
    });
});

const aboutMenuButton = document.getElementById("aboutMenuButton");
const aboutMenuContainer = document.getElementById("aboutMenuContainer");

aboutMenuButton.addEventListener("click", () => {
    aboutMenuContainer.classList.toggle("show");
});

function showAbout() {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("about-section").style.display = "block";
}

function showHome() {
    document.getElementById("home-section").style.display = "block";
    document.getElementById("about-section").style.display = "none";
}