


// Map setup
const map = L.map('map', {
  maxZoom: 15,
  minZoom: 13,          
  maxBoundsViscosity: 1.0  
}).setView([43.8561, -79.3370], 13);


// Base map style layer
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

// Marker guide helpers
const markerGuide = document.getElementById('marker-guide');
const dismissMarkerGuideBtn = document.getElementById('dismiss-marker-guide');
let markerGuideTimeoutId = null;
let markerGuideDismissed = false;

function hideMarkerGuide(markSeen = false) {
  if (!markerGuide) return;

  markerGuide.classList.remove('visible');
  markerGuide.setAttribute('aria-hidden', 'true');

  if (markerGuideTimeoutId) {
    clearTimeout(markerGuideTimeoutId);
    markerGuideTimeoutId = null;
  }

  if (markSeen) {
    markerGuideDismissed = true;
  }
}

function showMarkerGuide() {
  if (!markerGuide || markerGuideDismissed) return;

  markerGuide.classList.add('visible');
  markerGuide.setAttribute('aria-hidden', 'false');

  if (markerGuideTimeoutId) {
    clearTimeout(markerGuideTimeoutId);
  }

  markerGuideTimeoutId = setTimeout(() => {
    hideMarkerGuide(false);
  }, 9000);
}

if (dismissMarkerGuideBtn) {
  dismissMarkerGuideBtn.addEventListener('click', () => {
    hideMarkerGuide(true);
  });
}

// Section switching
function showSection(sectionId) {
  const introPopup = document.getElementById('intro-popup');
  const sections = ['map-page', 'about-page', 'submission-page'];

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.remove('active');
      el.style.display = 'none';
    }
  });

  if (sectionId === 'intro-popup') {
    if (introPopup) {
      introPopup.style.display = 'flex';
      introPopup.classList.remove('dissolve');
      introPopup.style.pointerEvents = 'auto';
    }
    return;
  }

  if (introPopup) {
    introPopup.classList.add('dissolve');
    introPopup.style.pointerEvents = 'none';
    introPopup.style.display = 'none';
  }

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    target.style.display = 'block';
  }

  if (sectionId === 'map-page') {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    setTimeout(() => {
      showMarkerGuide();
    }, 260);
  } else {
    hideMarkerGuide(false);
  }
}

// Intro transition
function enterMap() {
  const introPopup = document.getElementById('intro-popup');

  if (introPopup && introPopup.style.display !== 'none') {
    introPopup.classList.add('dissolve');
    introPopup.style.pointerEvents = 'none';

    setTimeout(() => {
      showSection('map-page');
    }, 1200);
    return;
  }

  showSection('map-page');
}

// Custom cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);
 
document.addEventListener('mousemove', function(e) {
  cursor.style.transform = 'translate3d(' + e.clientX + 'px, ' + e.clientY + 'px, 0) translate(-50%, -50%)';
});
document.addEventListener('mousedown', function() { cursor.classList.add('click'); });
document.addEventListener('mouseup', function() { cursor.classList.remove('click'); });

