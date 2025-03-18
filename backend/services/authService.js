const bcrypt = require('bcryptjs'); // Импорт библиотеки для хэширования паролей
const jwt = require('jsonwebtoken'); // Импорт библиотеки для работы с JWT
const db = require('../database/db')
const SECRET_KEY = 'your-secret-key'; // Секретный ключ для подписи JWT

const login = async (login, password) => {
    return new Promise((resolve, reject) => {
        // Поиск пользователя в базе данных по логину
        db.get('SELECT * FROM users WHERE login = ?', [login], async (err, user) => {
            if (err || !user) {
                reject('Пользователя с таким логином не существует'); // Ошибка, если пользователь не найден
                return;
            }

            // Проверка валидности пароля
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                reject('Неверный пароль');
                return;
            }

            // Проверка, есть ли у пользователя подчинённые
            const hasSubordinates = await new Promise((resolve, reject) => {
                db.get(`
                    SELECT COUNT(*) AS count 
                    FROM users 
                    WHERE manager_id = ?
                `, [user.id], (err, row) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(row.count > 0); // Возвращаем true, если есть подчинённые
                    }
                });
            });

            // Создание JWT токена
            const token = jwt.sign(
                { 
                    id: user.id, 
                    login: user.login, 
                    first_name: user.first_name, 
                    last_name: user.last_name, 
                    manager_id: user.manager_id,
                    hasSubordinates, // Добавляем информацию о подчинённых
                },
                SECRET_KEY, // Секретный ключ
                { expiresIn: '5h' } // Время жизни токена
            );

            // Возвращаем токен и данные пользователя
            resolve({ 
                token, 
                user: { 
                    id: user.id, 
                    first_name: user.first_name, 
                    last_name: user.last_name, 
                    manager_id: user.manager_id,
                    hasSubordinates,
                } 
            });
        });
    });
};

module.exports = {
    login,
};