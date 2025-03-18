const express = require('express');
const cors = require('cors'); // Импорт библиотеки CORS для обработки кросс-доменных запросов
const http = require('http'); // Импорт модуля HTTP для создания HTTP-сервера
const { Server } = require('socket.io'); // Импорт Socket.IO для работы с WebSocket
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express(); // Создание экземпляра Express
const server = http.createServer(app); // Создание HTTP-сервера на основе Express
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173', // Разрешенный источник для WebSocket (адрес клиента)
        methods: ['GET', 'POST', 'PUT'], // Разрешенные HTTP-методы
        allowedHeaders: ["my-custom-header"], // Разрешенные заголовки
        credentials: true // Разрешение передачи учетных данных (например, cookies)
    },
});

// Middleware для обработки JSON-запросов
app.use(express.json());

// Middleware для обработки CORS
app.use(cors({
    origin: 'http://localhost:5173', // Разрешенный источник для CORS (адрес клиента)
    methods: ['GET', 'POST', 'PUT'], // Разрешенные HTTP-методы
    credentials: true // Разрешение передачи учетных данных
}));

// Подключаем роуты
app.use('/api', authRoutes); // Роуты для авторизации
app.use('/api', taskRoutes(io)); // Роуты для задач (передаем io для работы с WebSocket)
app.use('/api', userRoutes); // Роуты для пользователей

// Обработка WebSocket соединений
io.on('connection', (socket) => {
    console.log('Новое соединение:', socket.id); // Логируем новое соединение

    // Обработка события отключения клиента
    socket.on('disconnect', () => {
        console.log('Соединение закрыто:', socket.id); // Логируем закрытие соединения
    });
});

// Запуск сервера
const port = 3001; // Порт, на котором будет работать сервер
server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`); // Логируем запуск сервера
});