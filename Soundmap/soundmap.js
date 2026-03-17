const menuButton = document.getElementById("menuButton");
const menuContainer = document.getElementById("menuContainer");

if (menuButton && menuContainer) {
  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("spin");
    menuContainer.classList.toggle("show");
  });
}

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


// MapLibreGL layer using OpenStreetMap raster tiles

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
  "bearing": 0,
  "pitch": 0,
  "sources": {
    "openmaptiles": {
      "type": "vector",
      "url": "https://api.maptiler.com/tiles/v3-openmaptiles/tiles.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL"
    }
  },
  "glyphs": "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
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
        "fill-color": {
          "stops": [
            [6, "#2044e9"],
            [10, "#2044e9"]
          ],
          "type": "exponential"
        },
        "fill-opacity": 1,
        "fill-outline-color": "rgba(255, 32, 32, 1)"
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
        "fill-opacity": {
          "property": "",
          "type": "categorical",
          "stops": [
            [
              {"zoom": 10, "value": 0},
              0.75
            ],
            [
              {"zoom": 14, "value": 0},
              1
            ]
          ]
        },
        "fill-outline-color": "rgba(255, 0, 0, 1)",
        "fill-pattern": "dash-t",
        "fill-color": "rgba(248, 14, 14, 1)"
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




const soundLocations = [
  { title: "Edward Jeffreys Ave", description: "Edward Jeffreys avenue GO train station", lat: 43.89411, lng: -79.27344, time: "16 Feb, 2026 02:55pm", audio: "https://image2url.com/r2/default/audio/1771616956404-94393f99-3144-4b5c-95fd-891869b3fdf8.m4a" },
  { title: "Scott Brown St", description: "25 Scott Brown St", lat: 43.89945, lng: -79.27401, time: "17 Feb, 2026 5:30pm", audio: "https://image2url.com/r2/default/audio/1771617515406-ea055bbd-6cb8-460f-b1be-d6a683aae14a.m4a" },
  { title: "Edward Jeffreys GO Bus Station", description: "Markham Rd at Edward Jeffreys Ave", lat: 43.896358, lng: -79.265278, time: "16 Feb, 2026 10:20pm", audio: "https://image2url.com/r2/default/audio/1771617711520-42b4daf9-bea6-409f-98a2-931ec4d6aa53.m4a" },
  { title: "Bur Oak Ave", description: "Bur Oak Ave", lat: 43.8929, lng: -79.3022, time: "17 Feb, 2026 4:00pm", audio: "https://image2url.com/r2/default/audio/1771617858226-0335278e-1a9a-4509-86d6-d80ff5f8aca6.m4a" },
  { title: "South Unionville Ave", description: "Highway 407", lat: 43.8605, lng: -79.2833, time: "16 Feb, 2026 12:00pm", audio: "https://image2url.com/r2/default/audio/1771618112948-02075d34-09c1-4200-8bc5-6e1b130472f2.m4a" },
  { title: "Markham Auto Spa", description: "New Kennedy Mall", lat: 43.85934, lng: -79.3047, time: "17 Feb, 2026 5:47pm", audio: "https://image2url.com/r2/default/audio/1771618383533-1b1844c7-6186-4d66-a64e-d8fb2e0b8eff.m4a" },
  { title: "Edward Jeffreys Ave", description: "Inside GO Train", lat: 43.89412, lng: -79.27343, time: "16 Feb, 2026 02:45pm", audio: "https://image2url.com/r2/default/audio/1771618633399-02792719-3ee0-4572-b59a-75379656f70b.m4a" },
  { title: "Kennedy Rd", description: "T&T Meat Market", lat: 43.85934, lng: -79.3047, time: "16 Feb, 2026 4:32pm", audio: "https://image2url.com/r2/default/audio/1771618722900-06fc915f-343b-4b38-85a1-6ec0bc6ed6b0.m4a" },
  { title: "Markham GO Bus", description: "Highway 407", lat: 43.896358, lng: -79.265278, time: "16 Feb, 2026 10:46pm", audio: "https://image2url.com/r2/default/audio/1771619947868-cef868a6-5059-4f3d-bddb-3028eb21ac17.m4a" },
  { title: "Markham Plaza", description: "Train", lat: 43.8763, lng: -79.2575, time: "17 Feb, 2026 4:00pm", audio: "https://image2url.com/r2/default/audio/1772144198078-d1de5c85-3734-4222-abdb-8915acf204de.m4a" },
  { title: "Kennedy Rd", description: "Kennedy Rd", lat: 43.874527, lng: -79.286243, time: "18 Feb, 2026 8:30pm", audio: "https://image2url.com/r2/default/audio/1772144461963-b6596e1b-7a63-40de-9dc0-771281e02950.m4a" },
  { title: "Mercedes-Benz Markham", description: "Mercedes-Benz Markham", lat: 43.8577525, lng: -79.3043853, time: "19 Feb, 2026 5:02pm", audio: "https://image2url.com/r2/default/audio/1772144515177-ef239853-490c-4881-9f99-78d92d8c7fdc.m4a" },
  { title: "Milliken Meadows Dr GO Train", description: "Milliken Meadows Dr GO Train", lat: 43.82319, lng: -79.30167, time: "20 Feb, 2026 4:33pm", audio: "https://image2url.com/r2/default/audio/1772144564808-71c77456-09c8-4500-814d-5019b67bffd2.m4a" },
  { title: "Day & Night King Crab", description: "Day and Night Crab Kitchen", lat: 43.82392, lng: -79.30074, time: "21 Feb, 2026 7:16pm", audio: "https://image2url.com/r2/default/audio/1772144653984-18449777-4c39-44e2-84f8-30ac16ffbf44.m4a" }
];

// CURSOR LOGIC
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// MARKERS AND PATH
const markerGroup = L.layerGroup().addTo(map);
const pathCoords = [];

soundLocations.forEach((location, index) => {
  pathCoords.push([location.lat, location.lng]);

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
  const transcriptText = `Recording captured at ${location.title}. Duration: 30s. Ambient sound profile active.`;

  marker.bindPopup(`
    <div class="map-popup-content">
      <b style="text-transform:uppercase">${location.title}</b><br>
      ${location.description}<br>
      <i>${location.time}</i><br><br>
      <audio controls id="${audioId}" style="width:200px">
        <source src="${location.audio}" type="audio/mp4">
      </audio>
      <div id="${transcriptId}" class="typing-box"></div>
    </div>
  `);

  marker.on('popupopen', () => {
    const popupEl = marker.getPopup().getElement();
    const audio = popupEl.querySelector(`#${audioId}`);
    const transcript = popupEl.querySelector(`#${transcriptId}`);
    let typingInterval;

    audio.addEventListener('play', () => {
      transcript.textContent = '';
      let i = 0;
      clearInterval(typingInterval);
      typingInterval = setInterval(() => {
        if (i < transcriptText.length) {
          transcript.textContent += transcriptText[i];
          i++;
        } else { clearInterval(typingInterval); }
      }, 30); 
    });
    audio.addEventListener('pause', () => clearInterval(typingInterval));
  });
});

// DRAW THE DOTTED LINE
if (pathCoords.length > 1) {
  L.polyline(pathCoords, {
    color: '#000',      // Will become pink/purple with the filter
    weight: 2,
    dashArray: '5, 10',
    opacity: 0.8
  }).addTo(map);
}