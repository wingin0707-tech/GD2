


const map = L.map('map', {
  maxZoom: 15,
  minZoom: 13,          
  maxBoundsViscosity: 1.0  
}).setView([43.8561, -79.3370], 13);


L.maplibreGL({
  style: {
    "version": 8,
    "name": "Toner",
    "metadata": {
      "mapbox:autocomposite": false,
      "mapbox:type": "template",
      "openmaptiles:mapbox:owner": "openmaptiles",
      "openmaptiles:mapbox:source:url": "mapbox://openmaptiles.4qljc88t",
      "openmaptiles:version": "3.x",
      "maputnik:renderer": "mlgljs"
    },
    "center": [
      -122.41877447993727,
      37.7977350127602
    ],
    "zoom": 10.426085190067841,
    "zoom-max": 15,
    "bearing": 0,
    "pitch": 0,
    "sources": {
      "openmaptiles": {
        "type": "vector",
        "url": "https://api.maptiler.com/tiles/v3-openmaptiles/tiles.json?key=IijoRcZThD2qtxrSHBmF"
      }
    },
    "glyphs": "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=IijoRcZThD2qtxrSHBmF",
    "layers": [
      {
        "id": "background",
        "paint": {
          "background-color": "rgba(255, 255, 255, 1)"
        },
        "type": "background",
        "filter": ["all"]
      },
      {
        "filter": [
          "==",
          "class",
          "grass"
        ],
        "id": "landcover_grass_fill",
        "metadata": {
          "mapbox:group": "1444849388993.3071"
        },
        "minzoom": 10,
        "paint": {
          "fill-antialias": true,
          "fill-color": "rgba(112, 137, 255, 1)",
          "fill-outline-color": "rgba(255, 32, 32, 1)",
          "fill-opacity": 0.5
        },
        "source": "openmaptiles",
        "source-layer": "landcover",
        "type": "fill",
        "layout": {
          "visibility": "visible"
        }
      },
      {
        "filter": [
          "==",
          "class",
          "grass"
        ],
        "id": "landcover_grass_pattern",
        "metadata": {
          "mapbox:group": "1444849388993.3071"
        },
        "minzoom": 10,
        "paint": {
          "fill-antialias": true,
          "fill-opacity": 0.5,
          "fill-outline-color": "rgba(255, 0, 0, 1)",
          "fill-color": "rgba(102, 103, 255, 1)",
          "fill-pattern": "dash-t"
        },
        "source": "openmaptiles",
        "source-layer": "landcover",
        "type": "fill",
        "layout": {
          "visibility": "visible"
        }
      },
      {
        "filter": ["==", "class", "wood"],
        "id": "landcover_wood_fill",
        "layout": {
          "visibility": "visible"
        },
        "minzoom": 10,
        "paint": {
          "fill-antialias": true,
          "fill-color": "rgba(255, 0, 0, 1)",
          "fill-opacity": {
            "property": "",
            "type": "exponential",
            "stops": [
              [
                {"zoom": 6, "value": 0},
                1
              ],
              [
                {"zoom": 10, "value": 0},
                1
              ]
            ]
          }
        },
        "source": "openmaptiles",
        "source-layer": "landcover",
        "type": "fill"
      },
      {
        "filter": ["==", "class", "wood"],
        "id": "landcover_wood_pattern",
        "layout": {
          "visibility": "visible"
        },
        "minzoom": 7,
        "paint": {
          "fill-antialias": true,
          "fill-color": "rgba(228, 42, 42, 1)",
          "fill-opacity": 1,
          "fill-pattern": "dots-t"
        },
        "source": "openmaptiles",
        "source-layer": "landcover",
        "type": "fill"
      },
      {
        "filter": [
          "all",
          ["!=", "brunnel", "tunnel"],
          ["==", "$type", "Polygon"],
          ["!=", "intermittent", 1]
        ],
        "id": "water",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-antialias": true,
          "fill-color": "rgba(155, 216, 195, 1)",
          "fill-translate-anchor": "viewport"
        },
        "source": "openmaptiles",
        "source-layer": "water",
        "type": "fill"
      },
      {
        "filter": [
          "all",
          ["!=", "class", "river"]
        ],
        "id": "waterway",
        "minzoom": 12,
        "source": "openmaptiles",
        "source-layer": "waterway",
        "type": "line",
        "paint": {
          "line-color": "rgba(255, 0, 103, 1)"
        },
        "maxzoom": 24,
        "layout": {
          "line-cap": "butt",
          "line-join": "miter",
          "visibility": "visible"
        }
      },
      {
        "filter": [
          "all",
          ["==", "class", "rail"]
        ],
        "id": "rail",
        "layout": {
          "visibility": "visible"
        },
        "minzoom": 13,
        "paint": {
          "line-color": {
            "stops": [
              [
                13,
                "rgba(216, 216, 216, 1)"
              ],
              [17, "rgba(38, 38, 38, 1)"]
            ]
          },
          "line-width": {
            "stops": [[6, 1], [10, 1]],
            "type": "exponential"
          }
        },
        "source": "openmaptiles",
        "source-layer": "transportation",
        "type": "line"
      },
      {
        "filter": [
          "all",
          ["==", "class", "rail"]
        ],
        "id": "rail_hatch",
        "layout": {
          "visibility": "visible"
        },
        "minzoom": 17,
        "paint": {
          "line-color": "rgba(38, 38, 38, 1)",
          "line-dasharray": {
            "stops": [
              [15, [0.2, 0.8]],
              [17, [0.2, 1]]
            ]
          },
          "line-width": {
            "stops": [[15, 2], [17, 6]]
          }
        },
        "source": "openmaptiles",
        "source-layer": "transportation",
        "type": "line"
      },
      {
        "filter": [
          "all",
          [
            "in",
            "class",
            "secondary",
            "tertiary",
            "minor",
            "service"
          ]
        ],
        "id": "road_secondary",
        "layout": {
          "line-cap": "square",
          "line-join": "miter",
          "visibility": "visible"
        },
        "metadata": {},
        "minzoom": 13,
        "paint": {
          "line-color": "rgba(239, 10, 10, 0.99)",
          "line-width": 1,
          "line-translate-anchor": "viewport",
          "line-blur": 1.5
        },
        "source": "openmaptiles",
        "source-layer": "transportation",
        "type": "line",
        "maxzoom": 19
      },
      {
        "filter": [
          "all",
          ["==", "$type", "Point"],
          ["==", "class", "city"]
        ],
        "id": "place_label_city",
        "layout": {
          "icon-anchor": "center",
          "text-field": "{name:latin}",
          "text-font": {
            "stops": [
              [4, ["Nunito Regular"]],
              [7, ["Nunito Bold"]]
            ]
          },
          "text-max-width": 10,
          "text-size": {
            "stops": [
              [4, 14],
              [7, 15],
              [8, 19],
              [16, 22]
            ]
          },
          "visibility": "visible"
        },
        "maxzoom": 16,
        "minzoom": 4,
        "paint": {
          "icon-translate": [1, 11],
          "text-color": "rgba(0, 0, 0, 1)",
          "text-halo-blur": 0,
          "text-halo-color": "rgba(255, 255, 255, 1)",
          "text-halo-width": 2
        },
        "source": "openmaptiles",
        "source-layer": "place",
        "type": "symbol"
      },
      {
        "filter": [
          "all",
          ["==", "$type", "Point"],
          ["==", "class", "town"]
        ],
        "id": "place_label_town",
        "layout": {
          "icon-anchor": "center",
          "text-field": "{name:latin}",
          "text-font": {
            "stops": [
              [8, ["Nunito Regular"]],
              [14, ["Nunito Bold"]]
            ]
          },
          "text-max-width": 10,
          "text-size": {
            "stops": [[8, 15], [16, 18]]
          },
          "visibility": "visible"
        },
        "maxzoom": 16,
        "minzoom": 10,
        "paint": {
          "icon-translate": [1, 11],
          "text-color": "rgba(0, 0, 0, 1)",
          "text-halo-blur": 0,
          "text-halo-color": "rgba(255, 255, 255, 1)",
          "text-halo-width": 2
        },
        "source": "openmaptiles",
        "source-layer": "place",
        "type": "symbol"
      },
      {
        "filter": [
          "all",
          ["==", "class", "state"]
        ],
        "id": "place_state-label",
        "layout": {
          "text-field": "{name:latin} {name:nonlatin}",
          "text-font": [
            "Nunito Semi Bold"
          ],
          "text-max-width": 10,
          "text-size": 13,
          "text-transform": "uppercase",
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "a14c9607bc7954ba1df7205bf660433f"
        },
        "minzoom": 4,
        "paint": {
          "text-color": "rgba(0, 0, 0, 1)"
        },
        "source": "openmaptiles",
        "source-layer": "place",
        "type": "symbol"
      },
      {
        "filter": [
          "==",
          "class",
          "country"
        ],
        "id": "place_label_country",
        "layout": {
          "text-allow-overlap": false,
          "text-field": "{name:latin}",
          "text-font": {
            "stops": [
              [3, ["Nunito Regular"]],
              [4, ["Nunito Bold"]]
            ]
          },
          "text-ignore-placement": false,
          "text-max-width": 10,
          "text-padding": 2,
          "text-pitch-alignment": "map",
          "text-size": {
            "stops": [
              [3, 14],
              [4, 16],
              [5, 21]
            ]
          },
          "text-transform": "none",
          "visibility": "visible"
        },
        "minzoom": 2,
        "paint": {
          "text-color": "rgba(0, 0, 0, 1)",
          "text-halo-color": "#fff",
          "text-halo-width": 2
        },
        "source": "openmaptiles",
        "source-layer": "place",
        "type": "symbol"
      },
      {
        "filter": [
          "==",
          "class",
          "continent"
        ],
        "id": "place_label_continent",
        "layout": {
          "text-field": "{name:latin}",
          "text-font": [
            "Nunito Extra Bold"
          ],
          "text-line-height": 1.1,
          "text-max-width": 10,
          "text-size": {
            "stops": [[3, 18], [4, 24]]
          },
          "visibility": "visible"
        },
        "maxzoom": 2,
        "minzoom": 1,
        "paint": {
          "text-color": "rgba(0, 0, 0, 1)",
          "text-halo-color": "#fff",
          "text-halo-width": 2
        },
        "source": "openmaptiles",
        "source-layer": "place",
        "type": "symbol"
      }
    ],
    "sprite": "https://openmaptiles.github.io/maptiler-toner-gl-style/sprite",
    "id": "c4268e48-fac9-4478-8120-201224fbd4d8"
  }
}).addTo(map);

