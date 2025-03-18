const sqlite3 = require('sqlite3').verbose(); // Импорт SQLite с подробным выводом ошибок
const bcrypt = require('bcryptjs'); // Импорт библиотеки для хэширования паролей
const db = new sqlite3.Database('database.sqlite'); // Создание подключения к базе данных
const { users, tasks } = require('../data.js'); // Импорт тестовых данных пользователей и задач

// Обработчик события открытия базы данных
db.on('open', () => {
    console.log('open database');
});

// Обработчик ошибок базы данных
db.on('error', (error) => {
    console.error('Database error', error.message);
});

// Функция для хэширования паролей пользователей
async function hashPasswords(users) {
    const hashedUsers = await Promise.all(
        users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10); // Хэшируем пароль
            return { ...user, password: hashedPassword }; // Возвращаем пользователя с хэшированным паролем
        })
    );
    return hashedUsers; // Возвращаем массив пользователей с хэшированными паролями
}

// Функция для сохранения пользователей в базу данных
function saveUsersToDatabase(users) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            // Очистка таблицы users перед вставкой новых данных
            db.run('DELETE FROM users;', (err) => {
                if (err) {
                    console.error('Ошибка при очистке таблицы users:', err.message);
                    reject(err);
                } else {
                    console.log('Таблица users очищена');
                }
            });

            // Вставка пользователей в таблицу
            users.forEach((user) => {
                db.run(
                    'INSERT INTO users (first_name, last_name, middle_name, login, password, manager_id) VALUES (?, ?, ?, ?, ?, ?)',
                    [user.first_name, user.last_name, user.middle_name, user.login, user.password, user.manager_id],
                    function (err) {
                        if (err) {
                            console.error('Ошибка при сохранении пользователя:', err.message);
                            reject(err);
                        } else {
                            console.log(`Пользователь ${user.login} сохранен с ID: ${this.lastID}`);
                        }
                    }
                );
            });

            resolve();
        });
    });
}

db.serialize(() => {
    // Создание таблицы users, если она не существует
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            middle_name TEXT,
            login TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            manager_id INTEGER,
            FOREIGN KEY (manager_id) REFERENCES users(id)
        );
    `, (err) => {
        if (err) {
            console.error('Error creating users table:', err.message);
        } else {
            console.log('Users table created or already exists');
        }
    });

    // Создание таблицы tasks, если она не существует
    db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            due_date TEXT NOT NULL,
            created_at TEXT NOT NULL, 
            updated_at TEXT NOT NULL,
            priority TEXT NOT NULL,
            status TEXT NOT NULL,
            creator_id INTEGER NOT NULL,
            assignee_id INTEGER NOT NULL,
            FOREIGN KEY (creator_id) REFERENCES users(id),
            FOREIGN KEY (assignee_id) REFERENCES users(id)
        );
    `, (err) => {
        if (err) {
            console.error('Error creating tasks table:', err.message);
        } else {
            console.log('Tasks table created or already exists');
        }
    });

    // Вставка задач в таблицу tasks
    tasks.forEach((task) => {
        const created_at = new Date().toISOString(); // Текущая дата для created_at
        const updated_at = created_at; // Текущая дата для updated_at

        db.run(
            `INSERT INTO tasks (title, due_date, created_at, updated_at, priority, status, creator_id, assignee_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [task.title, task.due_date, created_at, updated_at, task.priority, task.status, task.creator_id, task.assignee_id],
            function (err) {
                if (err) {
                    console.error('Error inserting task:', err.message);
                } else {
                    console.log(`Task added with ID: ${this.lastID}`);
                }
            }
        );
    });

    // Хэширование паролей и сохранение пользователей в базу данных
    hashPasswords(users)
        .then((hashedUsers) => {
            return saveUsersToDatabase(hashedUsers); // Сохраняем пользователей с хэшированными паролями
        })
        .then(() => {
            console.log('Все пользователи сохранены');
        })
        .catch((err) => {
            console.error('Ошибка:', err); // Логируем ошибку, если что-то пошло не так
        })
        .finally(() => {
            // Закрытие соединения с базой данных
            db.close((err) => {
                if (err) {
                    console.error('Error closing database:', err.message);
                } else {
                    console.log('Database connection closed');
                }
            });
        });
});