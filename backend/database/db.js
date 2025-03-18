const sqlite3 = require('sqlite3').verbose(); // Импорт библиотеки SQLite с подробным выводом ошибок

// Создание подключения к базе данных SQLite
const db = new sqlite3.Database('./database.sqlite'); // Указываем путь к файлу базы данных

module.exports = db;