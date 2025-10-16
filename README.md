<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Вариант 1 — Современная классика — Айдана & Бекзат</title>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;500;600&family=Dancing+Script:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
  <link rel="stylesheet" href="style.css" />
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

  <nav class="nav">
    <a href="#hero" class="nav-link">Главная</a>
    <a href="#invitation" class="nav-link">Приглашение</a>
    <a href="#info" class="nav-link">Инфо</a>
    <a href="#gallery" class="nav-link">Галерея</a>
    <a href="#rsvp" class="nav-link">RSVP</a>
    <a href="#location" class="nav-link">Локация</a>
  </nav>

  <!-- Music Controls -->
  <div class="music-controls">
    <button id="musicToggle" class="music-button">
      <svg viewBox="0 0 24 24">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
    </button>
  </div>

  <header id="hero" class="hero" data-aos="fade-down">
    <div class="hero-inner">
      <h1 class="names">Айдана <span>&</span> Бекзат</h1>
      <p class="subtitle">Мы женимся — 12 ноября 2025</p>
      <div class="countdown">
        <div class="item"><div id="days">00</div><small>Дней</small></div>
        <div class="item"><div id="hours">00</div><small>Часов</small></div>
        <div class="item"><div id="minutes">00</div><small>Минут</small></div>
        <div class="item"><div id="seconds">00</div><small>Секунд</small></div>
      </div>
    </div>
  </header>

  <main>
    <!-- Invitation Section -->
    <section id="invitation" class="section invitation-section" data-aos="fade-up">
      <div class="invitation-card">
        <h2 class="invitation-title">Дорогие друзья и родные!</h2>
        <p class="invitation-text">
          Мы с радостью приглашаем вас разделить с нами самый важный и счастливый день в нашей жизни — 
          день нашего бракосочетания! Ваше присутствие сделает этот день по-настоящему особенным и наполненным любовью.
        </p>
        <div class="quote">
          <p>"Любовь — это не то, что можно найти, а то, что создается вместе"</p>
        </div>
        <div class="couple-names">Айдана & Бекзат</div>
      </div>
    </section>
    <section id="info" class="section" data-aos="fade-up">
      <h2>Информация</h2>
      <div class="cards">
        <div class="card" data-aos="zoom-in" data-aos-delay="100">📅<strong>Дата</strong><span>12 ноября 2025</span></div>
        <div class="card" data-aos="zoom-in" data-aos-delay="200">🕕<strong>Время</strong><span>16:00</span></div>
        <div class="card" data-aos="zoom-in" data-aos-delay="300">📍<strong>Место</strong><span>Ресторан "Олигарх", г. Ош</span></div>
      </div>
    </section>
    <section id="gallery" class="section gallery" data-aos="zoom-in">
      <h2>Наши моменты</h2>
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
              <a href="#">Наше фото 1</a>
            </li>
            <li class="carousel-item" style="--_index: 2; --_image-url: url('https://picsum.photos/seed/p2/800/600')">
              <a href="#">Наше фото 2</a>
            </li>
            <li class="carousel-item" style="--_index: 3; --_image-url: url('https://picsum.photos/seed/p3/800/600')">
              <a href="#">Наше фото 3</a>
            </li>
            <li class="carousel-item" style="--_index: 4; --_image-url: url('https://picsum.photos/seed/p4/800/600')">
              <a href="#">Наше фото 4</a>
            </li>
            <li class="carousel-item" style="--_index: 5; --_image-url: url('https://picsum.photos/seed/p5/800/600')">
              <a href="#">Наше фото 5</a>
            </li>
            <li class="carousel-item" style="--_index: 6; --_image-url: url('https://picsum.photos/seed/p6/800/600')">
              <a href="#">Наше фото 6</a>
            </li>
            <li class="carousel-ground"></li>
          </ul>
        </div>
      </div>
    </section>
    <section id="rsvp" class="section" data-aos="fade-up">
      <h2>Подтвердите участие</h2>
      <p class="rsvp-subtitle">Пожалуйста, подтвердите ваше присутствие до 1 ноября 2025</p>
      <button id="toggleForm" class="btn">RSVP</button>
      <form id="form1" class="rsvp-form" onsubmit="return false;">
        <input id="name1" placeholder="Ваше имя*" required>
        <select id="guests1" required>
          <option value="">Количество гостей</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <textarea id="message1" placeholder="Ваши пожелания или комментарии..."></textarea>
        <button class="btn">Отправить</button>
      </form>
    </section>
    <section id="location" class="section" data-aos="fade-up">
      <h2>📍 Местоположение</h2>
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.1515796129434!2d72.76652279999999!3d40.51614059999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac5d7cdf8579%3A0x3414aba134ac8869!2z0J7Qu9C40LPQsNGA0YUg0YDQtdGB0YLQvtGA0LDQvdGL!5e0!3m2!1sru!2skg!4v1760626730071!5m2!1sru!2skg" width="700" height="650" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <p class="map-address">📍 Ресторан "Олигарх", г. Ош, Кыргызстан</p>
    </section>
  </main>

  <footer class="footer">
    <p>© Айдана & Бекзат — Ноябрь 2025</p>
    <p class="footer-quote">"Самый большой дар, который вы можете сделать другому, — это ваше собственное присутствие"</p>
  </footer>

  <audio id="music1" loop preload="auto">
    <source src="Indila - Love Story (Version Orchestral (2).mp3" type="audio/mpeg">
  </audio>

  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.0/qrious.min.js"></script>
  <script src="app.js"></script>
</body>
</html>
