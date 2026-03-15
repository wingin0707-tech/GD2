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

    function initMap() {

const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.8561, lng: -79.3370 },
    zoom: 12,

    styles: [
        {
            featureType: "all",
            elementType: "all",
            stylers: [
                { visibility: "on" },
                { color: "#ede6d2" },
                { saturation: -33 },
                { lightness: 14 }
            ]
        },
        {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "water",
            elementType: "all",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
                { visibility: "on" },
                { color: "#0d1f4e" }
            ]
        }
    ]
});

}