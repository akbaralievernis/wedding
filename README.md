<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Свадьба Айдана & Бекзата</title>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="particles"></div>

  <nav class="navbar">
    <a href="#hero">Главная</a>
    <a href="#info">Инфо</a>
    <a href="#map">Карта</a>
    <a href="#rsvp">RSVP</a>
    <a href="#qr">QR</a>
  </nav>

  <main>
    <section class="hero" id="hero" data-aos="zoom-in">
      <h1 class="names">Айдана <span>&</span> Бекзат</h1>
      <h2 class="wedding-text">Мы женимся!</h2>
      <p class="wedding-date">12 ноября 2025 года</p>
      <div class="countdown" id="countdown">
        <div class="countdown-item" data-aos="fade-up" data-aos-delay="100">
          <div class="countdown-value" id="days">00</div>
          <div class="countdown-label">Дней</div>
        </div>
        <div class="countdown-item" data-aos="fade-up" data-aos-delay="200">
          <div class="countdown-value" id="hours">00</div>
          <div class="countdown-label">Часов</div>
        </div>
        <div class="countdown-item" data-aos="fade-up" data-aos-delay="300">
          <div class="countdown-value" id="minutes">00</div>
          <div class="countdown-label">Минут</div>
        </div>
        <div class="countdown-item" data-aos="fade-up" data-aos-delay="400">
          <div class="countdown-value" id="seconds">00</div>
          <div class="countdown-label">Секунд</div>
        </div>
      </div>
    </section>
    <section id="info" data-aos="fade-up">
      <h2 class="section-title">Информация</h2>
      <div class="info-cards">
        <div class="info-card" data-aos="zoom-in" data-aos-delay="100">
          <span class="info-icon">📅</span>
          <div class="info-label">Дата</div>
          <div class="info-value">12 ноября 2025</div>
        </div>
        <div class="info-card" data-aos="zoom-in" data-aos-delay="200">
          <span class="info-icon">🕕</span>
          <div class="info-label">Время</div>
          <div class="info-value">16:00</div>
        </div>
        <div class="info-card" data-aos="zoom-in" data-aos-delay="300">
          <span class="info-icon">📍</span>
          <div class="info-label">Место</div>
          <div class="info-value">Ресторан "Ала-Тоок"<br>г. Ош</div>
        </div>
      </div>
    </section>
    <section id="map" data-aos="fade-left">
      <h2 class="section-title">Локация</h2>
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98784158447607!3d40.75797177932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus" allowfullscreen loading="lazy"></iframe>
      </div>
    </section>
    <section id="rsvp" data-aos="fade-right">
      <h2 class="section-title">Подтвердите участие</h2>
      <button class="rsvp-button" id="rsvpToggle">RSVP</button>
      <form class="rsvp-form" id="rsvpForm" onsubmit="return false;">
        <div class="form-group"><label for="name">Ваше имя *</label><input id="name" name="name" required placeholder="Введите ваше имя"></div>
        <div class="form-group"><label for="guests">Количество гостей *</label><select id="guests" name="guests" required><option value="">Выберите...</option><option value="1">1 гость</option><option value="2">2 гостя</option><option value="3">3 гостя</option><option value="4">4 гостя</option><option value="5">5+ гостей</option></select></div>
        <div class="form-group"><label for="comment">Комментарий</label><textarea id="comment" name="comment" rows="3" placeholder="Особые пожелания или комментарии"></textarea></div>
        <button type="submit" class="form-submit">Отправить</button>
      </form>
    </section>
    <section id="qr" data-aos="zoom-in-up">
      <h2 class="section-title">QR код</h2>
      <div class="qr-container">
        <h3 class="qr-title">Сохраните приглашение</h3>
        <canvas id="qrCode" width="240" height="240"></canvas>
      </div>
    </section>
  </main>

  <footer data-aos="fade-up">
    <p>С любовью, Айдана & Бекзат • Ноябрь 2025</p>
  </footer>

  <div class="music-controls" data-aos="zoom-in">
    <div class="music-button" id="musicButton" aria-label="Музыка" role="button">
      <svg id="musicIcon" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" /></svg>
    </div>
  </div>

  <audio id="backgroundMusic" loop preload="auto">
    <source src="Indila - Love Story (Version Orchestral (2).mp3" type="audio/mpeg">
  </audio>

  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.0/qrious.min.js"></script>
  <script src="app.js"></script>
</body>
</html>
