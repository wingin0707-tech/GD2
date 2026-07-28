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
    status: "C",         
    filterKey: "Poster",
 images: [
      "Free_Citylight_Mockup_3.png"],
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
    images: ["Street Poster.png"],
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
    title: "SŌKA",
    type: "Product design",
    context: "Invited",
    location: "222 Spadina Ave, Toronto",
    format: "50mm Circle × 20",
    medium: "2-colour print",
    status: "C",
    filterKey: "Illustration",
    images: ["Outdoor Arch Sign Mockup.png", "Iced Coffee Cup.png", "Pouch Packaging Mockup.png","Round Sticker on Finger Mockup.png","Foil Poster Mockup (2).png"],
    imageLayout: "trio",
    desc: "Brand identity and sticker design for SŌKA, a matcha pop-up created for the grand opening of Nekonail. Designed the branding in collaboration with the SŌKA team and hosted the launch event. Two-colour bowl illustration printed as a sheet of 20 — sage green and cream keep it quiet enough to work at sticker scale without losing the linework. Follow along: @soka.matcha",    meta: [
      ["Colours",  "2 — Sage / Cream"],
      ["Count",    "20 per sheet"],
      ["Size",     "50mm diameter"],
      ["Medium",   "Digital illustration → print"],
    ]
  },
  {
    n: "04",
    year: "2026",
    title: "Blossom",
    type: "UI/UX",
    context: "Climate App",
    location: "—",
    format: "Mobile Screen",
    medium: "Figma",
    status: "Cn",
    filterKey: "UI/UX",
    images: ["Free iPhone 17 Pro.png", "Free iPhone Air.png","Hand and iPhone 16 Pro.png"],
    imageLayout: "trio",
    desc: "An eco-focused habit-tracking app designed to reduce air pollution by encouraging active travel like walking and cycling. Using a gentle 'Seed to Blossom' garden metaphor, the app tracks steps and eco-friendly actions, converting progress into points and virtual growth with soft pinks and greens for a supportive, guilt-free experience.",
    meta: [
      ["Stages",   "Seed · Sprout · Growth · Blossom"],
      ["Palette",  "Blush pink · Sage green"],
      ["Tool",     "Figma"],
      ["Status",   "Concept"],
    ]
  },

  {
   
    n: "05",
    year: "2026",
    title: "Markham Sound Map",
    type: "Interactive",
    context: "school project",
    location: "Markham, ON",
    format: "Web",
    medium: "HTML, CSS, JS",
    status: "L",
    filterKey: "Interactive",
    images: ["Screenshot 2026-07-28 at 6.35.24 PM.png"],
    imageLayout: "iframe",
    iframeUrl: "https://wingin0707-tech.github.io/SO/Soundmap/",
    desc: "An interactive field-recording archive mapping the sounds of Markham. Click a red marker to hear what that spot sounds like. Built as a living, contributable archive.",
    meta: [
      ["URL",     "wingin0707-tech.github.io/GD2/Soundmap"],
      ["Stack",   "HTML, CSS, JavaScript"],
      ["Status",  "Live"],
    ]
  }
];

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

  const thumbHTML = (p.images && p.images.length > 0)
    ? `<span class="title-thumb"><img src="${p.images[0]}" alt="" loading="lazy"></span>`
    : `<span class="title-thumb title-thumb--empty"></span>`;

  tr.innerHTML = `
    <td class="td-n">${p.n}</td>
    <td class="td-y">${p.year}</td>
    <td class="td-title">${thumbHTML}${p.title}</td>
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
    if (p.imageLayout === "duo")    panelImgs.classList.add("duo");
    if (p.imageLayout === "multi")  panelImgs.classList.add("multi");
    if (p.imageLayout === "trio")   panelImgs.classList.add("trio");
    if (p.imageLayout === "single") panelImgs.classList.add("single");
    p.images.forEach((src, idx) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = p.title;
      img.loading = "lazy";
      img.style.setProperty("--img-i", idx); // staggers the pop-in animation
      panelImgs.appendChild(img);
    });

    // "trio" always puts the 1st image at 2 columns wide + 1 image at
    // 1 column wide per row after that. If the image count doesn't
    // divide evenly, the last row comes up short and leaves an empty
    // gap. This stretches the trailing image(s) to close that gap,
    // whatever the total image count ends up being.
    if (p.imageLayout === "trio") {
      const n = p.images.length;
      const lastImg = panelImgs.lastElementChild;
      if (n === 1 && lastImg) {
        lastImg.style.gridColumn = "1 / -1";
      } else if (n >= 3) {
        const remainder = (n - 2) % 3; // images left over in the final row
        if (remainder === 1 && lastImg) {
          lastImg.style.gridColumn = "1 / -1"; // lone leftover: fill the row
        } else if (remainder === 2 && lastImg) {
          lastImg.style.gridColumn = "span 2"; // two leftover: widen the last one
        }
      }
    }
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
  document.body.style.overflow = "hidden";

  // Double rAF: ensures the browser paints the images' starting
  // state (opacity 0) BEFORE we add "open", so the pop-in transition
  // actually has something to animate from instead of jumping straight
  // to its end state.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add("open");
      panelClose.focus();
    });
  });
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