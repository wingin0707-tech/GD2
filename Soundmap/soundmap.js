


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

function showSection(sectionId) {
  const introPopup = document.getElementById("intro-popup");

  if (sectionId === 'intro-popup') {
    if (introPopup) {
      introPopup.style.display = "flex"; 
      
      setTimeout(() => {
        introPopup.classList.remove('dissolve');
        introPopup.style.pointerEvents = "auto"; // Re-enable clicks
      }, 10);
    }
  } else {
    if (introPopup) {
      introPopup.classList.add('dissolve');

      setTimeout(() => {
        if (introPopup.classList.contains('dissolve')) {
          introPopup.style.display = "none";
        }
      }, 1200); 
    }
  }
  function enterMap() {
    const introPopup = document.getElementById('intro-popup');
    
    // 1. If intro is visible, dissolve it
    if (introPopup && introPopup.style.display !== 'none') {
      introPopup.classList.add('dissolve');
      
      // 2. Wait for the blur animation, then switch
      setTimeout(() => {
        showSection('map-page');
      }, 1200);
    } else {
      // 3. If we're coming from About/Submit, just go to map
      showSection('map-page');
    }
  }
  
  function showSection(sectionId) {
    const introPopup = document.getElementById("intro-popup");
  
    // Handle Home Page Logic
    if (sectionId === 'intro-popup') {
      if (introPopup) {
        introPopup.style.display = "flex";
        introPopup.classList.remove('dissolve'); 
        introPopup.style.pointerEvents = "auto";
      }
    } else {
      if (introPopup) {
        introPopup.style.display = "none";
        // We keep 'dissolve' on so it's ready to fade in next time
      }
    }
  
    // --- Toggle Sections ---
    const sections = ["map-page", "about-page", "submission-page"];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.remove('active');
        el.style.display = "none";
      }
    });
  
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.add('active');
      target.style.display = "block";
      
      // Fix Leaflet Gray Box Glitch
      if (sectionId === 'map-page' && window.map) {
        setTimeout(() => {
          window.map.invalidateSize();
        }, 200);
      }
    }
  }
  const sections = ["map-page", "about-page", "submission-page"];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.remove('active');
      el.style.display = "none";
    }
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    target.style.display = "block";
    if (sectionId === 'map-page' && window.map) {
      setTimeout(() => map.invalidateSize(), 200);
    }
  }
}

const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);
 
document.addEventListener('mousemove', function(e) {
  cursor.style.transform = 'translate3d(' + e.clientX + 'px, ' + e.clientY + 'px, 0) translate(-50%, -50%)';
});
document.addEventListener('mousedown', function() { cursor.classList.add('click'); });
document.addEventListener('mouseup', function() { cursor.classList.remove('click'); });
 
const startBtn = document.getElementById('start-map');
const introPopup = document.getElementById('intro-popup');

if (startBtn && introPopup) {
  startBtn.addEventListener('click', () => {
    introPopup.classList.add('dissolve');

    setTimeout(() => {
      showPage('map-page');
    }, 1200);
  });
}

