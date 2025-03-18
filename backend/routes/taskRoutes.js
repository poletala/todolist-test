const express = require('express');
const taskController = require('../controllers/taskController');
const  authenticateToken  = require('../middlewares/authenticateToken');

const taskRoutes = (io) => {
    const router = express.Router();

    // Получение задач
    router.get('/tasks', authenticateToken, taskController.getTasks);

    // Создание задачи
    router.post('/tasks', authenticateToken, (req, res) => {
        taskController.createTask(req, res, io); 
    });

    // Обновление задачи
    router.put('/tasks/:id', authenticateToken, (req, res) => {
        taskController.updateTask(req, res, io); 
    });

    return router;
};

module.exports = taskRoutes;