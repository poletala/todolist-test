const express = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

// Роут для получения списка ответственных
router.get('/users/responsibles', authenticateToken, userController.getResponsibles);

module.exports = router;