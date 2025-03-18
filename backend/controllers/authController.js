const authService = require('../services/authService');

const login = async (req, res) => {
    // Получаем логин и пароль из тела запроса
    const { login, password } = req.body;

    // Проверяем, что логин и пароль были предоставлены
    if (!login || !password) {
        return res.status(400).json({ error: 'Логин и пароль обязательны' });
    }

    try {
        // Вызываем сервис для выполнения логина
        const result = await authService.login(login, password);
        
        // Возвращаем успешный результат клиенту
        res.json(result);
    } catch (error) {
        // Логируем ошибку, если что-то пошло не так
        console.error('Ошибка при входе:', error);
        
        // Возвращаем ошибку клиенту
        res.status(400).json({ error });
    }
};

module.exports = {
    login,
};