// app.js - countdown, particles, QR, music, RSVP, AOS init

// Wait DOM
window.addEventListener('DOMContentLoaded', () => {
  // AOS
  if (window.AOS) AOS.init({ duration: 1100, once: true });

  // Countdown
  function updateCountdown() {
    const weddingDate = new Date('November 20, 2025 16:00:00').getTime();
    const now = new Date().getTime();
    const diff = weddingDate - now;
    if (diff <= 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Particles (floating petals)
  const particlesContainer = document.getElementById('particles');
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = 8 + Math.random() * 36;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${10 + Math.random() * 12}s`;
    particle.style.opacity = 0.6 + Math.random() * 0.4;
    particlesContainer.appendChild(particle);
    // remove after long time to keep DOM light
    setTimeout(() => {
      particle.remove();
    }, 30000);
  }
  // create initial batch
  for (let i = 0; i < 24; i++) createParticle();
  // keep creating
  setInterval(createParticle, 1200);

  // QR
  try {
    if (window.QRious) {
     new QRious({
  element: document.getElementById('qrCode'),
  value: 'https://akbaralievernis.github.io/wedding/',
  size: 240
});

    }
  } catch (e) { console.warn('QR error', e); }

  // Music
  const audio = document.getElementById('backgroundMusic');
  const musicButton = document.getElementById('musicButton');
  const musicIcon = document.getElementById('musicIcon');
  let isPlaying = false;
  function setIconPlaying(on) {
    if (!musicIcon) return;
    musicIcon.innerHTML = on ? '<path d="M6 5V19H8V5H6M10 5V19H12V5H10M14 5V19H16V5H14Z" />' : '<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />';
  }
  musicButton && musicButton.addEventListener('click', () => {
    if (!audio) return;
    if (isPlaying) { audio.pause(); isPlaying = false; setIconPlaying(false); }
    else { audio.play().then(()=>{ isPlaying = true; setIconPlaying(true); }).catch(()=>{ /* autoplay blocked */ }); }
  });

  // Start music on first user gesture (mobile autoplay policy)
  function userGestureListener() {
    if (!audio) return;
    audio.play().then(()=>{ isPlaying = true; setIconPlaying(true); }).catch(()=>{});
    window.removeEventListener('click', userGestureListener);
  }
  window.addEventListener('click', userGestureListener, { once: true });

  // RSVP toggles & submit
  const rsvpToggle = document.getElementById('rsvpToggle');
  const rsvpForm = document.getElementById('rsvpForm');
  rsvpToggle && rsvpToggle.addEventListener('click', () => {
    if (!rsvpForm) return;
    rsvpForm.style.display = rsvpForm.style.display === 'block' ? 'none' : 'block';
    rsvpForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  rsvpForm && rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value || 'Гость';
    const guests = document.getElementById('guests').value || '1';
    alert(`Спасибо, ${name}!\nВаше подтверждение получено для ${guests} гостей.\nМы вас ждём! 💜`);
    rsvpForm.reset();
    rsvpForm.style.display = 'none';
  });

});