// Add this right after: const map = L.map('map').setView(...);
map.createPane('markerOverlay');
map.getPane('markerOverlay').style.zIndex = 650; // High enough to beat the map layer
map.getPane('markerOverlay').style.pointerEvents = 'none'; // So you can still pan the map


const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
cursor.id = "cursor"; 
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  // Using translate3d is smoother than top/left for performance
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
});

// Click feedback using a class (cleaner than modifying inline styles)
document.addEventListener("mousedown", () => cursor.classList.add("click"));
document.addEventListener("mouseup", () => cursor.classList.remove("click"));



function showSection(sectionId) {
  document.querySelectorAll("main section").forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
    
    if (sectionId === 'home' && typeof map !== 'undefined') {
      setTimeout(() => map.invalidateSize(), 100);
    }
  }
}
const startBtn = document.getElementById('start-map');
const introPopup = document.getElementById('intro-popup');

if (startBtn) {
  startBtn.addEventListener('click', () => {
    // 1. Add the dissolve class for the fade/blur effect
    introPopup.classList.add('dissolve');
    setTimeout(() => {
      introPopup.style.display = "none"; 
      showSection("home");
    }, 1200); 
  });
}
// Optimized Navigation Function
function showSection(sectionId) {
  const sections = document.querySelectorAll("main section");
  
  sections.forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
    if (sectionId === 'home') {
      // Small delay to ensure CSS transition has finished before recalculating map
      setTimeout(() => map.invalidateSize(), 50);
    }
  }
}
document.addEventListener('mousedown', () => cursor.classList.add('click'));
document.addEventListener('mouseup', () => cursor.classList.remove('click'));

