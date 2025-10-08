<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Свадьба Анны & Михаила</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Georgia', serif;
            background: linear-gradient(135deg, #fdf2f8 0%, #fff8e1 50%, #fce8e6 100%);
            color: #7f1d1d;
            line-height: 1.6;
            overflow-x: hidden;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            z-index: 1000;
            border-bottom: 1px solid #fbcfe8;
            padding: 15px 0;
        }
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: #be123c;
        }
        .language-switch {
            background: #fef3c7;
            color: #92400e;
            padding: 8px 16px;
            border-radius: 20px;
            border: none;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .language-switch:hover {
            background: #fde68a;
        }
        .hero {
            padding: 180px 0 80px;
            text-align: center;
            position: relative;
        }
        .hero-content {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
        }
        .names {
            font-size: 3.5rem;
            font-weight: bold;
            color: #991b1b;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        .invite {
            font-size: 1.4rem;
            margin-bottom: 40px;
            color: #be123c;
            line-height: 1.8;
        }
        .countdown {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 40px;
            display: inline-block;
        }
        .countdown-title {
            font-size: 1.1rem;
            font-weight: bold;
            margin-bottom: 15px;
            color: #991b1b;
        }
        .countdown-items {
            display: flex;
            gap: 15px;
            justify-content: center;
        }
        .countdown-item {
            text-align: center;
        }
        .countdown-value {
            font-size: 1.8rem;
            font-weight: bold;
            background: white;
            padding: 10px 15px;
            border-radius: 10px;
            min-width: 60px;
            color: #991b1b;
        }
        .countdown-label {
            font-size: 0.8rem;
            margin-top: 5px;
            color: #be123c;
        }
        .event-info {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            margin-bottom: 40px;
        }
        .event-item {
            text-align: center;
            padding: 20px;
        }
        .event-icon {
            font-size: 1.5rem;
            color: #be123c;
            margin-bottom: 10px;
        }
        .event-date, .event-venue {
            font-weight: bold;
            color: #991b1b;
        }
        .event-time, .event-address {
            color: #be123c;
            font-size: 0.9rem;
        }
        .btn {
            background: linear-gradient(135deg, #ec4899 0%, #f59e0b 100%);
            color: white;
            padding: 16px 40px;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
        }
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4);
        }
        section {
            padding: 80px 0;
        }
        .section-title {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 50px;
            color: #991b1b;
            position: relative;
        }
        .section-title:after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: linear-gradient(135deg, #ec4899, #f59e0b);
            border-radius: 3px;
        }
        .program {
            background: rgba(255, 255, 255, 0.5);
        }
        .program-items {
            max-width: 700px;
            margin: 0 auto;
        }
        .program-item {
            display: flex;
            gap: 20px;
            background: white;
            padding: 25px;
            border-radius: 16px;
            margin-bottom: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        .program-item:hover {
            transform: translateY(-3px);
        }
        .program-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #fce7f3, #fef3c7);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: #be123c;
            flex-shrink: 0;
        }
        .program-content h3 {
            font-size: 1.8rem;
            color: #991b1b;
            margin-bottom: 5px;
        }
        .program-content p {
            color: #be123c;
            font-size: 1.1rem;
        }
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            z-index: 2000;
            justify-content: center;
            align-items: center;
        }
        .modal-content {
            background: white;
            padding: 40px;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            position: relative;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .close-modal {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 1.5rem;
            cursor: pointer;
            color: #be123c;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            color: #991b1b;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #fbcfe8;
            border-radius: 12px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #ec4899;
        }
        .radio-group {
            display: flex;
            gap: 20px;
            margin-top: 8px;
        }
        .radio-option {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .quiz-item {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 16px;
            margin-bottom: 25px;
        }
        .quiz-question {
            font-size: 1.3rem;
            margin-bottom: 20px;
            color: #991b1b;
            font-weight: bold;
        }
        .quiz-answers {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        .quiz-answer {
            padding: 15px;
            background: white;
            border: 2px solid #fbcfe8;
            border-radius: 12px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .quiz-answer:hover {
            border-color: #ec4899;
            background: #fef3c7;
        }
        .quiz-answer.selected {
            border-color: #ec4899;
            background: #fef3c7;
            color: #92400e;
        }
        .location {
            background: rgba(255, 255, 255, 0.5);
        }
        .map-placeholder {
            height: 300px;
            background: linear-gradient(135deg, #fce7f3, #fef3c7);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
        }
        .map-icon {
            font-size: 4rem;
            color: #be123c;
            opacity: 0.5;
        }
        .location-info {
            text-align: center;
            margin-bottom: 30px;
        }
        .location-info h3 {
            font-size: 1.5rem;
            color: #991b1b;
            margin-bottom: 10px;
        }
        .location-info p {
            color: #be123c;
        }
        .location-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
        }
        .location-detail {
            display: flex;
            gap: 15px;
            align-items: flex-start;
        }
        .location-detail i {
            font-size: 1.2rem;
            color: #f59e0b;
            margin-top: 3px;
        }
        .location-detail h4 {
            color: #92400e;
            font-weight: bold;
        }
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        .gallery-item {
            aspect-ratio: 1;
            background: linear-gradient(135deg, #fbcfe8, #fcd34d);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .gallery-icon {
            font-size: 2.5rem;
            color: white;
            opacity: 0.7;
        }
        .contact {
            background: rgba(255, 255, 255, 0.5);
            text-align: center;
        }
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 40px;
            flex-wrap: wrap;
            margin-bottom: 30px;
        }
        .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.1rem;
        }
        .contact-item i {
            color: #be123c;
            font-size: 1.3rem;
        }
        footer {
            text-align: center;
            padding: 40px 0;
            color: #be123c;
            font-size: 0.9rem;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate {
            animation: fadeInUp 0.8s ease forwards;
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        @media (max-width: 768px) {
            .names {
                font-size: 2.5rem;
            }
            .invite {
                font-size: 1.1rem;
            }
            .event-info {
                gap: 15px;
            }
            .program-item {
                flex-direction: column;
                text-align: center;
            }
            .program-icon {
                margin: 0 auto 15px;
            }
            .section-title {
                font-size: 2rem;
            }
            .contact-info {
                gap: 20px;
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container header-content">
            <div class="logo">Свадьба</div>
            <button class="language-switch" onclick="switchLanguage()">EN</button>
        </div>
    </header>
    <section class="hero">
        <div class="container hero-content">
            <h1 class="names animate">Анна & Михаил</h1>
            <p class="invite animate delay-1">С радостью приглашаем вас разделить с нами самый важный день в нашей жизни</p>
            <div class="countdown animate delay-2">
                <div class="countdown-title">До свадьбы осталось:</div>
                <div class="countdown-items" id="countdown">
                    <div class="countdown-item">
                        <div class="countdown-value" id="days">00</div>
                        <div class="countdown-label">дней</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-value" id="hours">00</div>
                        <div class="countdown-label">часов</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-value" id="minutes">00</div>
                        <div class="countdown-label">минут</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-value" id="seconds">00</div>
                        <div class="countdown-label">секунд</div>
                    </div>
                </div>
            </div>
            <div class="event-info animate delay-3">
                <div class="event-item">
                    <div class="event-icon"><i class="fas fa-calendar"></i></div>
                    <div class="event-date">15 июня 2024</div>
                    <div class="event-time">16:00</div>
                </div>
                <div class="event-item">
                    <div class="event-icon"><i class="fas fa-map-marker-alt"></i></div>
                    <div class="event-venue">Отель "Романтика"</div>
                    <div class="event-address">ул. Любви, 123, Москва</div>
                </div>
            </div>
            <button class="btn animate delay-4" onclick="openRsvpModal()">Подтвердить участие</button>
        </div>
    </section>
    <section class="program">
        <div class="container">
            <h2 class="section-title">Программа мероприятия</h2>
            <div class="program-items">
                <div class="program-item">
                    <div class="program-icon"><i class="fas fa-clock"></i></div>
                    <div class="program-content">
                        <h3>16:00</h3>
                        <p>Церемония бракосочетания</p>
                    </div>
                </div>
                <div class="program-item">
                    <div class="program-icon"><i class="fas fa-utensils"></i></div>
                    <div class="program-content">
                        <h3>17:30</h3>
                        <p>Праздничный банкет</p>
                    </div>
                </div>
                <div class="program-item">
                    <div class="program-icon"><i class="fas fa-music"></i></div>
                    <div class="program-content">
                        <h3>20:00</h3>
                        <p>Первый танец и вечеринка</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="quiz">
        <div class="container">
            <h2 class="section-title">Насколько хорошо вы знаете нашу пару?</h2>
            <div class="quiz-items">
                <div class="quiz-item">
                    <div class="quiz-question">Где мы познакались?</div>
                    <div class="quiz-answers">
                        <div class="quiz-answer" onclick="selectAnswer(this)">На работе</div>
                        <div class="quiz-answer" onclick="selectAnswer(this)">Через друзей</div>
                        <div class="quiz-answer" onclick="selectAnswer(this)">В университете</div>
                    </div>
                </div>
                <div class="quiz-item">
                    <div class="quiz-question">Какой наш любимый фильм?</div>
                    <div class="quiz-answers">
                        <div class="quiz-answer" onclick="selectAnswer(this)">Ла-Ла Ленд</div>
                        <div class="quiz-answer" onclick="selectAnswer(this)">Начало</div>
                        <div class="quiz-answer" onclick="selectAnswer(this)">Интерстеллар</div>
                    </div>
                </div>
                <div class="quiz-item">
                    <div class="quiz-question">Где мы провели первый отпуск вместе?</div>
                    <div class="quiz-answers">
                        <div class="quiz-answer" onclick="selectAnswer(this)">Италия</div>
                        <div class="quiz-answer" onclick="selectAnswer(this)">Греция</div>
                        <div class="quiz-answer" onclick="selectAnswer(this)">Испания</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="location">
        <div class="container">
            <h2 class="section-title">Как добраться</h2>
            <div class="map-placeholder">
                <i class="fas fa-map-marked-alt map-icon"></i>
            </div>
            <div class="location-info">
                <h3>Отель "Романтика", Зал "Счастье"</h3>
                <p>ул. Любви, 123, Москва</p>
            </div>
            <div class="location-details">
                <div class="location-detail">
                    <i class="fas fa-car"></i>
                    <div>
                        <h4>Парковка доступна на территории отеля</h4>
                    </div>
                </div>
                <div class="location-detail">
                    <i class="fas fa-bus"></i>
                    <div>
                        <h4>Трансфер от метро "Свадебная" в 15:00</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="gallery-section">
        <div class="container">
            <h2 class="section-title">Наша история любви</h2>
            <div class="gallery">
                <div class="gallery-item">
                    <i class="fas fa-heart gallery-icon"></i>
                </div>
                <div class="gallery-item">
                    <i class="fas fa-heart gallery-icon"></i>
                </div>
                <div class="gallery-item">
                    <i class="fas fa-heart gallery-icon"></i>
                </div>
                <div class="gallery-item">
                    <i class="fas fa-heart gallery-icon"></i>
                </div>
            </div>
        </div>
    </section>
    <section class="contact">
        <div class="container">
            <h2 class="section-title">Связаться с нами</h2>
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>+7 (999) 123-45-67</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>anna.mikhail.wedding@email.com</span>
                </div>
            </div>
            <button class="btn" onclick="addToCalendar()">Добавить в календарь</button>
        </div>
    </section>
    <footer>
        <div class="container">
            <p>© 2024 Анна & Михаил. Все права защищены.</p>
        </div>
    </footer>
    <div class="modal" id="rsvpModal">
        <div class="modal-content">
            <span class="close-modal" onclick="closeRsvpModal()">&times;</span>
            <h2 style="text-align: center; margin-bottom: 25px; color: #991b1b;">Подтверждение участия</h2>
            <form id="rsvpForm">
                <div class="form-group">
                    <label for="name">Ваше имя и фамилия</label>
                    <input type="text" id="name" required>
                </div>
                <div class="form-group">
                    <label for="guests">Количество гостей</label>
                    <select id="guests">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="dietary">Диетические предпочтения</label>
                    <input type="text" id="dietary" placeholder="Аллергии, вегетарианство и т.д.">
                </div>
                <div class="form-group">
                    <label>Сможете ли прийти?</label>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="attending" value="yes" required>
                            <span>Да</span>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="attending" value="no" required>
                            <span>Нет</span>
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn" style="width: 100%;">Отправить</button>
            </form>
        </div>
    </div>
    <script>
        function updateCountdown() {
            const weddingDate = new Date('June 15, 2024 16:00:00').getTime();
            const now = new Date().getTime();
            const diff = weddingDate - now;
            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                document.getElementById('days').textContent = days.toString().padStart(2, '0');
                document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            }
        }
        setInterval(updateCountdown, 1000);
        updateCountdown();
        function openRsvpModal() {
            document.getElementById('rsvpModal').style.display = 'flex';
        }
        function closeRsvpModal() {
            document.getElementById('rsvpModal').style.display = 'none';
        }
        window.onclick = function(event) {
            const modal = document.getElementById('rsvpModal');
            if (event.target === modal) {
                closeRsvpModal();
            }
        }
        document.getElementById('rsvpForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за подтверждение!');
            closeRsvpModal();
            this.reset();
        });
        function selectAnswer(element) {
            const siblings = element.parentElement.children;
            for (let sibling of siblings) {
                sibling.classList.remove('selected');
            }
            element.classList.add('selected');
        }
        function switchLanguage() {
            const button = document.querySelector('.language-switch');
            if (button.textContent === 'EN') {
                button.textContent = 'RU';
                alert('Language switched to English (demo)');
            } else {
                button.textContent = 'EN';
                alert('Язык переключен на русский (демо)');
            }
        }
        function addToCalendar() {
            const weddingDate = new Date('2024-06-15T16:00:00');
            const endDate = new Date(weddingDate.getTime() + 6 * 60 * 60 * 1000);
            const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding//EN
BEGIN:VEVENT
UID:${Date.now()}@wedding.com
DTSTAMP:${new Date().toISOString().replace(/-|:|\.\d+/g, '')}
DTSTART:${weddingDate.toISOString().replace(/-|:|\.\d+/g, '')}
DTEND:${endDate.toISOString().replace(/-|:|\.\d+/g, '')}
SUMMARY:Свадьба Анны & Михаила
DESCRIPTION:С радостью приглашаем вас разделить с нами самый важный день в нашей жизни
LOCATION:Отель "Романтика", Зал "Счастье", ул. Любви, 123, Москва
END:VEVENT
END:VCALENDAR`;
            const blob = new Blob([icsContent], { type: 'text/calendar' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'wedding.ics';
            a.click();
            URL.revokeObjectURL(url);
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    </script>
</body>
</html>
```
