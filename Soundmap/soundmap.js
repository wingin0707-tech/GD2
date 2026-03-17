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

const startButton = document.getElementById("start-map");
const introPopup = document.getElementById("intro-popup");

startButton.addEventListener("click", () => {
  introPopup.style.display = "none";
});

const map = L.map('map').setView([43.8561, -79.3370], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap &copy; CARTO',
  subdomains: 'abcd',
  maxZoom: 20
}).addTo(map);

const soundLocations = [
  {
    title: "Edward Jeffreys Ave",
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
    audio: "https://image2url.com/r2/default/audio/1772144461963-b6596e1b-7a63-40de-9dc0-771281e02950.m4a",
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

const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

document.addEventListener("mousedown", () => {
  cursor.classList.add("click");
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("click");
});

const markerGroup = L.layerGroup().addTo(map);

soundLocations.forEach((location, index) => {

  const crossIcon = L.divIcon({
  className: 'custom-cross-icon', 
  html: '<div class="cross-marker"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

  const marker = L.marker([location.lat, location.lng], {
  icon: crossIcon,
  zIndexOffset: 1000
}).addTo(markerGroup);
  const transcriptId = `transcript-${index}`;
  const audioId = `audio-${index}`;
  const transcriptText = `This is a sample transcript for ${location.title}. Replace with your own text.`;

  marker.bindPopup(`
    <b>${location.title}</b><br>
    ${location.description}<br>
    <i>${location.time}</i><br><br>

    <audio controls id="${audioId}">
      <source src="${location.audio}" type="audio/mp4">
    </audio>

    <div id="${transcriptId}" style="
      max-height:100px;
      overflow:hidden;
      margin-top:10px;
      font-size:13px;
      line-height:1.4;
      background:#f4f4f4;
      padding:8px;
      border-radius:6px;
      white-space: pre-wrap;
      font-family: monospace;
    "></div>
  `);

  marker.on('popupopen', () => {
    const popupEl = marker.getPopup().getElement();
    const audio = popupEl.querySelector(`#${audioId}`);
    const transcript = popupEl.querySelector(`#${transcriptId}`);

    let typingInterval;

    audio.addEventListener('play', () => {
      transcript.textContent = '';
      let i = 0;
      typingInterval = setInterval(() => {
        if (i < transcriptText.length) {
          transcript.textContent += transcriptText[i];
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 40); 
    });

    audio.addEventListener('pause', () => {
      clearInterval(typingInterval);
    });

    audio.addEventListener('ended', () => {
      clearInterval(typingInterval);
    });
  });
});

function connectAllLocations() {
  for (let i = 0; i < soundLocations.length - 1; i++) {
    const from = L.latLng(soundLocations[i].lat, soundLocations[i].lng);
    const to = L.latLng(soundLocations[i + 1].lat, soundLocations[i + 1].lng);

    L.Routing.control({
      waypoints: [from, to],
      createMarker: () => null, 
      addWaypoints: false,
      draggableWaypoints: false,
      routeWhileDragging: false,
      show: false,
      lineOptions: {
        styles: [
          { color: '#f8f8f2', weight: 6, opacity: 0.6 }, 
          { color: '#0074D9', weight: 3, opacity: 1 }    
        ]
      }
    }).addTo(map);
  }
}

connectAllLocations();

// 1. Define the Icon
const crossIcon = L.divIcon({
  className: 'custom-cross-icon',
  html: '<div class="cross-marker"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

// 2. Add Markers and collect coordinates for the line
const pathCoordinates = [];

soundLocations.forEach((location, index) => {
  // Push coords to our path array
  pathCoordinates.push([location.lat, location.lng]);

  // Create the Marker
  const marker = L.marker([location.lat, location.lng], {
    icon: crossIcon,
    zIndexOffset: 1000
  }).addTo(map);

  // ... (Your bindPopup and typing interval logic goes here)
});

// 3. Draw the Dotted Line using the collected coordinates
if (pathCoordinates.length > 1) {
  L.polyline(pathCoordinates, {
    color: '#000000',      // Black ink
    weight: 2,             // Thin line
    opacity: 0.5,          // Faded scan look
    dashArray: '10, 10',   // 10px dash, 10px gap
    lineJoin: 'round'
  }).addTo(map);
}