
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const menuContainer = document.getElementById("menuContainer");

    menuButton.addEventListener("click", () => {
        menuContainer.classList.toggle("show");
        menuButton.classList.toggle("spin");
    });
});

function showAbout() {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("about-section").style.display = "block";
}

function showHome() {
    document.getElementById("home-section").style.display = "block";
    document.getElementById("about-section").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {

    const cursor = document.createElement("div");
    cursor.className = "sound-cursor";
    cursor.innerHTML = "*";
    document.body.appendChild(cursor);

    document.body.style.cursor = "none"; // hide normal cursor

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

});