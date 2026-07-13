// ============================================================
// Sophya Chan — script.js
// ============================================================

const PROJECTS = [
  {
    n: "01",
    year: "2026",
    title: "Verses Bound",
    type: "Poster",
    context: "OCAD U GD1 Exhibition",
    location: "Ada Slaight Gallery, Toronto",
    format: "A1 Print + AR",
    medium: "Digital, AR",
    status: "C",           // C = Completed, L = Live, Cn = Concept
    filterKey: "Poster",
 images: [
      "assets/Free_Citylight_Mockup_3.jpg" // <-- Added here
    ],
    imageLayout: "multi",
    desc: "Poster and AR companion for the Graphic Design 1 exhibition and poetry event at Ada Slaight Gallery, 3–9 February 2026. Built from layered scans and dot-screen halftone textures, with a motion/AR version that animates the collage in place. Co-designed with Zoe Chan, Elijah Da Silva, Felicia Hwang, and Blair Mckenzie.",
    meta: [
      ["Venue",      "Ada Slaight Gallery, 100 McCaul St., Rm 225"],
      ["Opening",    "3 February 2026, 2–4 PM"],
      ["Open Mic",   "6 February 2026, 6–8 PM"],
      ["Poster by",  "Sophya Chan, Zoe Chan, Elijah Da Silva, Felicia Hwang, Blair Mckenzie"],
      ["AR by",      "Elijah Da Silva"],
      ["Medium",     "Digital print + AR"],
    ]
  },
  {
    n: "02",
    year: "2026",
    title: "JSTDRMN Connect",
    type: "Flyer",
    context: "AMA + Meet & Greet",
    location: "Biidasiige Park, Toronto",
    format: "Digital",
    medium: "Digital",
    status: "C",
    filterKey: "Flyer",
    images: ["assets/jstdrmn.jpg"],
    imageLayout: "single",
    desc: "Event flyer for the JSTDRMN community AMA and meet-and-greet with DJ Stranjah. Built around a halftone crowd photo and a violet glow treatment that echoes the brand's late-night identity.",
    meta: [
      ["Date",    "June 14, 2026"],
      ["Venue",   "Biidasiige Park, 51 Commissioners St., Toronto, ON M5A 1A6"],
      ["Time",    "1PM–2PM (Stranjah meet & greet)"],
      ["Medium",  "Digital flyer"],
    ]
  },
  {
    n: "03",
    year: "2025",
    title: "Student@(100M Studio); Speaker's Series & (social);",
    type: "Flyer",
    context: "100M Studio",
    location: "Annex Building, Toronto",
    format: "A3 Print",
    medium: "Digital print",
    status: "C",
    filterKey: "Flyer",
    images: ["assets/100m-flyer.jpg"],
    imageLayout: "single",
    desc: "Flyer for the 100M Studio student speaker series and social. The repeated wordmark and stamped icons run as a loose grid behind a plain info block — the type itself is the texture.",
    meta: [
      ["Venue",   "Annex Building, Room 512"],
      ["Date",    "Thursdays, December 5"],
      ["Time",    "6PM–9/10PM"],
      ["Medium",  "Digital print"],
    ]
  },
  {
    n: "04",
    year: "2026",
    title: "HYCO!",
    type: "UI/UX",
    context: "Concept App",
    location: "—",
    format: "Mobile Screen",
    medium: "Figma",
    status: "Cn",
    filterKey: "UI/UX",
    images: [
      "assets/hyco-app-1.jpg",
      "assets/hyco-app-2.jpg",
      "assets/hyco-app-3.jpg"
    ],
    imageLayout: "trio",
    desc: "Interface concept for a shared accountability and co-working app. Calendar home screen, social feed for team updates, and a video call view for live check-ins. Warm teal and mustard palette keeps the study-tool feel approachable rather than corporate.",
    meta: [
      ["Screens",  "Home, Feed, Video Call"],
      ["Palette",  "Teal · Mustard · Clay"],
      ["Tool",     "Figma"],
      ["Status",   "Concept"],
    ]
  },
  {
    n: "05",
    year: "2025",
    title: "SŌKA",
    type: "Illustration",
    context: "Self Initiated",
    location: "—",
    format: "50mm Circle × 20",
    medium: "2-colour print",
    status: "C",
    filterKey: "Illustration",
    images: ["assets/soka-sticker.jpg"],
    imageLayout: "single",
    desc: "Two-colour bowl illustration for a sticker run, printed as a sheet of 20. Sage green and cream keep it quiet enough to work at sticker scale without losing the linework.",
    meta: [
      ["Colours",  "2 — Sage / Cream"],
      ["Count",    "20 per sheet"],
      ["Size",     "50mm diameter"],
      ["Medium",   "Digital illustration → print"],
    ]
  },
  {
    n: "06",
    year: "2026",
    title: "Climate Growth Cycle",
    type: "UI/UX",
    context: "Concept App",
    location: "—",
    format: "Mobile Screen",
    medium: "Figma",
    status: "Cn",
    filterKey: "UI/UX",
    images: ["assets/climate-app.jpg"],
    imageLayout: "single",
    desc: "Home screen for a sustainability-tracking app that frames habit-building as a garden: Seed → Sprout → Growth → Blossom. Soft pinks and greens keep the tone encouraging rather than guilt-driven.",
    meta: [
      ["Stages",   "Seed · Sprout · Growth · Blossom"],
      ["Palette",  "Blush pink · Sage green"],
      ["Tool",     "Figma"],
      ["Status",   "Concept"],
    ]
  },
  {
    n: "07",
    year: "2026",
    title: "Archive Study",
    type: "Collage",
    context: "Self Initiated",
    location: "Baldwin St., Toronto",
    format: "A2 Print",
    medium: "Duotone collage",
    status: "C",
    filterKey: "Collage",
    images: ["assets/archive-glitch.jpg"],
    imageLayout: "single",
    desc: "A duotone collage from architectural detail photographs shot around Baldwin St., Toronto, layered with their EXIF metadata. The red-and-blue pass turns the technical data into part of the composition instead of hiding it.",
    meta: [
      ["Location",  "7 Baldwin St., Toronto, ON M5T 2L3"],
      ["Camera",    "Apple iPhone 14, 26mm"],
      ["Treatment", "Duotone overprint, EXIF overlay"],
      ["Colours",   "Reflex Blue / Warm Red"],
    ]
  },
  {
    n: "08",
    year: "2026",
    title: "Markham Sound Map",
    type: "Interactive",
    context: "Self Initiated",
    location: "Markham, ON",
    format: "Web",
    medium: "HTML, CSS, JS",
    status: "L",
    filterKey: "Interactive",
    images: [],
    imageLayout: "iframe",
    iframeUrl: "https://wingin0707-tech.github.io/GD2/Soundmap/",
    desc: "An interactive field-recording archive mapping the sounds of Markham. Click a red marker to hear what that spot sounds like. Built as a living, contributable archive.",
    meta: [
      ["URL",     "wingin0707-tech.github.io/GD2/Soundmap"],
      ["Stack",   "HTML, CSS, JavaScript"],
      ["Status",  "Live"],
    ]
  }
];

