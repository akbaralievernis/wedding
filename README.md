<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="Свадебное приглашение - Вариант 1. Современная классика для Айдана и Бекзат. Wedding.KG - создайте свое идеальное приглашение." />
  <title data-i18n="title">Вариант 1 — Современная классика — Айдана & Бекзат</title>
  <link rel="icon" href="favicon.ico" />
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Dancing+Script:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600&family=Lora:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
  <link rel="stylesheet" href="style.css"/>
</head>
<body>
  <!-- Animated Background -->
  <div class="animated-bg">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
    <div class="shape shape-4"></div>
    <div class="shape shape-5"></div>
  </div>

  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="#" class="brand">Wedding.KG</a>
        <nav class="nav">
          <a href="#hero" class="nav-link" data-i18n="home">Главная</a>
          <a href="#invitation" class="nav-link" data-i18n="invitation">Приглашение</a>
          <a href="#info" class="nav-link" data-i18n="info">Инфо</a>
          <a href="#gallery" class="nav-link" data-i18n="gallery">Галерея</a>
          <a href="#rsvp" class="nav-link" data-i18n="rsvp">RSVP</a>
          <a href="#location" class="nav-link" data-i18n="location">Локация</a>
        </nav>
        <div class="controls">
          <div class="lang-switch">
            <button class="lang-btn active" data-lang="ru">🇷🇺</button>
            <button class="lang-btn" data-lang="en">en</button>
            <button class="lang-btn" data-lang="kg">🇰🇬</button>
          </div>
          <button class="cssbuttons-io" title="Переключить тему">
            <span>
              <svg class="theme-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              dark
            </span>
          </button>
          <button class="burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Music Controls -->
  <div class="music-controls">
    <button id="musicToggle" class="music-button">
      <svg viewBox="0 0 24 24">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
    </button>
  </div>

  <main>
    <section id="hero" class="hero" data-aos="fade-down">
      <div class="container">
        <div class="hero-inner">
          <h1 class="names" data-i18n="names">Айдана <span>&</span> Бекзат</h1>
          <p class="subtitle" data-i18n="subtitle">Мы женимся — 12 ноября 2025</p>
          <div class="countdown">
            <div class="item"><div id="days">00</div><small data-i18n="days">Дней</small></div>
            <div class="item"><div id="hours">00</div><small data-i18n="hours">Часов</small></div>
            <div class="item"><div id="minutes">00</div><small data-i18n="minutes">Минут</small></div>
            <div class="item"><div id="seconds">00</div><small data-i18n="seconds">Секунд</small></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Invitation Section -->
    <section id="invitation" class="section invitation-section" data-aos="fade-up">
      <div class="container">
        <div class="invitation-card">
          <h2 class="invitation-title" data-i18n="dear">Дорогие друзья и родные!</h2>
          <p class="invitation-text" data-i18n="invitation_text">
            Мы с радостью приглашаем вас разделить с нами самый важный и счастливый день в нашей жизни — 
            день нашего бракосочетания! Ваше присутствие сделает этот день по-настоящему особенным и наполненным любовью.
          </p>
          <div class="quote">
            <p data-i18n="quote">"Любовь — это не то, что можно найти, а то, что создается вместе"</p>
          </div>
          <div class="couple-names" data-i18n="couple">Айдана & Бекзат</div>
        </div>
      </div>
    </section>
    <section id="info" class="section" data-aos="fade-up">
      <div class="container">
        <h2 data-i18n="information">Информация</h2>
        <div class="cards">
          <div class="card" data-aos="zoom-in" data-aos-delay="100">📅<strong data-i18n="date_label">Дата</strong><span data-i18n="date_value">12 ноября 2025</span></div>
          <div class="card" data-aos="zoom-in" data-aos-delay="200">🕕<strong data-i18n="time_label">Время</strong><span data-i18n="time_value">16:00</span></div>
          <div class="card" data-aos="zoom-in" data-aos-delay="300">📍<strong data-i18n="place_label">Место</strong><span data-i18n="place_value">Ресторан "Олигарх", г. Ош</span></div>
        </div>
      </div>
    </section>
    <section id="gallery" class="section" data-aos="fade-up">
      <div class="container">
        <h2 data-i18n="our_moments">Наши моменты</h2>
        <div class="carousel">
          <div class="carousel-control-button left">
            <input type="radio" name="carousel-control-input">
          </div>
          <div class="carousel-control-button right">
            <input type="radio" name="carousel-control-input" checked>
          </div>
          <div class="carousel-rotation-direction">
            <ul class="carousel-item-wrapper" style="--_num-elements: 6">
              <li class="carousel-item" style="--_index: 1; --_image-url: url('https://picsum.photos/seed/p1/800/600')">
                <a href="#">Photo 1</a>
              </li>
              <li class="carousel-item" style="--_index: 2; --_image-url: url('https://picsum.photos/seed/p2/800/600')">
                <a href="#">Photo 2</a>
              </li>
              <li class="carousel-item" style="--_index: 3; --_image-url: url('https://picsum.photos/seed/p3/800/600')">
                <a href="#">Photo 3</a>
              </li>
              <li class="carousel-item" style="--_index: 4; --_image-url: url('https://picsum.photos/seed/p4/800/600')">
                <a href="#">Photo 4</a>
              </li>
              <li class="carousel-item" style="--_index: 5; --_image-url: url('https://picsum.photos/seed/p5/800/600')">
                <a href="#">Photo 5</a>
              </li>
              <li class="carousel-item" style="--_index: 6; --_image-url: url('https://picsum.photos/seed/p6/800/600')">
                <a href="#">Photo 6</a>
              </li>
              <li class="carousel-ground"></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="rsvp" class="section" data-aos="fade-up">
      <div class="container narrow">
        <h2 data-i18n="rsvp_title">Подтверждение присутствия</h2>
        <p class="rsvp-subtitle" data-i18n="rsvp_subtitle">Пожалуйста, подтвердите ваше присутствие на нашей свадьбе</p>
        <form id="rsvp-form" class="rsvp-form">
          <input id="guest_name" placeholder="Ваше имя*" required data-i18n-placeholder="guest_name_ph">
          <div class="attendance">
            <label><input type="radio" name="attendance" value="yes" required data-i18n="attend_yes"> Да, приду</label>
            <label><input type="radio" name="attendance" value="no" data-i18n="attend_no"> Нет, не смогу</label>
          </div>
          <input id="guest_count" type="number" min="1" placeholder="Количество гостей" data-i18n-placeholder="guest_count_ph">
          <textarea id="rsvp_comment" placeholder="Особые пожелания (диета, аллергии и т.д.)" data-i18n-placeholder="rsvp_comment_ph"></textarea>
          <button class="btn" data-i18n="submit_rsvp">Подтвердить</button>
        </form>
        <p class="success-message" style="display: none;" data-i18n="rsvp_success">Спасибо за подтверждение!</p>
      </div>
    </section>
    <section id="location" class="section" data-aos="fade-up">
      <div class="container">
        <h2 data-i18n="location_title">📍 Местоположение</h2>
        <div class="map-container">
          <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.1515796129434!2d72.76652279999999!3d40.51614059999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac5d7cdf8579%3A0x3414aba134ac8869!2z0J7Qu9C40LPQsNGA0YUg0YDQtdGB0YLQvtGA0LDQvdGL!5e0!3m2!1sru!2skg!4v1760626730071!5m2!1sru!2skg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p class="map-address" data-i18n="map_address">📍 Ресторан "Олигарх", г. Ош, Кыргызстан</p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-inner">
        <p data-i18n="footer">© Айдана & Бекзат — Ноябрь 2025</p>
        <p class="footer-quote" data-i18n="footer_quote">"Самый большой дар, который вы можете сделать другому, — это ваше собственное присутствие"</p>
      </div>
    </div>
  </footer>

  <audio id="music1" loop preload="auto">
    <source src="Indila - Love Story (Version Orchestral (2).mp3" type="audio/mpeg">
  </audio>

  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.0/qrious.min.js"></script>
  <script src="app.js"></script>
</body>
</html>