function showSection(sectionId) {
  document.querySelectorAll("main section").forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
    if (sectionId === 'home') {
      setTimeout(() => map.invalidateSize(), 50);
    }
  }
}
// 4. Intro Button Logic
if (startBtn) {
  startBtn.addEventListener('click', () => {
    // 1. Add the dissolve class for the fade/blur effect
    introPopup.classList.add('dissolve');

    // 2. Wait for the CSS transition (1.2s) to finish
    setTimeout(() => {
      introPopup.style.display = "none"; 
      
      // 3. Show the home section and refresh the map
      showSection("home");
      
      // This is vital for Leaflet to render correctly after being hidden
      map.invalidateSize();
    }, 1200); 
  });
}

const myCustomIcon = L.divIcon({
  className: 'custom-cross-icon', 
  html: '<div class="marker-dot"></div>', 
  iconSize: [20, 20],
  iconAnchor: [10, 10] 
});
// 5. Markers & Data
   // 1. Icon Definition
const crossIcon = L.divIcon({
  className: 'custom-cross-icon',
  html: '<div class="cross-marker"></div>', 
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const soundLocations = [
  { 
    title: "Edward Jeffreys Ave", 
    description: "Edward Jeffreys avenue GO train station", 
    lat: 43.89411, lng: -79.27344, 
    time: "16 Feb, 2026 02:55pm", 
    audio: "https://image2url.com/r2/default/audio/1771616956404-94393f99-3144-4b5c-95fd-891869b3fdf8.m4a",
    cues: [
      { s: 0, t: "[Distant hum of the GO Train approaching]" },
      { s: 5, t: "Screech of brakes on metal tracks." },
      { s: 10, t: "[Automated chime: Doors opening]" }
    ]
  },
  { 
    title: "Scott Brown St", 
    description: "25 Scott Brown St", 
    lat: 43.89945, lng: -79.27401, 
    time: "17 Feb, 2026 5:30pm", 
    audio: "https://image2url.com/r2/default/audio/1771617515406-ea055bbd-6cb8-460f-b1be-d6a683aae14a.m4a",
    cues: [
      { s: 0, t: "[Residential neighborhood evening sounds]" },
      { s: 4, t: "Wind rustling through bare winter branches." },
      { s: 12, t: "A car passes in the distance." }
    ]
  },
  { 
    title: "Edward Jeffreys GO Bus Station", 
    description: "Markham Rd at Edward Jeffreys Ave", 
    lat: 43.896358, lng: -79.265278, 
    time: "16 Feb, 2026 10:20pm", 
    audio: "https://image2url.com/r2/default/audio/1771617711520-42b4daf9-bea6-409f-98a2-931ec4d6aa53.m4a",
    cues: [
      { s: 0, t: "[Idling bus engine vibrations]" },
      { s: 6, t: "The hiss of hydraulic suspension." },
      { s: 15, t: "Muffled traffic from Markham Road." }
    ]
  },
  { 
    title: "Bur Oak Ave", 
    description: "Bur Oak Ave", 
    lat: 43.8929, lng: -79.3022, 
    time: "17 Feb, 2026 4:00pm", 
    audio: "https://image2url.com/r2/default/audio/1771617858226-0335278e-1a9a-4509-86d6-d80ff5f8aca6.m4a",
    cues: [
      { s: 0, t: "[Suburban street atmosphere]" },
      { s: 8, t: "Distant sound of a crosswalk signal chirping." }
    ]
  },
  { 
    title: "South Unionville Ave", 
    description: "Highway 407", 
    lat: 43.8605, lng: -79.2833, 
    time: "16 Feb, 2026 12:00pm", 
    audio: "https://image2url.com/r2/default/audio/1771618112948-02075d34-09c1-4200-8bc5-6e1b130472f2.m4a",
    cues: [
      { s: 0, t: "[Continuous white noise of highway traffic]" },
      { s: 5, t: "High-speed gusts as vehicles pass overhead." }
    ]
  },
  { 
    title: "Markham Auto Spa", 
    description: "New Kennedy Mall", 
    lat: 43.85934, lng: -79.3047, 
    time: "17 Feb, 2026 5:47pm", 
    audio: "https://image2url.com/r2/default/audio/1771618383533-1b1844c7-6186-4d66-a64e-d8fb2e0b8eff.m4a",
    cues: [
      { s: 0, t: "[High-pressure water spray drones]" },
      { s: 7, t: "Metallic clanging of car wash machinery." }
    ]
  },
  { 
    title: "Edward Jeffreys Ave", 
    description: "Inside GO Train", 
    lat: 43.89412, lng: -79.27343, 
    time: "16 Feb, 2026 02:45pm", 
    audio: "https://image2url.com/r2/default/audio/1771618633399-02792719-3ee0-4572-b59a-75379656f70b.m4a",
    cues: [
      { s: 0, t: "[Muffled interior train cabin rumble]" },
      { s: 10, t: "[Automated Voice: 'Now arriving at Mount Joy']" }
    ]
  },
  { 
    title: "Kennedy Rd", 
    description: "T&T Meat Market", 
    lat: 43.85934, lng:-79.3047, 
    time: "16 Feb, 2026 4:32pm", 
    audio: "https://image2url.com/r2/default/audio/1771618722900-06fc915f-343b-4b38-85a1-6ec0bc6ed6b0.m4a",
    cues: [
      { s: 0, t: "[Supermarket chatter and cart wheels]" },
      { s: 5, t: "The rhythmic chopping at the meat counter." }
    ]
  },
  { 
    title: "Markham GO Bus", 
    description: "Highway 407", 
    lat: 43.896358, lng: -79.265278, 
    time: "16 Feb, 2026 10:46pm", 
    audio: "https://image2url.com/r2/default/audio/1771619947868-cef868a6-5059-4f3d-bddb-3028eb21ac17.m4a",
    cues: [
      { s: 0, t: "[Late night bus interior silence]" },
      { s: 12, t: "Turn signal clicking 'tic-toc' rhythm." }
    ]
  },
  { 
    title: "Markham Plaza", 
    description: "Train", 
    lat: 43.8763, lng: -79.2575, 
    time: "17 Feb, 2026 4:00pm", 
    audio: "https://image2url.com/r2/default/audio/1772144198078-d1de5c85-3734-4222-abdb-8915acf204de.m4a",
    cues: [
      { s: 0, t: "[Platform announcements echoing]" },
      { s: 8, t: "Squeal of metal wheels on a curved track." }
    ]
  },
  { 
    title: "Kennedy Rd", 
    description: "Kennedy Rd", 
    lat: 43.874527, lng: -79.286243, 
    time: "18 Feb, 2026 8:30pm", 
    audio: "https://image2url.com/r2/default/audio/1772144461963-b6596e1b-7a63-40de-9dc0-771281e02950.m4a",
    cues: [
      { s: 0, t: "[Wet pavement sounds from recent rain]" },
      { s: 6, t: "Heavy truck passing with a deep bass roar." }
    ]
  },
  { 
    title: "Mercedes-Benz Markham", 
    description: "Mercedes-Benz Markham", 
    lat: 43.8577525, lng: -79.3043853, 
    time: "19 Feb, 2026 5:02pm", 
    audio: "https://image2url.com/r2/default/audio/1772144515177-ef239853-490c-4881-9f99-78d92d8c7fdc.m4a",
    cues: [
      { s: 0, t: "[Polished showroom reverb]" },
      { s: 4, t: "Soft click of a car door closing." }
    ]
  },
  { 
    title: "Milliken Meadows Dr GO Train", 
    description: "Milliken Meadows Dr GO Train", 
    lat: 43.82319, lng: -79.30167, 
    time: "20 Feb, 2026 4:33pm", 
    audio: "https://image2url.com/r2/default/audio/1772144564808-71c77456-09c8-4500-814d-5019b67bffd2.m4a",
    cues: [
      { s: 0, t: "[Outdoor platform wind interference]" },
      { s: 9, t: "Electronic chime for departing train." }
    ]
  },
  { 
    title: "Day & Night King Crab", 
    description: "Day and Night Crab Kitchen", 
    lat: 43.82392, lng: -79.30074, 
    time: "21 Feb, 2026 7:16pm", 
    audio: "https://image2url.com/r2/default/audio/1772144653984-18449777-4c39-44e2-84f8-30ac16ffbf44.m4a",
    cues: [
      { s: 0, t: "[Lively restaurant kitchen sounds]" },
      { s: 5, t: "Clinking of cutlery and porcelain." },
      { s: 15, t: "Distant laughter and bubbling steam." }
    ]
  }
];

soundLocations.forEach((location, index) => {
  const marker = L.marker([location.lat, location.lng], {
    icon: crossIcon,
    zIndexOffset: 2000 
  }).addTo(map);
  

  const popupHTML = `
    <div class="popup-content" style="width: 200px;">
      <h3 style="color:#ff0000; margin:0 0 5px 0;">${location.title}</h3>
      <p style="font-size: 0.7rem; color: #666; margin-bottom: 7px;">Recorded: ${location.time}</p>
      
      <audio id="audio-${index}" controls src="${location.audio}" style="width:100%; margin-bottom:10px;"></audio>
      
      <div id="transcript-${index}" class="auto-transcript">
        Press the play button to play
      </div>
    </div>
  `;

  marker.bindPopup(popupHTML);

  // 4. The Auto-Transcript Logic
  marker.on('popupopen', () => {
    const audio = document.getElementById(`audio-${index}`);
    const display = document.getElementById(`transcript-${index}`);

    if (audio && location.cues) {
      audio.ontimeupdate = () => {
        let activeText = "RECORDING...";
        // Loop through cues to find which one is active
        location.cues.forEach(cue => {
          if (audio.currentTime >= cue.s) {
            activeText = cue.t;
          }
        });
        display.innerText = activeText;
      };
    }
  });
});
    soundLocations.forEach((location) => {
      const marker = L.marker([location.lat, location.lng], {
        icon: crossIcon,
        pane: 'markerOverlay', // THIS IS THE KEY!
        zIndexOffset: 2000 
      }).addTo(map);
    
      marker.bindPopup(`
        <div class="popup-content" style="color:black;">
          <h3 style="color:#ff0000; margin:0;">${location.title}</h3>
          <p>${location.description}</p>
          <audio controls src="${location.audio}" style="width:100%;"></audio>
        </div>
      `);

      
    });

if (startBtn) {
  startBtn.addEventListener('click', () => {
    setTimeout(() => {
      introPopup.style.display = "none"; 
      
      showSection("home");
      
       map.invalidateSize();
    }, 1200); 
  });
}

function showSection(sectionId) {
  const sections = document.querySelectorAll("main section");
  
  sections.forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
    
    if (sectionId === 'home') {
      map.invalidateSize();
    }
  }
}
function showSection(sectionId) {
  document.querySelectorAll("main section").forEach(section => {
    section.classList.remove("active");
    section.style.display = "none"; 
  });

  // 2. Show only the one we want
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
    target.style.display = "block";
    
    if (sectionId === 'home') {
      setTimeout(() => map.invalidateSize(), 200);
    }
  }
}

