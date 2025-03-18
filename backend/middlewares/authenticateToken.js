const jwt = require('jsonwebtoken'); // Импорт библиотеки для работы с JWT
const SECRET_KEY = 'your-secret-key'; // Секретный ключ для подписи и проверки токенов

// Middleware для аутентификации токена
const authenticateToken = (req, res, next) => {
    // Получаем токен из заголовка Authorization
    const token = req.headers.authorization?.split(' ')[1]; // Формат: "Bearer <token>"

    // Проверяем, есть ли токен
    if (!token) {
        return res.status(401).json({ error: 'Токен отсутствует' }); // Возвращаем ошибку, если токен не предоставлен
    }

    // Проверяем валидность токена
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Недействительный токен' }); // Возвращаем ошибку, если токен недействителен
        }

        // Если токен валиден, сохраняем декодированные данные в объекте запроса
        req.user = decoded;

        // Передаем управление следующему middleware или обработчику
        next();
    });
};

module.exports = authenticateToken;