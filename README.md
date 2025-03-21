<h1 class="code-line" data-line-start=1 data-line-end=2 ><a id="Task_Manager_frontend_1"></a>Task Manager (frontend)</h1>
<p class="has-line-data" data-line-start="3" data-line-end="5">Приложение позволяет управлять задачами: создавать, редактировать, отслеживать их статус.<br>
Реализована авторизация пользователей, разделение прав доступа и взаимодействие с сервером через API.</p>
<h2 class="code-line" data-line-start=6 data-line-end=7 ><a id="____6"></a>🚀 Установка и запуск</h2>
<pre><code class="has-line-data" data-line-start="9" data-line-end="12" class="language-bash">npm install
npm run dev
</code></pre>
<p class="has-line-data" data-line-start="13" data-line-end="14">Перейдите на  [<a href="http://localhost:5173">http://localhost:5173</a>].</p>
<h2 class="code-line" data-line-start=15 data-line-end=16 ><a id="_____15"></a>🛠 Используемые технологии и библиотеки</h2>
<ul>
<li class="has-line-data" data-line-start="17" data-line-end="19">
<p class="has-line-data" data-line-start="17" data-line-end="18">[<strong>React</strong>]</p>
</li>
<li class="has-line-data" data-line-start="19" data-line-end="21">
<p class="has-line-data" data-line-start="19" data-line-end="20">[<strong>React Router DOM</strong>]</p>
</li>
<li class="has-line-data" data-line-start="21" data-line-end="23">
<p class="has-line-data" data-line-start="21" data-line-end="22">[<strong>Axios</strong>]</p>
</li>
<li class="has-line-data" data-line-start="23" data-line-end="25">
<p class="has-line-data" data-line-start="23" data-line-end="24">[<strong>React Spinners</strong>]</p>
</li>
<li class="has-line-data" data-line-start="25" data-line-end="27">
<p class="has-line-data" data-line-start="25" data-line-end="26">[<strong>SocketIO Client</strong>]</p>
</li>
<li class="has-line-data" data-line-start="27" data-line-end="29">
<p class="has-line-data" data-line-start="27" data-line-end="28">[<strong>Vite</strong>]</p>
</li>
<li class="has-line-data" data-line-start="29" data-line-end="31">
<p class="has-line-data" data-line-start="29" data-line-end="30">[<strong>TypeScript</strong>]</p>
</li>
<li class="has-line-data" data-line-start="31" data-line-end="33">
<p class="has-line-data" data-line-start="31" data-line-end="32">[<strong>ESLint</strong>]</p>
</li>
<li class="has-line-data" data-line-start="33" data-line-end="34">
<p class="has-line-data" data-line-start="33" data-line-end="34">[<strong>gh-pages</strong>]</p>
</li>
</ul>
<h2 class="code-line" data-line-start=36 data-line-end=37 ><a id="___36"></a>📝 Особенности реализации</h2>
<ul>
<li class="has-line-data" data-line-start="38" data-line-end="40">
<p class="has-line-data" data-line-start="38" data-line-end="39">Авторизация пользователей с разделением прав доступа.</p>
</li>
<li class="has-line-data" data-line-start="40" data-line-end="42">
<p class="has-line-data" data-line-start="40" data-line-end="41">Валидация форм и обработка ошибок.</p>
</li>
<li class="has-line-data" data-line-start="42" data-line-end="44">
<p class="has-line-data" data-line-start="42" data-line-end="43">Использование TypeScript для повышения надежности кода.</p>
</li>
<li class="has-line-data" data-line-start="44" data-line-end="45">
<p class="has-line-data" data-line-start="44" data-line-end="45">Оптимизация производительности с помощью Vite.</p>
</li>
</ul>
<h1 class="code-line" data-line-start=47 data-line-end=48 ><a id="Task_Manager_backend_47"></a>Task Manager (backend)</h1>
<p class="has-line-data" data-line-start="49" data-line-end="50">Это серверная часть приложения, которая предоставляет API для управления задачами и авторизацией. Сервер написан на Node.js с использованием Express и SQLite в качестве базы данных.</p>
<h2 class="code-line" data-line-start=51 data-line-end=52 ><a id="____51"></a>🚀 Установка и запуск</h2>
<pre><code class="has-line-data" data-line-start="54" data-line-end="56" class="language-bash">npm install
</code></pre>
<p class="has-line-data" data-line-start="56" data-line-end="58">Убедитесь, что у вас установлен SQLite.<br>
Запустите скрипт для инициализации базы данных:</p>
<pre><code class="has-line-data" data-line-start="59" data-line-end="62" class="language-bash">npm run db:setup
node index.js
</code></pre>
<p class="has-line-data" data-line-start="63" data-line-end="64">Сервер будет доступен по адресу:  <a href="http://localhost:3001/">http://localhost:3001</a>.</p>
<h2 class="code-line" data-line-start=65 data-line-end=66 ><a id="___65"></a>🛠 Используемые технологии</h2>
<ul>
<li class="has-line-data" data-line-start="67" data-line-end="69">
<p class="has-line-data" data-line-start="67" data-line-end="68">[<strong>Node.js</strong>]</p>
</li>
<li class="has-line-data" data-line-start="69" data-line-end="71">
<p class="has-line-data" data-line-start="69" data-line-end="70">[<strong>Express</strong>]</p>
</li>
<li class="has-line-data" data-line-start="71" data-line-end="73">
<p class="has-line-data" data-line-start="71" data-line-end="72">[<strong>SQLite</strong>]</p>
</li>
<li class="has-line-data" data-line-start="73" data-line-end="75">
<p class="has-line-data" data-line-start="73" data-line-end="74">[<strong>SocketIO</strong>]</p>
</li>
<li class="has-line-data" data-line-start="75" data-line-end="77">
<p class="has-line-data" data-line-start="75" data-line-end="76">[<strong>JWT</strong>]</p>
</li>
<li class="has-line-data" data-line-start="77" data-line-end="78">
<p class="has-line-data" data-line-start="77" data-line-end="78">[<strong>Bcrypt</strong>]</p>
</li>
</ul>
<h2 class="code-line" data-line-start=80 data-line-end=81 ><a id="_WebSocket_80"></a>🌐 WebSocket</h2>
<p class="has-line-data" data-line-start="82" data-line-end="83">Сервер поддерживает WebSocket для обновлений.</p>
<h2 class="code-line" data-line-start=84 data-line-end=85 ><a id="__84"></a>⚠️ Ограничения</h2>
<p class="has-line-data" data-line-start="86" data-line-end="87">К сожалению, не удалось провести полноценный деплой серверной части проекта по следующим причинам:</p>
<ol>
<li class="has-line-data" data-line-start="88" data-line-end="90">
<p class="has-line-data" data-line-start="88" data-line-end="89"><strong>Хостинг</strong>: Heroku, который изначально планировался для деплоя, недоступен в моей стране. Попытки использовать VPN также не увенчались успехом. Render не принимал данные карты нашей страны.</p>
</li>
<li class="has-line-data" data-line-start="90" data-line-end="91">
<p class="has-line-data" data-line-start="90" data-line-end="91"><strong>База данных</strong>: Использование SQLite в облачном хранилище невозможно из-за отсутствия необходимой платежной системы для регистрации на подходящих платформах.</p>
</li>
</ol>
<p class="has-line-data" data-line-start="93" data-line-end="94">Несмотря на это, проект полностью функционален в локальной среде. Все API-запросы и WebSocket-соединения работают корректно при запуске сервера на  <code>localhost</code>.</p>
<h2 class="code-line" data-line-start=95 data-line-end=96 ><a id="____SQLite_95"></a>📂 Просмотр базы данных SQLite</h2>
<p class="has-line-data" data-line-start="97" data-line-end="98">Для просмотра файла  <code>database.sqlite</code>  можно использовать плагин, например,  <strong>SQLite Viewer</strong>. Данные для тестирования (логины и пароли) находятся в файле  <code>data.js</code>. Тестовые пользователи:</p>
<ul>
<li class="has-line-data" data-line-start="99" data-line-end="101">
<p class="has-line-data" data-line-start="99" data-line-end="100">Логины:  <code>anton</code>,  <code>kristina</code>,  <code>kosta</code>,  <code>antonl</code>,  <code>stepan</code>,  <code>yulia</code></p>
</li>
<li class="has-line-data" data-line-start="101" data-line-end="102">
<p class="has-line-data" data-line-start="101" data-line-end="102">Пароль для всех:  <code>password123</code></p>
</li>
</ul>
<h2 class="code-line" data-line-start=104 data-line-end=105 ><a id="___GitHub_Pages_104"></a>🌐 Фронтенд на GitHub Pages</h2>
<p class="has-line-data" data-line-start="106" data-line-end="107">Фронтенд был развернут на GitHub Pages, но подключиться к серверу оттуда невозможно из-за описанных выше проблем. Ссылка на фронтенд:  <a href="https://poletala.github.io/todolist/">https://poletala.github.io/todolist/</a>.</p>
<h2 class="code-line" data-line-start=108 data-line-end=109 ><a id="___SQLite_108"></a>❓ Почему выбран SQLite</h2>
<p class="has-line-data" data-line-start="110" data-line-end="111">SQLite был выбран из-за своей простоты и легкости в использовании для локальной разработки. Он не требует настройки отдельного сервера базы данных и идеально подходит для небольших проектов, таких как этот.</p>
<hr>
<h1 class="code-line" data-line-start=114 data-line-end=115 ><a id="______114"></a>Разработано с ❤️ для тестового задания.</h1>