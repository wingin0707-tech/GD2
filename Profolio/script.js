// ============================================
// Project data — edit titles, copy, images, and
// accent colours here to update the whole site.
// ============================================
const PROJECTS = [
  {
    id: "verses-bound",
    title: "Verses Bound",
    tag: "Poster · Editorial · AR",
    meta: "OCAD U Graphic Design 1 · Exhibition & Poetry Event · 2026",
    accent: "#2c4a33",
    image: "assets/verses-bound.jpg",
    images: ["assets/verses-bound.jpg", "assets/verses-bound-alt.jpg", "assets/verses-bound-motion.jpg"],
    desc: "Poster and AR companion piece for the Graphic Design 1 exhibition and poetry event at Ada Slaight Gallery. Built from layered scans and dot-screen textures, with a second colour pass and a motion/AR version that animates the collage in place. Made with Zoe Chan, Elijah Da Silva, Felicia Hwang, and Blair Mckenzie."
  },
  {
    id: "jstdrmn",
    title: "JSTDRMN Connect",
    tag: "Flyer · Event Branding",
    meta: "AMA + Meet & Greet with Stranjah · 2026",
    accent: "#6a4c93",
    image: "assets/jstdrmn.jpg",
    images: ["assets/jstdrmn.jpg"],
    desc: "Event flyer for the JSTDRMN community's AMA and meet-and-greet, built around a halftone crowd photo and a glow treatment that nods to the brand's late-night, club-poster identity."
  },
  {
    id: "100m",
    title: "100M Speaker Series",
    tag: "Flyer · Typography",
    meta: "Student Speaker's Series & Social · 100M Studio",
    accent: "#3f6b73",
    image: "assets/100m-flyer.jpg",
    images: ["assets/100m-flyer.jpg"],
    desc: "Flyer for a student speaker series and social held in the 100M Studio. The repeated wordmark and stamped icons run as a loose grid behind a deliberately plain info block, treating the type itself as the texture."
  },
  {
    id: "hyco",
    title: "HYCO!",
    tag: "UI/UX · App Design",
    meta: "Concept app · Calendar, social feed & check-ins",
    accent: "#c9762f",
    image: "assets/hyco-app-1.jpg",
    images: ["assets/hyco-app-1.jpg", "assets/hyco-app-2.jpg", "assets/hyco-app-3.jpg"],
    desc: "Interface concept for a shared accountability app — a calendar home screen, a scrolling social feed for team updates, and a video call view for check-ins. Warm teal, mustard, and clay keep a study-tool feel approachable rather than corporate."
  },
  {
    id: "soka",
    title: "SOKA",
    tag: "Illustration · Sticker",
    meta: "Sticker sheet",
    accent: "#5b4a3f",
    image: "assets/soka-sticker.jpg",
    images: ["assets/soka-sticker.jpg"],
    desc: "Single-colour bowl illustration for a sticker run, repeated as a print sheet. Sage and cream keep it quiet enough to work at sticker scale without losing the linework."
  },
  {
    id: "climate",
    title: "Climate Growth Cycle",
    tag: "UI/UX · App Design",
    meta: "Sustainability tracker · Concept app",
    accent: "#c98fa0",
    image: "assets/climate-app.jpg",
    images: ["assets/climate-app.jpg"],
    desc: "Home screen for a sustainability-tracking app that frames habit-building as a garden: seed, sprout, growth, blossom. Soft pinks and greens keep the tone encouraging rather than guilt-driven."
  },
  {
    id: "archive",
    title: "Archive Study",
    tag: "Collage · Experimental",
    meta: "Photographic collage · 2026",
    accent: "#b0241f",
    image: "assets/archive-glitch.jpg",
    images: ["assets/archive-glitch.jpg"],
    desc: "A duotone collage built from architectural detail shots around Baldwin St., Toronto, layered with their own file metadata. The red-and-blue pass turns the EXIF data into part of the composition instead of hiding it."
  }
];

// ---------- Render tiles ----------
const grid = document.getElementById("grid");

PROJECTS.forEach((p) => {
  const tile = document.createElement("article");
  tile.className = "tile";
  tile.style.setProperty("--accent", p.accent);
  tile.setAttribute("data-id", p.id);
  tile.setAttribute("tabindex", "0");
  tile.setAttribute("role", "button");
  tile.setAttribute("aria-label", `Open project: ${p.title}`);

  tile.innerHTML = `
    <div class="tile-media">
      <img src="${p.image}" alt="${p.title}" loading="lazy">
    </div>
    <div class="tile-caption">
      <h3>${p.title}</h3>
      <span>${p.tag}</span>
    </div>
  `;

  tile.addEventListener("click", () => openModal(p));
  tile.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(p);
    }
  });

  grid.appendChild(tile);
});

// ---------- Scroll reveal ----------
const tiles = document.querySelectorAll(".tile");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  tiles.forEach((t) => io.observe(t));
} else {
  tiles.forEach((t) => t.classList.add("in-view"));
}

// ---------- Modal ----------
const overlay = document.getElementById("modalOverlay");
const modalMedia = document.getElementById("modalMedia");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDesc = document.getElementById("modalDesc");
const modalClose = document.getElementById("modalClose");

let lastFocused = null;

function openModal(p) {
  modalMedia.innerHTML = p.images
    .map((src) => `<img src="${src}" alt="${p.title}">`)
    .join("");
  modalTag.textContent = p.tag;
  modalTitle.textContent = p.title;
  modalMeta.textContent = p.meta;
  modalDesc.textContent = p.desc;

  lastFocused = document.activeElement;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
});