function showSection(sectionId) {
  document.querySelectorAll('main > section').forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });

  const activeSection = document.getElementById(sectionId);
  activeSection.style.display = 'block';
  activeSection.classList.add('active');

  if (sectionId === 'home') {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }
}

function toggleBrowser() {
  const browser = document.getElementById('soundBrowser');
  browser.classList.toggle('collapsed');
}
// --- 1. THE DATA (MUST BE AT THE TOP) ---
const soundData = [
  { 
    title: "Edward Jeffreys Ave", 
    category: "Transit",
    description: "Edward Jeffreys avenue GO train station", 
    lat: 43.89411, lng: -79.27344, 
    time: "16 Feb, 2026 02:55pm", 
    audio: "https://image2url.com/r2/default/audio/1771616956404-94393f99-3144-4b5c-95fd-891869b3fdf8.m4a"
  },
  { 
    title: "Scott Brown St", 
    category: "Residential",
    description: "25 Scott Brown St", 
    lat: 43.89945, lng: -79.27401, 
    time: "17 Feb, 2026 5:30pm", 
    audio: "https://image2url.com/r2/default/audio/1771617515406-ea055bbd-6cb8-460f-b1be-d6a683aae14a.m4a"
  },
  { 
    title: "Edward Jeffreys GO Bus Station", 
    category: "Transit",
    description: "Markham Rd at Edward Jeffreys Ave", 
    lat: 43.896358, lng: -79.265278, 
    time: "16 Feb, 2026 10:20pm", 
    audio: "https://image2url.com/r2/default/audio/1771617711520-42b4daf9-bea6-409f-98a2-931ec4d6aa53.m4a"
  },
  { 
    title: "Bur Oak Ave", 
    category: "Residential",
    description: "Bur Oak Ave", 
    lat: 43.8929, lng: -79.3022, 
    time: "17 Feb, 2026 4:00pm", 
    audio: "https://image2url.com/r2/default/audio/1771617858226-0335278e-1a9a-4509-86d6-d80ff5f8aca6.m4a"
  },
  { 
    title: "South Unionville Ave", 
    category: "Transit",
    description: "Highway 407", 
    lat: 43.8605, lng: -79.2833, 
    time: "16 Feb, 2026 12:00pm", 
    audio: "https://image2url.com/r2/default/audio/1771618112948-02075d34-09c1-4200-8bc5-6e1b130472f2.m4a"
  },
  { 
    title: "Markham Auto Spa", 
    category: "Commercial",
    description: "New Kennedy Mall", 
    lat: 43.85934, lng: -79.3047, 
    time: "17 Feb, 2026 5:47pm", 
    audio: "https://image2url.com/r2/default/audio/1771618383533-1b1844c7-6186-4d66-a64e-d8fb2e0b8eff.m4a"
  },
  { 
    title: "Edward Jeffreys Ave", 
    category: "Transit",
    description: "Inside GO Train", 
    lat: 43.89412, lng: -79.27343, 
    time: "16 Feb, 2026 02:45pm", 
    audio: "https://image2url.com/r2/default/audio/1771618633399-02792719-3ee0-4572-b59a-75379656f70b.m4a"
  },
  { 
    title: "Kennedy Rd", 
    category: "Commercial",
    description: "T&T Meat Market", 
    lat: 43.85934, lng:-79.3047, 
    time: "16 Feb, 2026 4:32pm", 
    audio: "https://image2url.com/r2/default/audio/1771618722900-06fc915f-343b-4b38-85a1-6ec0bc6ed6b0.m4a"
  },
  { 
    title: "Markham GO Bus", 
    category: "Transit",
    description: "Highway 407", 
    lat: 43.896358, lng: -79.265278, 
    time: "16 Feb, 2026 10:46pm", 
    audio: "https://image2url.com/r2/default/audio/1771619947868-cef868a6-5059-4f3d-bddb-3028eb21ac17.m4a"
  },
  { 
    title: "Markham Plaza", 
    category: "Transit",
    description: "Train", 
    lat: 43.8763, lng: -79.2575, 
    time: "17 Feb, 2026 4:00pm", 
    audio: "https://image2url.com/r2/default/audio/1772144198078-d1de5c85-3734-4222-abdb-8915acf204de.m4a"
  },
  { 
    title: "Kennedy Rd", 
    category: "Residential",
    description: "Kennedy Rd", 
    lat: 43.874527, lng: -79.286243, 
    time: "18 Feb, 2026 8:30pm", 
    audio: "https://image2url.com/r2/default/audio/1772144461963-b6596e1b-7a63-40de-9dc0-771281e02950.m4a"
  },
  { 
    title: "Mercedes-Benz Markham", 
    category: "Commercial",
    description: "Mercedes-Benz Markham", 
    lat: 43.8577525, lng: -79.3043853, 
    time: "19 Feb, 2026 5:02pm", 
    audio: "https://image2url.com/r2/default/audio/1772144515177-ef239853-490c-4881-9f99-78d92d8c7fdc.m4a"
  },
  { 
    title: "Milliken Meadows Dr GO Train", 
    category: "Transit",
    description: "Milliken Meadows Dr GO Train", 
    lat: 43.82319, lng: -79.30167, 
    time: "20 Feb, 2026 4:33pm", 
    audio: "https://image2url.com/r2/default/audio/1772144564808-71c77456-09c8-4500-814d-5019b67bffd2.m4a"
  },
  { 
    title: "Day & Night King Crab", 
    category: "Commercial",
    description: "Day and Night Crab Kitchen", 
    lat: 43.82392, lng: -79.30074, 
    time: "21 Feb, 2026 7:16pm", 
    audio: "https://image2url.com/r2/default/audio/1772144653984-18449777-4c39-44e2-84f8-30ac16ffbf44.m4a"
  }
];

