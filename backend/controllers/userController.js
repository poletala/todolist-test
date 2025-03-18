const userService = require('../services/userService');

// Функция для получения списка ответственных
const getResponsibles = async (req, res) => {
    try {
        // Получаем ID пользователя и его роль (manager_id) из данных, сохранённых в токене
        const { id, manager_id } = req.user;

        // Запрашиваем список ответственных с помощью сервиса
        const responsibles = await userService.getResponsibles(id, manager_id);

        res.json(responsibles);
    } catch (err) {
        // Логируем ошибку, если что-то пошло не так
        console.error('Ошибка при загрузке ответственных:', err);

        res.status(500).json({ 
            error: 'Ошибка при загрузке ответственных',
            details: err.message // Добавляем сообщение об ошибке для отладки
        });
    }
};

module.exports = {
    getResponsibles,
};