const taskService = require('../services/taskService');

const getTasks = async (req, res) => {
    try {
        const { id } = req.user; // Получаем ID пользователя из запроса
        const tasks = await taskService.getTasksByUserId(id); // Запрашиваем задачи по ID пользователя
        res.json(tasks);
    } catch (err) {
        console.error('Ошибка при загрузке задач:', err); // Логируем ошибку
        res.status(500).json({ error: 'Ошибка при загрузке задач' });
    }
};

// Функция для создания новой задачи
const createTask = async (req, res, io) => {
    try {
        // Получаем данные пользователя и задачи из запроса
        const { id: creator_id, manager_id: userRole } = req.user;
        const { title, priority, due_date, assignee_id, status } = req.body;

        // Проверяем, что все обязательные поля заполнены
        if (!title || !priority || !due_date || !assignee_id || !status) {
            return res.status(400).json({ error: 'Все поля обязательны' });
        }

        // Проверяем, может ли пользователь назначить задачу выбранному исполнителю
        if (userRole !== null) {
            const canAssign = await taskService.canAssignTask(creator_id, assignee_id);
            if (!canAssign) {
                return res.status(403).json({ error: 'Нельзя назначить задачу этому пользователю' });
            }
        }

        // Создаем новую задачу
        const newTask = await taskService.createTask({
            title,
            priority,
            due_date,
            status,
            creator_id,
            assignee_id,
        });

        // Отправляем событие через WebSocket о создании новой задачи
        io.emit('newTask', newTask);

        res.status(201).json(newTask);
    } catch (err) {
        console.error('Ошибка при создании задачи:', err); // Логируем ошибку
        res.status(500).json({ error: 'Ошибка при создании задачи', details: err.message });
    }
};

// Функция для обновления задачи
const updateTask = async (req, res, io) => {
    try {
        // Получаем данные пользователя и задачи из запроса
        const { id: userId, manager_id: userRole } = req.user;
        const taskId = parseInt(req.params.id, 10); // Получаем ID задачи из параметров запроса
        const { title, priority, due_date, assignee_id, status } = req.body;

        // Проверяем, что все обязательные поля заполнены
        if (!title || !priority || !due_date || !assignee_id || !status) {
            return res.status(400).json({ error: 'Все поля обязательны' });
        }

        // Обновляем задачу
        const updatedTask = await taskService.updateTask(taskId, userId, {
            title,
            priority,
            due_date,
            assignee_id,
            status,
        });

        // Отправляем событие через WebSocket об обновлении задачи
        io.emit('taskUpdated', updatedTask);

        // Возвращаем обновленную задачу в ответе
        res.json(updatedTask);
    } catch (err) {
        console.error('Ошибка при обновлении задачи:', err); // Логируем ошибку
        res.status(500).json({ error: 'Ошибка при обновлении задачи', details: err.message });
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
};