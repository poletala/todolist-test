# Task Manager Backend
Это серверная часть приложения, которая предоставляет API для управления задачами и авторизацией. Сервер написан на Node.js с использованием Express и SQLite в качестве базы данных.

🚀 Установка и запуск
npm install
Убедитесь, что у вас установлен SQLite.
Запустите скрипт для инициализации базы данных:
npm run db:setup
node index.js
Сервер будет доступен по адресу: http://localhost:3001.

🛠 Используемые технологии
Node.js — среда выполнения JavaScript.
Express — фреймворк для создания API.
SQLite — легковесная база данных.
Socket.IO — библиотека для работы с WebSocket.
JWT — JSON Web Tokens для аутентификации.
Bcrypt — библиотека для хэширования паролей.

🌐 WebSocket
Сервер поддерживает WebSocket для обновлений.

⚠️ Ограничения
К сожалению, не удалось провести полноценный деплой серверной части проекта по следующим причинам:
1. **Хостинг**: Heroku, который изначально планировался для деплоя, недоступен в моей стране. Попытки использовать VPN также не увенчались успехом. Render не принимал данные карты нашей страны.
2. **База данных**: Использование SQLite в облачном хранилище невозможно из-за отсутствия необходимой платежной системы для регистрации на подходящих платформах.

Разработано с ❤️ для тестового задания.
