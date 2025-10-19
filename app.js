document.addEventListener('DOMContentLoaded', () => {
  // Initialize EmailJS
  emailjs.init('YOUR_USER_ID'); // Замените на ваш EmailJS User ID

  // Translations
  const translations = {
    ru: {
      title: 'Вариант 1 — Современная классика — Айдана & Бекзат',
      home: 'Главная',
      invitation: 'Приглашение',
      info: 'Инфо',
      gallery: 'Галерея',
      rsvp: 'RSVP',
      location: 'Локация',
      names: 'Айдана <span>&</span> Бекзат',
      subtitle: 'Мы женимся — 12 ноября 2025',
      days: 'Дней',
      hours: 'Часов',
      minutes: 'Минут',
      seconds: 'Секунд',
      dear: 'Дорогие друзья и родные!',
      invitation_text: 'Мы с радостью приглашаем вас разделить с нами самый важный и счастливый день в нашей жизни — день нашего бракосочетания! Ваше присутствие сделает этот день по-настоящему особенным и наполненным любовью.',
      quote: '"Любовь — это не то, что можно найти, а то, что создается вместе"',
      couple: 'Айдана & Бекзат',
      information: 'Информация',
      date_label: 'Дата',
      date_value: '12 ноября 2025',
      time_label: 'Время',
      time_value: '16:00',
      place_label: 'Место',
      place_value: 'Ресторан "Ала-Тоо", г. Ош',
      rsvp_title: 'Подтверждение присутствия',
      rsvp_subtitle: 'Пожалуйста, подтвердите ваше присутствие на нашей свадьбе',
      guest_name_ph: 'Ваше имя*',
      attend_yes: 'Да, приду',
      attend_no: 'Нет, не смогу',
      guest_count_ph: 'Количество гостей',
      rsvp_comment_ph: 'Особые пожелания (диета, аллергии и т.д.)',
      submit_rsvp: 'Подтвердить',
      rsvp_success: 'Спасибо за подтверждение!',
      location_title: 'Местоположение',
      map_address: 'Ресторан "Ала-Тоо", г. Ош, Кыргызстан',
      footer: '© Айдана & Бекзат — Ноябрь 2025',
      footer_quote: '"Самый большой дар, который вы можете сделать другому, — это ваше собственное присутствие"'
    },
    en: {
      title: 'Variant 1 — Modern Classic — Aidana & Bekzat',
      home: 'Home',
      invitation: 'Invitation',
      info: 'Info',
      gallery: 'Gallery',
      rsvp: 'RSVP',
      location: 'Location',
      names: 'Aidana <span>&</span> Bekzat',
      subtitle: 'We are getting married — November 12, 2025',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      dear: 'Dear friends and family!',
      invitation_text: 'We are delighted to invite you to share the most important and happy day in our lives — the day of our wedding! Your presence will make this day truly special and filled with love.',
      quote: '"Love is not something you can find, but something you create together"',
      couple: 'Aidana & Bekzat',
      information: 'Information',
      date_label: 'Date',
      date_value: 'November 12, 2025',
      time_label: 'Time',
      time_value: '4:00 PM',
      place_label: 'Venue',
      place_value: 'Ala-Too Restaurant, Osh',
      rsvp_title: 'RSVP',
      rsvp_subtitle: 'Please confirm your attendance at our wedding',
      guest_name_ph: 'Your name*',
      attend_yes: 'Yes, I will attend',
      attend_no: 'No, I cannot attend',
      guest_count_ph: 'Number of guests',
      rsvp_comment_ph: 'Special requests (diet, allergies, etc.)',
      submit_rsvp: 'Confirm',
      rsvp_success: 'Thank you for your RSVP!',
      location_title: 'Location',
      map_address: 'Ala-Too Restaurant, Osh, Kyrgyzstan',
      footer: '© Aidana & Bekzat — November 2025',
      footer_quote: '"The greatest gift you can give another is your own presence"'
    },
    kg: {
      title: '1-вариант — Заманбап классика — Айдана & Бекзат',
      home: 'Башкы',
      invitation: 'Чакыруу',
      info: 'Маалымат',
      gallery: 'Галерея',
      rsvp: 'RSVP',
      location: 'Жайгашуу',
      names: 'Айдана <span>&</span> Бекзат',
      subtitle: 'Биз үйлөнөбүз — 2025-жыл 12-ноябрь',
      days: 'Күн',
      hours: 'Саат',
      minutes: 'Мүнөт',
      seconds: 'Секунд',
      dear: 'Урматтуу достор жана туугандар!',
      invitation_text: 'Биз кубаныч менен сиздерди биздин өмүрдөгү эң маанилүү жана бактылуу күнгө — үйлөнүү күнүбүзгө катышууга чакырабыз! Сиздердин катышууңуз бул күндү чыныгы өзгөчө жана сүйүүгө толгон кылат.',
      quote: '"Сүйүү — бул табылган нерсе эмес, бирге түзүлгөн нерсе"',
      couple: 'Айдана & Бекзат',
      information: 'Маалымат',
      date_label: 'Күнү',
      date_value: '2025-жыл 12-ноябрь',
      time_label: 'Убакыт',
      time_value: '16:00',
      place_label: 'Жер',
      place_value: '"Ала-Тоо" рестораны, Ош шаары',
      rsvp_title: 'Катышууну ырастоо',
      rsvp_subtitle: 'Сураныч, биздин тойго катышууңузду ырастаңыз',
      guest_name_ph: 'Сиздин атыңыз*',
      attend_yes: 'Ооба, катышам',
      attend_no: 'Жок, келе албайм',
      guest_count_ph: 'Коноктордун саны',
      rsvp_comment_ph: 'Өзгөчө талаптар (диета, аллергия ж.б.)',
      submit_rsvp: 'Ырастоо',
      rsvp_success: 'Ырастоо үчүн рахмат!',
      location_title: 'Жайгашуу',
      map_address: '"Ала-Тоо" рестораны, Ош, Кыргызстан',
      footer: '© Айдана & Бекзат — 2025-жыл ноябрь',
      footer_quote: '"Башкага бере ала турган эң чоң белек — бул өзүңдүн катышууң"'
    }
  };

  // Set language
  function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.innerHTML = translations[lang][el.dataset.i18n] || el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = translations[lang][el.dataset.i18nPlaceholder] || el.placeholder;
    });
    document.title = translations[lang].title;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
  }

  const currentLang = localStorage.getItem('lang') || 'ru';
  setLanguage(currentLang);

  // Language switcher events
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Theme toggle
  const themeToggle = document.querySelector('.cssbuttons-io');
  const html = document.documentElement;
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.dataset.theme = currentTheme;

  function updateThemeIcon() {
    const svgPath = themeToggle.querySelector('.theme-icon path');
    if (html.dataset.theme === 'dark') {
      svgPath.setAttribute('d', 'M12 7a5 5 0 0 1 0 10 5 5 0 0 1 0-10m0-4a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1m0 16a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1m-9-7a1 1 0 0 1-1-1H1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1h-1m18 0a1 1 0 0 1-1-1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1h-1m-2.657-6.343a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707zm-12 12a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707zm12-12a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707zm-12 12a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707z'); // Moon
    } else {
      svgPath.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'); // Sun
    }
  }

  themeToggle.addEventListener('click', () => {
    const newTheme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
  });

  updateThemeIcon();

  // Initialize AOS
  if (window.AOS) {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }

  // Countdown
  function updateCountdown() {
    const wedding = new Date('November 12, 2025 16:00:00').getTime();
    const now = Date.now();
    const diff = wedding - now;
    if (diff <= 0) {
      ['days', 'hours', 'minutes', 'seconds'].forEach(id => document.getElementById(id).textContent = '00');
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Smooth scrolling and active nav
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      // Close mobile menu
      document.querySelector('.nav').classList.remove('active');
      document.querySelector('.burger').classList.remove('active');
    });
  });

  // Burger menu
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Music control
  const music = document.getElementById('music1');
  const musicToggle = document.getElementById('musicToggle');
  let isPlaying = false;

  function updateMusicIcon() {
    const svgPath = musicToggle.querySelector('svg path');
    if (isPlaying) {
      svgPath.setAttribute('d', 'M6 19h4V5H6v14zm8-14v14h4V5h-4z'); // Pause
    } else {
      svgPath.setAttribute('d', 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'); // Play
    }
  }

  musicToggle.addEventListener('click', () => {
    if (isPlaying) {
      music.pause();
    } else {
      music.play().catch(e => console.warn('Autoplay prevented:', e));
    }
    isPlaying = !isPlaying;
    updateMusicIcon();
  });

  // QR
  try {
    new QRious({
      element: document.getElementById('qr1'),
      value: 'https://akbaralievernis.github.io/wedding/',
      size: 220
    });
  } catch (e) {
    console.warn(e);
  }

  // RSVP form handling
  const form = document.getElementById('rsvp-form');
  const successMessage = document.querySelector('.success-message');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
      .then(() => {
        form.style.display = 'none';
        successMessage.style.display = 'block';
        setTimeout(() => {
          form.reset();
          form.style.display = 'flex';
          successMessage.style.display = 'none';
        }, 5000);
      }, (error) => {
        console.error('Ошибка отправки формы:', error);
        alert('Ошибка при отправке формы. Попробуйте снова.');
      });
  });
});
