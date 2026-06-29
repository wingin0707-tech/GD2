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

PROJECTS.forEach((p, i) => {
  const tile = document.createElement("article");
  tile.className = "tile";
  tile.style.setProperty("--accent", p.accent);
  tile.style.transitionDelay = `${Math.min(i * 60, 360)}ms`;
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

// ============================================
// Active nav link — highlights Sound Map / Work /
// About / Contact as you scroll past each section.
// ============================================
(function navActiveState() {
  const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = navLinks.find(
          (a) => a.getAttribute("href") === `#${entry.target.id}`
        );
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.classList.remove("active"));
          link.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );

  sections.forEach((s) => io.observe(s));
})();

// ============================================
// Hero motion graphic — drifting duotone tiles,
// echoing the layered-collage look used across
// the actual poster work. Pauses for reduced motion.
// ============================================
(function heroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const hero = canvas.closest(".hero");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const palette = [
    "#2c4a33", // verses bound green
    "#6a4c93", // jstdrmn purple
    "#3f6b73", // 100m teal
    "#c9762f", // hyco orange
    "#c98fa0", // climate pink
    "#b0241f"  // archive red
  ];

  let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  let squares = [];
  let ripples = [];
  let pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
  let rafId = null;

  function resize() {
    const rect = hero.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildSquares();
  }

  function buildSquares() {
    const count = w < 700 ? 7 : 12;
    squares = Array.from({ length: count }, (_, i) => {
      const size = (w < 700 ? 50 : 80) + Math.random() * (w < 700 ? 70 : 130);
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        size,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        impulseX: 0,
        impulseY: 0,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.0006,
        color: palette[i % palette.length],
        depth: 0.4 + Math.random() * 0.6 // parallax strength
      };
    });
  }

  function drawStatic() {
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = "multiply";
    ctx.globalAlpha = 0.16;
    squares.forEach((s) => {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.rot);
      ctx.fillStyle = s.color;
      ctx.fillRect(-s.size / 2, -s.size / 2, s.size, s.size);
      ctx.restore();
    });
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
  }

  function step() {
    pointer.x += (pointer.tx - pointer.x) * 0.04;
    pointer.y += (pointer.ty - pointer.y) * 0.04;

    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = "multiply";
    ctx.globalAlpha = 0.16;

    squares.forEach((s) => {
      // shockwave impulse decays back to zero, base drift continues underneath
      s.x += s.vx + s.impulseX;
      s.y += s.vy + s.impulseY;
      s.impulseX *= 0.92;
      s.impulseY *= 0.92;
      s.rot += s.vr;

      // wrap around edges so the drift loops forever
      if (s.x < -s.size) s.x = w + s.size;
      if (s.x > w + s.size) s.x = -s.size;
      if (s.y < -s.size) s.y = h + s.size;
      if (s.y > h + s.size) s.y = -s.size;

      const px = (pointer.x - 0.5) * 24 * s.depth;
      const py = (pointer.y - 0.5) * 24 * s.depth;

      ctx.save();
      ctx.translate(s.x + px, s.y + py);
      ctx.rotate(s.rot);
      ctx.fillStyle = s.color;
      ctx.fillRect(-s.size / 2, -s.size / 2, s.size, s.size);
      ctx.restore();
    });

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";

    // expanding shockwave rings from clicks
    ripples = ripples.filter((r) => r.alpha > 0.01);
    ripples.forEach((r) => {
      r.radius += r.speed;
      r.alpha *= 0.94;
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      ctx.strokeStyle = r.color;
      ctx.globalAlpha = r.alpha;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.globalAlpha = 1;
    });

    rafId = requestAnimationFrame(step);
  }

  function triggerShockwave(clickX, clickY) {
    const maxReach = Math.max(w, h) * 0.6;
    const strength = w < 700 ? 4.5 : 7;

    squares.forEach((s) => {
      const dx = s.x - clickX;
      const dy = s.y - clickY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const falloff = Math.max(0, 1 - dist / maxReach);
      if (falloff <= 0) return;
      const force = falloff * falloff * strength;
      s.impulseX += (dx / dist) * force;
      s.impulseY += (dy / dist) * force;
    });

    ripples.push({
      x: clickX,
      y: clickY,
      radius: 4,
      speed: w < 700 ? 5 : 7,
      alpha: 0.35,
      color: palette[Math.floor(Math.random() * palette.length)]
    });
  }

  hero.addEventListener("pointermove", (e) => {
    const rect = hero.getBoundingClientRect();
    pointer.tx = (e.clientX - rect.left) / rect.width;
    pointer.ty = (e.clientY - rect.top) / rect.height;
  });

  if (!reduceMotion) {
    hero.addEventListener("pointerdown", (e) => {
      const rect = hero.getBoundingClientRect();
      triggerShockwave(e.clientX - rect.left, e.clientY - rect.top);
    });
  }

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  resize();

  if (reduceMotion) {
    drawStatic();
  } else {
    step();
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (rafId) cancelAnimationFrame(rafId);
    } else if (!reduceMotion) {
      step();
    }
  });
})();
