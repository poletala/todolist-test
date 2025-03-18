<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Task_Manager_frontend_0"></a>Task Manager (frontend)</h1>
<p class="has-line-data" data-line-start="2" data-line-end="4">Приложение позволяет управлять задачами: создавать, редактировать, отслеживать их статус.<br>
Реализована авторизация пользователей, разделение прав доступа и взаимодействие с сервером через API.</p>
<h2 class="code-line" data-line-start=5 data-line-end=6 ><a id="____5"></a>🚀 Установка и запуск</h2>
<blockquote>
<p class="has-line-data" data-line-start="7" data-line-end="10">npm install<br>
npm run dev<br>
Перейдите на <a href="http://localhost:5173">http://localhost:5173</a></p>
</blockquote>
<h2 class="code-line" data-line-start=11 data-line-end=12 ><a id="_____11"></a>🛠 Используемые технологии и библиотеки</h2>
<p class="has-line-data" data-line-start="13" data-line-end="22">[<strong>React</strong>]<br>
[<strong>React Router DOM</strong>]<br>
[<strong>Axios</strong>]<br>
[<strong>React Spinners</strong>]<br>
[<strong>SocketIO Client</strong>]<br>
[<strong>Vite</strong>]<br>
[<strong>TypeScript</strong>]<br>
[<strong>ESLint</strong>]<br>
[<strong>gh-pages</strong>]</p>
<h2 class="code-line" data-line-start=23 data-line-end=24 ><a id="___23"></a>📝 Особенности реализации</h2>
<ul>
<li class="has-line-data" data-line-start="24" data-line-end="25">Авторизация пользователей с разделением прав доступа.</li>
<li class="has-line-data" data-line-start="25" data-line-end="26">Валидация форм и обработка ошибок.</li>
<li class="has-line-data" data-line-start="26" data-line-end="27">Использование TypeScript для повышения надежности кода.</li>
<li class="has-line-data" data-line-start="27" data-line-end="29">Оптимизация производительности с помощью Vite.</li>
</ul>
<h1 class="code-line" data-line-start=29 data-line-end=30 ><a id="Task_Manager_backend_29"></a>Task Manager (backend)</h1>
<p class="has-line-data" data-line-start="30" data-line-end="31">Это серверная часть приложения, которая предоставляет API для управления задачами и авторизацией. Сервер написан на Node.js с использованием Express и SQLite в качестве базы данных.</p>
<h2 class="code-line" data-line-start=32 data-line-end=33 ><a id="____32"></a>🚀 Установка и запуск</h2>
<blockquote>
<p class="has-line-data" data-line-start="33" data-line-end="39">npm install<br>
Убедитесь, что у вас установлен SQLite.<br>
Запустите скрипт для инициализации базы данных:<br>
npm run db:setup<br>
node index.js<br>
Сервер будет доступен по адресу: <a href="http://localhost:3001">http://localhost:3001</a>.</p>
</blockquote>
<h2 class="code-line" data-line-start=40 data-line-end=41 ><a id="___40"></a>🛠 Используемые технологии</h2>
<p class="has-line-data" data-line-start="41" data-line-end="47">[<strong>Node.js</strong>]<br>
[<strong>Express</strong>]<br>
[<strong>SQLite</strong>]<br>
[<strong>SocketIO</strong>]<br>
[<strong>JWT</strong>]<br>
[<strong>Bcrypt</strong>]</p>
<h2 class="code-line" data-line-start=48 data-line-end=49 ><a id="_WebSocket_48"></a>🌐 WebSocket</h2>
<p class="has-line-data" data-line-start="49" data-line-end="50">Сервер поддерживает WebSocket для обновлений.</p>
<h1 class="code-line" data-line-start=51 data-line-end=52 ><a id="__51"></a>⚠️ Ограничения</h1>
<p class="has-line-data" data-line-start="52" data-line-end="53">К сожалению, не удалось провести полноценный деплой серверной части проекта по следующим причинам:</p>
<ol>
<li class="has-line-data" data-line-start="53" data-line-end="54"><strong>Хостинг</strong>: Heroku, который изначально планировался для деплоя, недоступен в моей стране. Попытки использовать VPN также не увенчались успехом. Render не принимал данные карты нашей страны.</li>
<li class="has-line-data" data-line-start="54" data-line-end="56"><strong>База данных</strong>: Использование SQLite в облачном хранилище невозможно из-за отсутствия необходимой платежной системы для регистрации на подходящих платформах.</li>
</ol>
<p class="has-line-data" data-line-start="56" data-line-end="57">Несмотря на это, проект полностью функционален в локальной среде. Все API-запросы и WebSocket-соединения работают корректно при запуске сервера на <code>localhost</code>.</p>
<h1 class="code-line" data-line-start=59 data-line-end=60 ><a id="______59"></a>Разработано с ❤️ для тестового задания.</h1>