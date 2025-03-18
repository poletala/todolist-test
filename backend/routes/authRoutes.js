const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router(); // Создание роутера

// Маршрут для входа пользователя (POST /login)
router.post('/login', authController.login); // Обработка запроса на вход

module.exports = router;