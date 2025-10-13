<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Анна & Михаил — Свадьба</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    body {
      font-family: Inter, sans-serif;
      margin: 0;
      padding: 20px;
      background: #fff9f6;
      color: #6b2e2e;
    }
    .btn {
      background: linear-gradient(135deg, #ec4899, #f59e0b);
      color: #fff;
      padding: 10px 18px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
    }
    .card {
      background: #fff;
      padding: 18px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(16,24,40,0.06);
      max-width: 720px;
      margin: 18px auto;
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 10px;
    }
    .field input,
    .field select {
      padding: 10px;
      border-radius: 8px;
      border: 1px solid #f3c7dd;
    }
    .notice {
      padding: 10px;
      border-radius: 8px;
      margin-top: 12px;
    }
    .success {
      background: #ecfdf5;
      color: #065f46;
    }
    .error {
      background: #fff1f2;
      color: #7f1d1d;
    }
  </style>
</head>
<body>
  <main>
    <section class="card" aria-labelledby="rsvpTitle">
      <h2 id="rsvpTitle">Подтвердить участие</h2>
      <p class="small">Заполните форму — мы получим письмо и подтвердим.</p>
      <form id="rsvpForm" novalidate>
        <input type="text" name="hp_field" id="hp_field" style="display:none" autocomplete="off">
        <div class="field">
          <label for="name">Имя и фамилия</label>
          <input id="name" name="name" type="text" required placeholder="Иван Иванов">
        </div>
        <div style="display:flex;gap:10px;margin-bottom:10px">
          <div style="flex:1" class="field">
            <label for="guests">Гостей</label>
            <select id="guests" name="guests">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div style="flex:1" class="field">
            <label>Приду?</label>
            <div style="display:flex;gap:10px;align-items:center">
              <label><input type="radio" name="attending" value="yes" required> Да</label>
              <label><input type="radio" name="attending" value="no" required> Нет</label>
            </div>
          </div>
        </div>
        <div class="field">
          <label for="diet">Диетические предпочтения</label>
          <input id="diet" name="diet" type="text" placeholder="Аллергии, вегетарианство">
        </div>
        <div style="display:flex;gap:10px">
          <button type="submit" class="btn">Отправить RSVP</button>
          <button type="button" id="resetBtn" style="background:transparent;border:1px solid #f3c7dd;padding:10px 16px;border-radius:8px">Сброс</button>
        </div>
        <div id="formNotice" aria-live="polite" style="margin-top:12px"></div>
      </form>
    </section>
  </main>
  <script>
    const form = document.getElementById('rsvpForm');
    const notice = document.getElementById('formNotice');
    const resetBtn = document.getElementById('resetBtn');
    function showNotice(t, e = 'success') {
      notice.innerHTML = '';
      const n = document.createElement('div');
      n.className = 'notice ' + (e === 'success' ? 'success' : 'error');
      n.textContent = t;
      notice.appendChild(n);
    }
    form.addEventListener('submit', async e => {
      e.preventDefault();
      notice.innerHTML = '';
      const t = new FormData(form);
      if (t.get('hp_field')) {
        showNotice('Запрос отклонён.', 'error');
        return;
      }
      const n = t.get('name')?.trim(), s = t.get('attending');
      if (!n || !s) {
        showNotice('Пожалуйста, заполните обязательные поля.', 'error');
        return;
      }
      const o = form.querySelector('button[type="submit"]');
      o.disabled = !0;
      o.textContent = 'Отправка...';
      try {
        const e = await fetch('rsvp.php', { method: 'POST', body: t }),
              n = await e.json();
        n.success
          ? (showNotice(n.message || 'Спасибо! Ваш RSVP получен.'), form.reset())
          : showNotice(n.message || 'Ошибка при отправке. Попробуйте позже.', 'error')
      } catch (e) {
        console.error(e),
        showNotice('Сетевая ошибка. Попробуйте снова.', 'error')
      } finally {
        o.disabled = !1;
        o.textContent = 'Отправить RSVP';
      }
    });
    resetBtn.addEventListener('click', () => form.reset());
  </script>
</body>
</html>
