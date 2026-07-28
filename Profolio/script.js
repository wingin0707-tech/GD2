/* ============================================================
   preview.js — row hover preview + panel image lightbox
   Works alongside script.js. Load AFTER script.js in index.html.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- CURSOR-FOLLOWING PREVIEW ---------- */
  const cursorPreview = document.getElementById('cursorPreview');
  const cursorImg     = document.getElementById('cursorPreviewImg');
  const tableBody     = document.getElementById('tableBody');

  if (cursorPreview && cursorImg && tableBody) {
    let targetX = 0, targetY = 0;   // where the cursor actually is
    let currentX = 0, currentY = 0; // where the preview currently sits (eased)
    let rotation = 0;
    let isVisible = false;
    const OFFSET_X = 28;
    const OFFSET_Y = -90;
    const EASE = 0.15; // lower = more lag/glide, higher = snappier

    function loop() {
      currentX += (targetX - currentX) * EASE;
      currentY += (targetY - currentY) * EASE;

      const dx = targetX - currentX;
      const targetRotation = Math.max(-8, Math.min(8, dx * 0.15));
      rotation += (targetRotation - rotation) * 0.2;

      cursorPreview.style.transform =
        `translate3d(${currentX}px, ${currentY}px, 0) rotate(${rotation}deg)`;

      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    document.addEventListener('mousemove', (e) => {
      targetX = e.clientX + OFFSET_X;
      targetY = e.clientY + OFFSET_Y;
    });

    tableBody.addEventListener('mouseover', (e) => {
      const row = e.target.closest('.project-row');
      if (!row) return;
      const src = row.dataset.preview;
      if (!src) return; // e.g. the iframe-only project has no image
      cursorImg.src = src;
      if (!isVisible) {
        currentX = e.clientX + OFFSET_X;
        currentY = e.clientY + OFFSET_Y;
      }
      cursorPreview.classList.add('show');
      isVisible = true;
    });

    tableBody.addEventListener('mouseout', (e) => {
      const row = e.target.closest('.project-row');
      if (!row) return;
      cursorPreview.classList.remove('show');
      isVisible = false;
    });
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