// ============================================================
// Build table rows
// ============================================================
const tbody = document.getElementById("tableBody");

PROJECTS.forEach((p, i) => {
  const tr = document.createElement("tr");
  tr.className = "project-row";
  tr.dataset.filter = p.filterKey;
  tr.style.transitionDelay = `${i * 45}ms`;

  const statusDot = p.status === "L"
    ? `<span class="status-dot live" title="Live"></span>`
    : p.status === "Cn"
    ? `<span class="status-dot concept" title="Concept"></span>`
    : `<span class="status-dot" title="Completed"></span>`;

  tr.innerHTML = `
    <td class="td-n">${p.n}</td>
    <td class="td-y">${p.year}</td>
    <td class="td-title">${p.title}</td>
    <td class="td-type">${p.type}</td>
    <td class="td-ctx">${p.context}</td>
    <td class="td-loc">${p.location}</td>
    <td class="td-fmt">${p.format}</td>
    <td class="td-med">${p.medium}</td>
    <td class="td-s">${statusDot}</td>
  `;

  tr.addEventListener("click", () => openPanel(p));
  tr.setAttribute("tabindex", "0");
  tr.setAttribute("role", "button");
  tr.setAttribute("aria-label", `View project: ${p.title}`);
  tr.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openPanel(p); }
  });

  tbody.appendChild(tr);
});

