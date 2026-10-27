/**
 * MANOVA — Digital Marketing Portfolio
 * JavaScript for Creative & Content Production pages
 * - Mutual video pausing (one video playing at a time)
 * - Photography Lightbox Modal with EXIF details
 * - Responsive mobile navigation toggle
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('nav-open');
    });
  }

  // Mutual Video Playback: pause other playing videos when one starts
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.addEventListener('play', () => {
      videos.forEach(otherVideo => {
        if (otherVideo !== video && !otherVideo.paused) {
          otherVideo.pause();
        }
      });
    });
  });

  // Lightbox Modal for Photography
  const modal = document.getElementById('cpModal');
  const modalImg = document.getElementById('cpModalImg');
  const modalCaption = document.getElementById('cpModalCaption');
  const modalClose = document.getElementById('cpModalClose');

  if (modal && modalImg && modalCaption) {
    const photoTriggers = document.querySelectorAll('.cp-photo-wrap');

    photoTriggers.forEach(wrap => {
      wrap.addEventListener('click', () => {
        const img = wrap.querySelector('img');
        const card = wrap.closest('.cp-photo-card');
        const title = card ? card.querySelector('.cp-photo-title')?.textContent : '';
        const filename = card ? card.querySelector('.cp-photo-filename')?.textContent : '';
        const desc = card ? card.querySelector('.cp-photo-desc')?.textContent : '';

        if (img) {
          modalImg.src = img.src;
          modalImg.alt = img.alt || title || 'Full resolution photograph';
          modalCaption.innerHTML = `<strong>${title}</strong> &nbsp;·&nbsp; <code>${filename}</code><br><span style="color:#9c9b92;font-size:12px;">${desc}</span>`;
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      modalImg.src = '';
    };

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }
});
