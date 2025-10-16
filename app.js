// Variant 1 JS — countdown + carousel + QR + RSVP + AOS init + Music + Smooth Scroll
document.addEventListener('DOMContentLoaded', ()=>{
  // Initialize AOS
  if(window.AOS) AOS.init({
    duration: 900,
    once: true,
    offset: 100
  });
  
  // Countdown
  function upd(){
    const wedding=new Date('November 12, 2025 16:00:00').getTime();
    const now=Date.now(); 
    const diff=wedding-now; 
    if(diff<=0){
      ['days','hours','minutes','seconds'].forEach(id=>document.getElementById(id).textContent='00');
      return;
    }
    const days=Math.floor(diff/86400000); 
    const hours=Math.floor((diff%86400000)/3600000); 
    const minutes=Math.floor((diff%3600000)/60000); 
    const seconds=Math.floor((diff%60000)/1000);
    document.getElementById('days').textContent=String(days).padStart(2,'0');
    document.getElementById('hours').textContent=String(hours).padStart(2,'0');
    document.getElementById('minutes').textContent=String(minutes).padStart(2,'0');
    document.getElementById('seconds').textContent=String(seconds).padStart(2,'0');
  }
  upd(); 
  setInterval(upd,1000);

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Music control
  const music = document.getElementById('music1');
  const musicToggle = document.getElementById('musicToggle');
  let isPlaying = false;
  
  // Update icon based on playback state
  function updateMusicIcon() {
    const svgPath = musicToggle.querySelector('svg path');
    if (isPlaying) {
      // Pause icon
      svgPath.setAttribute('d', 'M6 19h4V5H6v14zm8-14v14h4V5h-4z');
    } else {
      // Play icon
      svgPath.setAttribute('d', 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z');
    }
  }
  
  musicToggle.addEventListener('click', ()=>{
    if(isPlaying){
      music.pause();
    } else {
      music.play().catch(e => console.warn('Autoplay prevented:', e));
    }
    isPlaying = !isPlaying;
    updateMusicIcon();
  });
  
  // Auto-play music with user interaction
  document.addEventListener('click', () => {
    if(!isPlaying){
      music.play().then(() => {
        isPlaying = true;
        updateMusicIcon();
      }).catch(e => console.warn('Autoplay prevented:', e));
    }
  }, { once: true });

  // QR
  try{ 
    new QRious({
      element: document.getElementById('qr1'), 
      value: 'https://akbaralievernis.github.io/wedding/', 
      size: 220
    }); 
  } catch(e) {
    console.warn(e);
  }
  
  // RSVP behavior with animation
  const toggleFormBtn = document.getElementById('toggleForm');
  const form = document.getElementById('form1');
  
  toggleFormBtn.addEventListener('click', () => {
    if(form.style.display === 'block') {
      form.classList.remove('show');
      setTimeout(() => {
        form.style.display = 'none';
      }, 500);
    } else {
      form.style.display = 'block';
      setTimeout(() => {
        form.classList.add('show');
      }, 10);
      form.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо! Мы получили подтверждение.');
    form.classList.remove('show');
    setTimeout(() => {
      form.reset();
      form.style.display = 'none';
    }, 500);
  });
});