// ============================================================
// Scroll reveal
// ============================================================
const rows = document.querySelectorAll(".project-row");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  rows.forEach(r => io.observe(r));
} else {
  rows.forEach(r => r.classList.add("in"));
}

// ============================================================
// Filter
// ============================================================
const filterBtn   = document.getElementById("filterBtn");
const filterPanel = document.getElementById("filterPanel");
const filterTags  = document.querySelectorAll(".filter-tag");

filterBtn.addEventListener("click", () => {
  filterBtn.classList.toggle("open");
  filterPanel.classList.toggle("open");
});

filterTags.forEach(tag => {
  tag.addEventListener("click", () => {
    filterTags.forEach(t => t.classList.remove("active"));
    tag.classList.add("active");
    const val = tag.dataset.filter;
    rows.forEach(row => {
      row.classList.toggle("hidden", val !== "all" && row.dataset.filter !== val);
    });
  });
});

// ============================================================
// Detail panel
// ============================================================
const overlay    = document.getElementById("panelOverlay");
const panel      = document.getElementById("panel");
const panelNum   = document.getElementById("panelNum");
const panelTitle = document.getElementById("panelTitleText");
const panelImgs  = document.getElementById("panelImages");
const metaTable  = document.getElementById("metaTable");
const panelDesc  = document.getElementById("panelDesc");
const panelClose = document.getElementById("panelClose");
let lastFocus = null;

function openPanel(p) {
  // num + title
  panelNum.textContent = p.n;
  panelTitle.textContent = p.title;

  // images / iframe
  panelImgs.innerHTML = "";
  panelImgs.className = "panel-images";

  if (p.imageLayout === "iframe") {
    panelImgs.classList.add("panel-iframe-wrap");
    panelImgs.innerHTML = `
      <div class="chrome-bar">
        <span class="chrome-dot"></span>
        <span class="chrome-dot"></span>
        <span class="chrome-dot"></span>
        <span class="chrome-url">${p.iframeUrl.replace("https://","")}</span>
        <a class="chrome-open" href="${p.iframeUrl}" target="_blank" rel="noopener">↗ Open</a>
      </div>
      <iframe class="panel-iframe" src="${p.iframeUrl}" title="${p.title}" loading="lazy"></iframe>
    `;
  } else {
    if (p.imageLayout === "multi")  panelImgs.classList.add("multi");
    if (p.imageLayout === "trio")   panelImgs.classList.add("trio");
    p.images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = p.title;
      img.loading = "lazy";
      panelImgs.appendChild(img);
    });
  }

  // meta table
  metaTable.innerHTML = p.meta.map(([k, v]) =>
    `<tr><td>${k}</td><td>${v}</td></tr>`
  ).join("");

  // description + optional link
  const linkHTML = p.iframeUrl
    ? `<a class="panel-link" href="${p.iframeUrl}" target="_blank" rel="noopener">Open live project ↗</a>`
    : "";
  panelDesc.innerHTML = p.desc + linkHTML;

  // scroll panel to top
  panel.querySelector(".panel-scroll").scrollTop = 0;

  lastFocus = document.activeElement;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  panelClose.focus();
}

function closePanel() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

panelClose.addEventListener("click", closePanel);
overlay.addEventListener("click", e => { if (e.target === overlay) closePanel(); });
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && overlay.classList.contains("open")) closePanel();
});

// ============================================================
// Nav active state
// ============================================================
const navLinks = document.querySelectorAll(".hdr-right a[href^='#']");
navLinks.forEach(a => {
  const target = document.querySelector(a.getAttribute("href"));
  if (!target) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      a.classList.toggle("active", e.isIntersecting);
    });
  }, { threshold: 0.3 });
  io.observe(target);
});
