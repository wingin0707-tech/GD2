/* ============================================================
   preview.js — custom cursor + panel image lightbox
   Works alongside script.js. Load AFTER script.js in index.html.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- CUSTOM CURSOR ---------- */
  const cursorDot  = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const isTouch    = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  if (cursorDot && cursorRing && !isTouch) {
    let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
    let ringX = targetX, ringY = targetY;
    const RING_EASE = 0.18;

    function loop() {
      // dot: snaps to the cursor instantly
      cursorDot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;

      // ring: eases behind for a bit of trailing lag
      ringX += (targetX - ringX) * RING_EASE;
      ringY += (targetY - ringY) * RING_EASE;
      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    document.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    // grow + show a label over anything clickable
    document.querySelectorAll('.project-row').forEach((row) => {
      row.addEventListener('mouseenter', () => {
        cursorRing.classList.add('hover');
        document.getElementById('cursorLabel').textContent = 'View';
      });
      row.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
    });

    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursorRing.classList.add('hover');
        document.getElementById('cursorLabel').textContent = '';
      });
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
    });

    // small squeeze on click for tactile feedback
    document.addEventListener('mousedown', () => cursorRing.classList.add('click'));
    document.addEventListener('mouseup', () => cursorRing.classList.remove('click'));
  }

  /* ---------- LIGHTBOX ---------- */
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const panelImages = document.getElementById('panelImages');

  if (lightbox && lightboxImg && panelImages) {
    panelImages.addEventListener('click', (e) => {
      const img = e.target.closest('img');
      if (!img) return;
      lightboxImg.src = img.src;
      lightbox.classList.add('open');
    });

    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('open');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') lightbox.classList.remove('open');
    });
  }

});