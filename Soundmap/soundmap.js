// =======================
// MENU TOGGLE
// =======================
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


const map = L.map('map').setView([43.8561, -79.3370], 13);

map.fitBounds(markhamBounds);
 map.setMaxBounds(markhamBounds);

      L.geoJSON(markhamGeoJSON, {
    style: {
    color: "#000",
    weight: 2,
    fillOpacity: 0
  }
}).addTo(map);

// Base tiles (Carto Light)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
          subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);


const highwaysGeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "Highway 1" },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [43.89411, -79.27344],
          [43.86, -79.33],
          [43.87, -79.32]
        ]
      }
    }
  ]
};

// Sound locations data
const soundLocations = [
  {
      title: "Edward Jeffreys Ave2",
        description: "Edward Jeffreys avenue GO train station",
        lat: 43.89411,
        lng: -79.27344,
        time: "16 Feb, 2026 02:55pm",
        audio: "https://image2url.com/r2/default/audio/1771616956404-94393f99-3144-4b5c-95fd-891869b3fdf8.m4a"
  },
  {
     title: "Scott Brown St",
        description: "25 Scott Brown St",
       lat: 43.89945,
       lng: -79.27401,
       time: "17 Feb, 2026 5:30pm",
        audio: "https://image2url.com/r2/default/audio/1771617515406-ea055bbd-6cb8-460f-b1be-d6a683aae14a.m4a"
  },
  {
      title: "Edward Jeffreys GO Bus Station",
          description: "Markham Rd at Edward Jeffreys Ave",
        lat: 43.896358,
        lng: -79.265278,
       time: "16 Feb, 2026 10:20pm",
        audio: "https://image2url.com/r2/default/audio/1771617711520-42b4daf9-bea6-409f-98a2-931ec4d6aa53.m4a"
  },
  {
        title: "Bur Oak Ave",
          description: "Bur Oak Ave",
         lat: 43.8929,
         lng: -79.3022,
        time: "17 Feb, 2026 4:00pm",
        audio: "https://image2url.com/r2/default/audio/1771617858226-0335278e-1a9a-4509-86d6-d80ff5f8aca6.m4a"
  },
  {
       title: "South Unionville Ave",
        description: "Highway 407",
        lat: 43.8605,
        lng: -79.2833,
        time: "16 Feb, 2026 12:00pm",
        audio: "https://image2url.com/r2/default/audio/1771618112948-02075d34-09c1-4200-8bc5-6e1b130472f2.m4a"
  },
  {
        title: "Markham Auto Spa",
        description: "New Kennedy Mall",
         lat: 43.85934,
         lng: -79.3047,
        time: "17 Feb, 2026 5:47pm",
        audio: "https://image2url.com/r2/default/audio/1771618383533-1b1844c7-6186-4d66-a64e-d8fb2e0b8eff.m4a"
  },
  {
         title: "Edward Jeffreys Ave",
          description: "Inside GO Train",
            lat: 43.89412,
       lng: -79.27343,
       time: "16 Feb, 2026 02:45pm",
        audio: "https://image2url.com/r2/default/audio/1771618633399-02792719-3ee0-4572-b59a-75379656f70b.m4a"
  },
  {
       title: "Kennedy Rd",
       description: "T&T Meat Market",
    lat: 43.85934,
    lng: -79.3047,
    time: "16 Feb, 2026 4:32pm",
    audio: "https://image2url.com/r2/default/audio/1771618722900-06fc915f-343b-4b38-85a1-6ec0bc6ed6b0.m4a"
  },
  {
    title: "Markham GO Bus",
    description: "Highway 407",
    lat: 43.896358,
    lng: -79.265278,
    time: "16 Feb, 2026 10:46pm",
    audio: "https://image2url.com/r2/default/audio/1771619947868-cef868a6-5059-4f3d-bddb-3028eb21ac17.m4a"
  },
  {
    title: "Markham Plaza",
    description: "Train",
    lat: 43.8763,
    lng: -79.2575,
    time: "17 Feb, 2026 4:00pm",
    audio: "https://image2url.com/r2/default/audio/1772144198078-d1de5c85-3734-4222-abdb-8915acf204de.m4a"
  },
  {
    title: "Kennedy Rd",
    description: "Kennedy Rd",
    lat: 43.874527,
    lng: -79.286243,
    time: "18 Feb, 2026 8:30pm",
    audio: "https://image2url.com/r2/default/audio/1772144461963-b6596e1b-7a63-40de-9dc0-771281e02950.m4a"
  },
  {
    title: "Mercedes-Benz Markham",
    description: "Mercedes-Benz Markham",
    lat: 43.8577525,
    lng: -79.3043853,
    time: "19 Feb, 2026 5:02pm",
    audio: "https://image2url.com/r2/default/audio/1772144515177-ef239853-490c-4881-9f99-78d92d8c7fdc.m4a"
  },
  {
    title: "Milliken Meadows Dr GO Train",
    description: "Milliken Meadows Dr GO Train",
    lat: 43.82319,
    lng: -79.30167,
    time: "20 Feb, 2026 4:33pm",
    audio: "https://image2url.com/r2/default/audio/1772144564808-71c77456-09c8-4500-814d-5019b67bffd2.m4a"
  },
  {
    title: "Day & Night King Crab",
    description: "Day and Night Crab Kitchen",
    lat: 43.82392,
    lng: -79.30074,
    time: "21 Feb, 2026 7:16pm",
    audio: "https://image2url.com/r2/default/audio/1772144653984-18449777-4c39-44e2-84f8-30ac16ffbf44.m4a"
  }
];

// Add markers to map
soundLocations.forEach(location => {
 const marker = L.circleMarker([location.lat, location.lng], {
          radius: 9,
          fillColor: "#ff0011ff",
         color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
      }).addTo(map);


  marker.bindPopup(`
    <b>${location.title}</b><br>
    ${location.description}<br>
    <i>${location.time}</i><br><br>
    <audio controls>
      <source src="${location.audio}" type="audio/mp4">
      Your browser does not support the audio element.
    </audio>
  `);
});