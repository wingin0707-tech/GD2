// MENU
const menuButton = document.getElementById("menuButton");
const menuContainer = document.getElementById("menuContainer");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("spin");
    menuContainer.classList.toggle("show");
});

function showHome() {
    document.getElementById("home-section").style.display = "block";
    document.getElementById("about-section").style.display = "none";
}

function showAbout() {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("about-section").style.display = "block";
}

// LEAFLET MAP
const map = L.map('map').setView([43.8561, -79.3370], 13);

// OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example marker with audio
const marker = L.marker([43.8561, -79.3370]).addTo(map);
marker.bindPopup(`
<b>Example Sound</b><br>
<audio controls>
<source src="sound/example.mp3" type="audio/mpeg">
</audio>
`);