const crossIcon = L.divIcon({
  className: 'custom-cross-icon',
  html: '<div class="cross-marker"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});
 

const soundData = [
  // --- TRANSIT ---
  { 
    title: "Edward Jeffreys Ave", category: "Transit", description: "Edward Jeffreys avenue GO train station", 
    lat: 43.89411, lng: -79.27344, time: "16 Feb, 2026 02:55pm", 
    audio: "https://image2url.com/r2/default/audio/1771616956404-94393f99-3144-4b5c-95fd-891869b3fdf8.m4a",
    cues: [{ s: 0, t: "[Distant hum of the GO Train approaching]" }, { s: 5, t: "Screech of brakes on metal tracks." }, { s: 10, t: "[Automated chime: Doors opening]" }] 
  },
  { 
    title: "Edward Jeffreys GO Bus Station", category: "Transit", description: "Markham Rd at Edward Jeffreys Ave", 
    lat: 43.896358, lng: -79.265278, time: "16 Feb, 2026 10:20pm", 
    audio: "https://image2url.com/r2/default/audio/1771617711520-42b4daf9-bea6-409f-98a2-931ec4d6aa53.m4a",
    cues: [{ s: 0, t: "[Idling bus engine vibrations]" }, { s: 6, t: "The hiss of hydraulic suspension." }] 
  },
  { 
    title: "Highway 407", category: "Transit", description: "South Unionville Ave Overpass", 
    lat: 43.8605, lng: -79.2833, time: "16 Feb, 2026 12:00pm", 
    audio: "https://image2url.com/r2/default/audio/1771618112948-02075d34-09c1-4200-8bc5-6e1b130472f2.m4a",
    cues: [{ s: 0, t: "[Continuous white noise of highway traffic]" }] 
  },
  { 
    title: "Milliken Meadows GO", category: "Transit", description: "GO Train Platform", 
    lat: 43.82319, lng: -79.30167, time: "20 Feb, 2026 4:33pm", 
    audio: "https://image2url.com/r2/default/audio/1772144564808-71c77456-09c8-4500-814d-5019b67bffd2.m4a",
    cues: [{ s: 0, t: "[Outdoor platform wind]" }, { s: 9, t: "Electronic chime for departing train." }] 
  },

  // --- COMMERCIAL ---
  { 
    title: "The Ring Cafe", category: "Commercial", description: "Afternoon Cafe Ambiance", 
    lat: 43.89945, lng: -79.27401, time: "17 Feb, 2026 2:00pm", 
    audio: "audio/2:00 the ring cafe.m4a",
    cues: [{ s: 0, t: "[Cafe chatter and espresso machine]" }] 
  },
  { 
    title: "King Square (王府)", category: "Commercial", description: "Marketplace chatter", 
    lat: 43.8864, lng: -79.3465, time: "16 Feb, 2026 4:21pm", 
    audio: "audio/4:21pm 王府.m4a",
    cues: [{ s: 0, t: "[Lively chatter and shopping echoes]" }] 
  },
  { 
    title: "Markham Auto Spa", category: "Commercial", description: "Car wash machinery", 
    lat: 43.85934, lng: -79.3047, time: "17 Feb, 2026 5:47pm", 
    audio: "https://image2url.com/r2/default/audio/1771618383533-1b1844c7-6186-4d66-a64e-d8fb2e0b8eff.m4a",
    cues: [{ s: 0, t: "[High-pressure water drones]" }] 
  },
  { 
    title: "Day & Night King Crab", category: "Commercial", description: "Kitchen and dining sounds", 
    lat: 43.82392, lng: -79.30074, time: "21 Feb, 2026 7:16pm", 
    audio: "https://image2url.com/r2/default/audio/1772144653984-18449777-4c39-44e2-84f8-30ac16ffbf44.m4a",
    cues: [{ s: 0, t: "[Lively restaurant sounds]" }, { s: 5, t: "Clinking of cutlery." }] 
  },

  // --- RESIDENTIAL ---
  { 
    title: "Scott Brown St", category: "Residential", description: "Evening neighborhood sounds", 
    lat: 43.89945, lng: -79.27401, time: "17 Feb, 2026 5:30pm", 
    audio: "https://image2url.com/r2/default/audio/1771617515406-ea055bbd-6cb8-460f-b1be-d6a683aae14a.m4a",
    cues: [{ s: 0, t: "[Wind rustling branches]" }, { s: 12, t: "Distant car passes." }] 
  },
  { 
    title: "Bur Oak Ave (Day)", category: "Residential", description: "Afternoon street atmosphere", 
    lat: 43.8929, lng: -79.3022, time: "17 Feb, 2026 4:00pm", 
    audio: "audio/Bur Oak Ave 7.m4a",
    cues: [{ s: 0, t: "[Suburban street atmosphere]" }, { s: 8, t: "Crosswalk signal chirping." }] 
  },
  { 
    title: "Bur Oak Ave (Night)", category: "Residential", description: "Late night recording", 
    lat: 43.8931, lng: -79.3025, time: "17 Feb, 2026 8:00pm", 
    audio: "audio/Bur-Oak-8pm.m4a", // Make sure to name your file this!
    cues: [{ s: 0, t: "[Quiet night silence]" }, { s: 15, t: "Distanced traffic hum." }] 
  },
  { 
    title: "Cathedral High St", category: "Residential", description: "Quiet community street", 
    lat: 43.8912, lng: -79.3821, time: "19 Feb, 2026 11:00am", 
    audio: "audio/Cathedral High St.m4a",
    cues: [{ s: 0, t: "[Residential silence]" }] 
  },

  // --- OTHERS ---
  { title: "First Markham Place", category: "Commercial", lat: 43.8525, lng: -79.3496, time: "16 Feb, 2026 3:10pm", audio: "audio/First Markham Place 3:10PM.m4a" },
  { title: "Leslie St", category: "Transit", lat: 43.8231, lng: -79.3695, time: "18 Feb, 2026 1:00pm", audio: "audio/Leslie St.m4a" },
  { title: "Major Mackenzie Dr E", category: "Transit", lat: 43.9015, lng: -79.4442, time: "18 Feb, 2026 3:30pm", audio: "audio/Major Mackenzie Dr E.m4a" }
];
 
// ============================================================
// 7. FILTER + RENDER SOUNDS
// ============================================================
let markers = [];
 
function filterSounds() {
  const searchEl = document.getElementById('soundSearch');
  const timeEl = document.getElementById('timeFilter');
  const catEl = document.getElementById('categoryFilter');
  const listContainer = document.getElementById('soundList');
  
  if (!listContainer || !window.map) return;
 
  const searchTerm = searchEl ? searchEl.value.toLowerCase() : '';
  const timeReq = timeEl ? timeEl.value : 'all';
  const catReq = catEl ? catEl.value : 'all';
 
  // Clear old markers
  markers.forEach(m => map.removeLayer(m));
  markers = [];
  listContainer.innerHTML = '';
 
  soundData.forEach((loc, index) => {
    const matchesSearch = loc.title.toLowerCase().includes(searchTerm) || loc.description.toLowerCase().includes(searchTerm);
    const matchesCategory = (catReq === 'all' || loc.category === catReq);
 
    const timeStr = loc.time.toLowerCase();
    const isPM = timeStr.includes('pm');
    const hourMatch = timeStr.match(/(\d+):/);
    const hour = hourMatch ? parseInt(hourMatch[1]) : 0;
    
    let timeOfDay = 'morning';
    if (isPM) { 
      timeOfDay = (hour >= 5 && hour !== 12) ? 'evening' : 'afternoon'; 
    }
    const matchesTime = (timeReq === 'all' || timeOfDay === timeReq);
 
    if (matchesSearch && matchesCategory && matchesTime) {
      const item = document.createElement('div');
      item.className = 'sound-item';
      item.innerHTML = `<strong>${loc.title}</strong><br><small>${loc.description}</small>`;
 
      const popupHTML = `
        <div class="popup-content" style="width:200px;">
          <h3 style="color:#ff0000;margin:0 0 5px 0;">${loc.title}</h3>
          <p style="font-size:0.7rem;color:#666;margin-bottom:7px;">Recorded: ${loc.time}</p>
          <audio id="audio-${index}" controls src="${loc.audio}" style="width:100%;margin-bottom:10px;"></audio>
          <div id="transcript-${index}" class="auto-transcript">Press play to begin</div>
        </div>`;
 
      const marker = L.marker([loc.lat, loc.lng], { icon: crossIcon }).addTo(map);
      marker.bindPopup(popupHTML);
 
      marker.on('popupopen', () => {
        const audio = document.getElementById(`audio-${index}`);
        const display = document.getElementById(`transcript-${index}`);
        if (audio && loc.cues) {
          audio.ontimeupdate = () => {
            let activeText = 'RECORDING...';
            loc.cues.forEach(cue => {
              if (audio.currentTime >= cue.s) activeText = cue.t;
            });
            display.innerText = activeText;
          };
        }
      });
 
      item.onclick = () => {
        map.flyTo([loc.lat, loc.lng], 16);
        marker.openPopup();
      };
 
      listContainer.appendChild(item);
      markers.push(marker);
    }
  });
}

// Initial Run
document.addEventListener('DOMContentLoaded', filterSounds);

