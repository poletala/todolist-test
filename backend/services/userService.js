const db = require('../database/db');

// Функция для получения списка ответственных (себя и своих подчиненных)
const getResponsibles = async (userId) => {
    // Запрос для получения данных о себе и своих подчиненных
    const query = `
        SELECT id, first_name, last_name 
        FROM users 
        WHERE id = ? OR manager_id = ?
    `;
    const params = [userId, userId]; // Параметры: ID пользователя и его подчиненные

    // Выполняем запрос к базе данных
    const rows = await new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if (err) {
                console.error('Ошибка при выполнении запроса к базе данных:', err); // Логируем ошибку
                reject(err);
            } else {
                resolve(rows); // Возвращаем результат запроса
            }
        });
    });

    // Форматируем данные для ответа
    const responsibles = rows.map((user) => ({
        id: user.id, // ID пользователя
        name: `${user.last_name} ${user.first_name[0]}.`,
    }));

    return responsibles; // Возвращаем отформатированный список ответственных
};

module.exports = {
    getResponsibles,
};