const crossIcon = L.divIcon({
  className: 'custom-cross-icon',
  html: '<div class="cross-marker"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});


// Sound dataset
const soundData = [
  { 
    title: "Edward Jeffreys Ave", category: "Transit", description: "Edward Jeffreys avenue GO train station", 
    lat: 43.89411, lng: -79.27344, time: "16 Feb, 2026 02:55pm", 
    audio: "https://image2url.com/r2/default/audio/1771616956404-94393f99-3144-4b5c-95fd-891869b3fdf8.m4a",
    cues: [{ s: 0, t: "[Distant hum of the GO Train approaching]" }, { s: 5, t: "Screech of brakes on metal tracks." }, { s: 10, t: "[Automated chime: Doors opening]" }] 
  },
  { 
    title: "Scott Brown St", category: "Residential", description: "My neighbourhood street", 
    lat: 43.89945, lng: -79.27401, time: "17 Feb, 2026 5:30pm", 
    audio: "https://image2url.com/r2/default/audio/1771617515406-ea055bbd-6cb8-460f-b1be-d6a683aae14a.m4a",
    cues: [{ s: 0, t: "[Residential neighborhood evening sounds]" }, { s: 4, t: "Wind rustling through bare winter branches." }, { s: 12, t: "A car passes in the distance." }] 
  },
  { 
    title: "Edward Jeffreys GO Bus Station", category: "Transit", description: "Markham Rd at Edward Jeffreys Ave", 
    lat: 43.896358, lng: -79.265278, time: "16 Feb, 2026 10:20pm", 
    audio: "https://image2url.com/r2/default/audio/1771617711520-42b4daf9-bea6-409f-98a2-931ec4d6aa53.m4a",
    cues: [{ s: 0, t: "[Idling bus engine vibrations]" }, { s: 6, t: "The hiss of hydraulic suspension." }] 
  },
  { 
    title: "Bur Oak Ave", category: "Residential", description: "Bur Oak Ave", 
    lat: 43.8929, lng: -79.3022, time: "17 Feb, 2026 4:00pm", 
    audio: "https://image2url.com/r2/default/audio/1771617858226-0335278e-1a9a-4509-86d6-d80ff5f8aca6.m4a",
    cues: [{ s: 0, t: "[Suburban street atmosphere]" }, { s: 8, t: "Distant sound of a crosswalk signal chirping." }] 
  },
  { 
    title: "South Unionville Ave", category: "Transit", description: "Highway 407", 
    lat: 43.8605, lng: -79.2833, time: "16 Feb, 2026 12:00pm", 
    audio: "https://image2url.com/r2/default/audio/1771618112948-02075d34-09c1-4200-8bc5-6e1b130472f2.m4a",
    cues: [{ s: 0, t: "[Continuous white noise of highway traffic]" }, { s: 5, t: "High-speed gusts as vehicles pass overhead." }] 
  },
  { 
    title: "Markham Auto Spa", category: "Commercial", description: "New Kennedy Mall", 
    lat: 43.85934, lng: -79.3047, time: "17 Feb, 2026 5:47pm", 
    audio: "https://image2url.com/r2/default/audio/1771618383533-1b1844c7-6186-4d66-a64e-d8fb2e0b8eff.m4a",
    cues: [{ s: 0, t: "[High-pressure water spray drones]" }, { s: 7, t: "Metallic clanging of car wash machinery." }] 
  },
  { 
    title: "Edward Jeffreys Ave", category: "Transit", description: "Inside GO Train", 
    lat: 43.89412, lng: -79.27343, time: "16 Feb, 2026 02:45pm", 
    audio: "https://image2url.com/r2/default/audio/1771618633399-02792719-3ee0-4572-b59a-75379656f70b.m4a",
    cues: [{ s: 0, t: "[Muffled interior train cabin rumble]" }, { s: 10, t: "[Automated Voice: Now arriving at Mount Joy]" }] 
  },
  { 
    title: "Kennedy Rd", category: "Commercial", description: "T&T Meat Market", 
    lat: 43.85934, lng: -79.3047, time: "16 Feb, 2026 4:32pm", 
    audio: "https://image2url.com/r2/default/audio/1771618722900-06fc915f-343b-4b38-85a1-6ec0bc6ed6b0.m4a",
    cues: [{ s: 0, t: "[Supermarket chatter and cart wheels]" }, { s: 5, t: "The rhythmic chopping at the meat counter." }] 
  },
  { 
    title: "Markham GO Bus", category: "Transit", description: "Highway 407", 
    lat: 43.896358, lng: -79.265278, time: "16 Feb, 2026 10:46pm", 
    audio: "https://image2url.com/r2/default/audio/1771619947868-cef868a6-5059-4f3d-bddb-3028eb21ac17.m4a",
    cues: [{ s: 0, t: "[Late night bus interior silence]" }, { s: 12, t: "Turn signal clicking tic-toc rhythm." }] 
  },
  { 
    title: "Markham Plaza", category: "Transit", description: "Train", 
    lat: 43.8763, lng: -79.2575, time: "17 Feb, 2026 4:00pm", 
    audio: "https://image2url.com/r2/default/audio/1772144198078-d1de5c85-3734-4222-abdb-8915acf204de.m4a",
    cues: [{ s: 0, t: "[Platform announcements echoing]" }, { s: 8, t: "Squeal of metal wheels on a curved track." }] 
  },
  { 
    title: "Kennedy Rd", category: "Residential", description: "Kennedy Rd", 
    lat: 43.874527, lng: -79.286243, time: "18 Feb, 2026 8:30pm", 
    audio: "https://image2url.com/r2/default/audio/1772144461963-b6596e1b-7a63-40de-9dc0-771281e02950.m4a",
    cues: [{ s: 0, t: "[Wet pavement sounds from recent rain]" }, { s: 6, t: "Heavy truck passing with a deep bass roar." }] 
  },
  { 
    title: "Mercedes-Benz Markham", category: "Commercial", description: "Mercedes-Benz Markham", 
    lat: 43.8577525, lng: -79.3043853, time: "19 Feb, 2026 5:02pm", 
    audio: "https://image2url.com/r2/default/audio/1772144515177-ef239853-490c-4881-9f99-78d92d8c7fdc.m4a",
    cues: [{ s: 0, t: "[Polished showroom reverb]" }, { s: 4, t: "Soft click of a car door closing." }] 
  },
  { 
    title: "Day & Night King Crab", category: "Commercial", description: "Day and Night Crab Kitchen", 
    lat: 43.82392, lng: -79.30074, time: "21 Feb, 2026 7:16pm", 
    audio: "https://image2url.com/r2/default/audio/1772144653984-18449777-4c39-44e2-84f8-30ac16ffbf44.m4a",
    cues: [{ s: 0, t: "[Lively restaurant kitchen sounds]" }, { s: 5, t: "Clinking of cutlery and porcelain." }, { s: 15, t: "Distant laughter and bubbling steam." }] 
  },

  { 
    title: "Unionville Station", category: "Transit", description: "Unionville Station platform ambiance", 
    lat: 43.8519, lng: -79.3142, time: "14 April, 2026 01:41pm", 
    audio: "https://www.image2url.com/r2/default/audio/1776276712261-d41c86c2-b5fd-4258-8c08-158dd8773fbf.m4a",
    cues: [{ s: 0, t: "[Station ambiance]" }] 
  },
  { 
    title: "The Ring Cafe", category: "Commercial", description: "Afternoon cafe atmosphere", 
    lat: 43.8456331, lng: -79.3061777, time: "14 April, 2026 02:00pm", 
    audio: "https://www.image2url.com/r2/default/audio/1776276783148-9294ae0f-ce51-487c-89bd-59189308680f.m4a",
    cues: [{ s: 0, t: "[Cafe chatter and espresso machines]" }] 
  },
  { 
    title: "First Markham Place", category: "Commercial", description: "Indoor mall ambiance/ the food court", 
    lat: 43.8525, lng: -79.3496, time: "14 April, 2026 03:49pm", 
    audio: "https://www.image2url.com/r2/default/audio/1776276825563-f720170f-e801-4e6c-aba6-8a36f748546e.m4a",
    cues: [{ s: 0, t: "[Mall chatter and background hum]" }] 
  },
  { 
    title: "King Square", category: "Commercial", description: "Marketplace chatter", 
    lat: 43.8864, lng: -79.3465, time: "14 April, 2026 04:21pm", 
    audio: "https://www.image2url.com/r2/default/audio/1776276941299-f45fdcc8-b48d-4aa8-829a-ff70887e85b3.m4a",
    cues: [{ s: 0, t: "[Lively market sounds]" }] 
  },
  { 
    title: "Bur Oak Ave (Night)", category: "Residential", description: "Late night residential street", 
    lat: 43.8931, lng: -79.3025, time: "14 April, 2026 08:00pm", 
    audio: "https://www.image2url.com/r2/default/audio/1776276951992-fadc049c-c2ac-468a-bb73-e14ebd12bd61.m4a",
    cues: [{ s: 0, t: "[Quiet evening ambiance]" }] 
  },
  { 
    title: "Cathedral High St", category: "Residential", description: "Suburban street atmosphere", 
    lat: 43.8912, lng: -79.3821, time: "14 April, 2026 11:00am", 
    audio: "https://www.image2url.com/r2/default/audio/1776277052274-c02bee66-dc7f-4e59-bd48-f550eb1ea6ad.m4a",
    cues: [{ s: 0, t: "[Residential silence]" }] 
  },
  { 
    title: "Enterprise Blvd", category: "Transit", description: "Street-side transit sounds", 
    lat: 43.8552, lng: -79.3361, time: "14 April, 2026 03:07pm", 
    audio: "https://www.image2url.com/r2/default/audio/1776277625750-8274fdd8-fcd9-4822-847b-3788db6b60d3.m4a",
    cues: [{ s: 0, t: "[Urban traffic sounds]" }] 
  },
  { 
    title: "First Markham Place", category: "Commercial", description: "Mall enviornment", 
    lat: 43.8525, lng: -79.3496, time: "15 April, 2026 03:10pm", 
    audio: "https://www.image2url.com/r2/default/audio/1776277653967-0e47446e-4b67-44c9-938b-2d80371d684f.m4a",
    cues: [{ s: 0, t: "[An old CD player shop in the mall]" }] 
  },
  { 
    title: "Leslie St", category: "Transit", description: "Roadside ambiance", 
    lat: 43.8231, lng: -79.3695, time: "18 Feb, 2026 01:00pm", 
    audio: "https://www.image2url.com/r2/default/audio/1776277680965-90db01a8-dc68-431a-b3ed-01deb605d995.m4a",
    cues: [{ s: 0, t: "[Steady traffic flow]" }] 
  },
  { 
    title: "Major Mackenzie Dr E", category: "Transit", description: "Main road traffic", 
    lat: 43.9015, lng: -79.4442, time: "18 Feb, 2026 03:30pm", 
    audio: "https://www.image2url.com/r2/default/audio/1776277699355-3c8426ef-dce2-4430-8c21-876a3d6cd9fb.m4a",
    cues: [{ s: 0, t: "[Passing vehicles]" }] 
  },
  { 
    title: "Markham Street Circuit", category: "Transit", description: "Street racing area atmosphere", 
    lat: 43.8550, lng: -79.3150, time: "14 April, 2026 04:00pm", 
    audio: "https://www.image2url.com/r2/default/audio/1776277721407-dca4b06c-4542-41d6-912f-ae13a4fe1a12.m4a",
    cues: [{ s: 0, t: "[Distant engine roars]" }] 
  },
  { 
    title: "Mount Joy GO Station", category: "Transit", description: "Morning platform sounds", 
    lat: 43.9214, lng: -79.2631, time: "14 April 2026 08:06am", 
    audio: "https://image2url.com/r2/default/audio/1771616956404-94393f99-3144-4b5c-95fd-891869b3fdf8.m4a",
    cues: [{ s: 0, t: "[Morning station atmosphere]" }] 
  },
  { 
    title: "Via Renzo Dr", category: "Residential", description: "Quiet residential neighborhood", 
    lat: 43.8791, lng: -79.3624, time: "15 April, 2026 02:15pm", 
    audio: "https://image2url.com/r2/default/audio/1771616956404-94393f99-3144-4b5c-95fd-891869b3fdf8.m4a",
    cues: [{ s: 0, t: "[Residential silence]" }] 
  }
];
 

// Map filtering and marker rendering
let markers = [];

function getTimeOfDayLabel(timeValue) {
  const timeStr = timeValue.toLowerCase();
  const isPM = timeStr.includes('pm');
  const hourMatch = timeStr.match(/(\d+):/);
  const hour = hourMatch ? parseInt(hourMatch[1], 10) : 0;

  if (!isPM) {
    return 'morning';
  }

  return hour >= 5 && hour !== 12 ? 'evening' : 'afternoon';
}

function filterSounds() {
  const searchEl = document.getElementById('soundSearch');
  const timeEl = document.getElementById('timeFilter');
  const catEl = document.getElementById('categoryFilter');
  const listContainer = document.getElementById('soundList');

  if (!listContainer) return;

  const searchTerm = searchEl ? searchEl.value.toLowerCase() : '';
  const timeReq = timeEl ? timeEl.value : 'all';
  const catReq = catEl ? catEl.value : 'all';

  markers.forEach(marker => {
    if (map.hasLayer(marker)) {
      map.removeLayer(marker);
    }
  });
  markers = [];
  listContainer.innerHTML = '';

  soundData.forEach((loc, index) => {
    const matchesSearch = loc.title.toLowerCase().includes(searchTerm) || loc.description.toLowerCase().includes(searchTerm);
    const matchesCategory = (catReq === 'all' || loc.category === catReq);

    const timeOfDay = getTimeOfDayLabel(loc.time);
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

      marker.on('click', () => {
        marker.shouldAutoPlay = true;
        hideMarkerGuide(true);
      });

      marker.on('popupopen', () => {
        const audio = document.getElementById(`audio-${index}`);
        const display = document.getElementById(`transcript-${index}`);

        if (audio && marker.shouldAutoPlay) {
          audio.currentTime = 0;
          audio.play().catch(() => {});
          marker.shouldAutoPlay = false;
        }

        if (audio && display && loc.cues) {
          audio.ontimeupdate = () => {
            let activeText = 'RECORDING...';
            loc.cues.forEach(cue => {
              if (audio.currentTime >= cue.s) activeText = cue.t;
            });
            display.innerText = activeText;
          };
        }
      });

      marker.on('popupclose', () => {
        const audio = document.getElementById(`audio-${index}`);
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
        marker.shouldAutoPlay = false;
      });

      item.onclick = () => {
        marker.shouldAutoPlay = true;
        hideMarkerGuide(true);
        map.flyTo([loc.lat, loc.lng], 16);
        marker.openPopup();
      };

      listContainer.appendChild(item);
      markers.push(marker);
    }
  });
}

// About image hover sounds
const aboutSoundDictionary = {
  'sound-train': new Audio('https://image2url.com/r2/default/audio/1771618112948-02075d34-09c1-4200-8bc5-6e1b130472f2.m4a'),
  'sound-karaoke': new Audio('https://www.image2url.com/r2/default/audio/1776277653967-0e47446e-4b67-44c9-938b-2d80371d684f.m4a'),
  'sound-church': new Audio('https://www.image2url.com/r2/default/audio/1776277052274-c02bee66-dc7f-4e59-bd48-f550eb1ea6ad.m4a'),
  'sound-parking': new Audio('https://www.image2url.com/r2/default/audio/1776276941299-f45fdcc8-b48d-4aa8-829a-ff70887e85b3.m4a')
};

function initAboutHoverSounds() {
  const aboutImages = document.querySelectorAll('#about-page .about-photo[data-sound]');
  let activeAboutSound = null;

  const playAboutSound = image => {
    const soundKey = image.dataset.sound;
    const sound = aboutSoundDictionary[soundKey];
    if (!sound) return;

    if (activeAboutSound && activeAboutSound !== sound) {
      activeAboutSound.pause();
      activeAboutSound.currentTime = 0;
    }

    sound.currentTime = 0;
    sound.play().catch(() => {});
    activeAboutSound = sound;
  };

  const stopAboutSound = image => {
    const soundKey = image.dataset.sound;
    const sound = aboutSoundDictionary[soundKey];
    if (!sound) return;

    sound.pause();
    sound.currentTime = 0;

    if (activeAboutSound === sound) {
      activeAboutSound = null;
    }
  };

  aboutImages.forEach(image => {
    image.addEventListener('mouseenter', () => playAboutSound(image));
    image.addEventListener('mouseleave', () => stopAboutSound(image));
    image.addEventListener('touchstart', () => playAboutSound(image), { passive: true });
    image.addEventListener('touchend', () => stopAboutSound(image), { passive: true });
    image.addEventListener('touchcancel', () => stopAboutSound(image), { passive: true });
  });
}

// App bootstrap
document.addEventListener('DOMContentLoaded', () => {
  filterSounds();
  initAboutHoverSounds();
});


setTimeout(() => {
  map.invalidateSize();
}, 400);