// --- 2. GLOBAL VARIABLES ---
let markers = []; 

// --- 3. HELPER FUNCTIONS ---
function showSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const intro = document.getElementById('intro-popup');
  const mapPg = document.getElementById('map-page');
  if (intro) intro.style.display = 'none';
  if (mapPg) mapPg.style.display = 'none';
  target.style.display = 'block';
}

function toggleBrowser() {
  const browser = document.getElementById('soundBrowser');
  if (browser) browser.classList.toggle('collapsed');
}

// --- 4. THE FILTER LOGIC ---
function filterSounds() {
  const searchEl = document.getElementById('soundSearch');
  const timeEl = document.getElementById('timeFilter');
  const catEl = document.getElementById('categoryFilter');
  const listContainer = document.getElementById('soundList');

  if (!timeEl || !catEl || !listContainer) return;

  const searchTerm = searchEl ? searchEl.value.toLowerCase() : "";
  const timeReq = timeEl.value;
  const catReq = catEl.value;

  // Clear Map and Sidebar
  markers.forEach(m => map.removeLayer(m));
  markers = [];
  listContainer.innerHTML = ''; 

  soundData.forEach((loc) => {
    // A. Search
    const matchesSearch = loc.title.toLowerCase().includes(searchTerm) || 
                          loc.description.toLowerCase().includes(searchTerm);
    // B. Category
    const matchesCategory = (catReq === 'all' || loc.category === catReq);
    
    // C. Time (4:59pm Logic)
    const timeStr = loc.time.toLowerCase();
    const isPM = timeStr.includes('pm');
    const hourMatch = timeStr.match(/(\d+):/);
    const hour = hourMatch ? parseInt(hourMatch[1]) : 0;
    let timeOfDay = "morning";
    if (isPM) {
      timeOfDay = (hour >= 5 && hour !== 12) ? "evening" : "afternoon";
    } else if (hour === 12) {
      timeOfDay = "evening"; 
    }
    const matchesTime = (timeReq === 'all' || timeOfDay === timeReq);

    // D. Render
    if (matchesSearch && matchesCategory && matchesTime) {
      const item = document.createElement('div');
      item.className = 'sound-item';
      item.style.padding = "10px 0";
      item.style.borderBottom = "1px solid #eee";
      item.innerHTML = `<strong>${loc.title}</strong><br><small>${loc.description}</small>`;
      
      const marker = L.marker([loc.lat, loc.lng], { icon: crossIcon }).addTo(map);
      marker.bindPopup(`<b>${loc.title}</b><br><audio controls src="${loc.audio}"></audio>`);

      item.onclick = () => {
        map.flyTo([loc.lat, loc.lng], 16);
        marker.openPopup();
      };

      listContainer.appendChild(item);
      markers.push(marker);
    }
  });
}

// --- 5. EXECUTION ---
filterSounds();