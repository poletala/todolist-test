const db = require('../database/db');

// Функция для получения задач пользователя по его ID
const getTasksByUserId = async (userId) => {
    try {
        // Проверяем, является ли пользователь руководителем (имеет подчиненных)
        const isManager = await new Promise((resolve, reject) => {
            db.get(`
                SELECT COUNT(*) AS count 
                FROM users 
                WHERE manager_id = ?
            `, [userId], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row.count > 0); // Если есть подчиненные, пользователь — руководитель
                }
            });
        });

        let tasks;

        if (isManager) {
            // Руководитель: загружаем все задачи своих подчиненных и свои задачи
            tasks = await new Promise((resolve, reject) => {
                db.all(`
                    SELECT t.*, u.first_name, u.last_name 
                    FROM tasks t
                    JOIN users u ON t.assignee_id = u.id
                    WHERE t.assignee_id IN (
                        SELECT id FROM users WHERE manager_id = ?
                    ) OR t.assignee_id = ?
                `, [userId, userId], (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows); // Возвращаем задачи
                    }
                });
            });
        } else {
            // Подчиненный: загружаем только свои задачи
            tasks = await new Promise((resolve, reject) => {
                db.all(`
                    SELECT t.*, u.first_name, u.last_name 
                    FROM tasks t
                    JOIN users u ON t.assignee_id = u.id
                    WHERE t.assignee_id = ?
                `, [userId], (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows); // Возвращаем задачи
                    }
                });
            });
        }

        return tasks;
    } catch (err) {
        console.error('Ошибка в сервисе при загрузке задач:', err); // Логируем ошибку
        throw err; // Пробрасываем ошибку дальше
    }
};

// Функция для проверки, может ли пользователь назначить задачу другому пользователю
const canAssignTask = async (creator_id, assignee_id) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT manager_id FROM users WHERE id = ?', [assignee_id], (err, row) => {
            if (err) {
                reject(err); // Ошибка при выполнении запроса
            } else {
                // Проверяем, что assignee подчиняется creator или это тот же пользователь
                resolve(row && (row.manager_id === creator_id || creator_id === assignee_id));
            }
        });
    });
};

// Функция для создания новой задачи
const createTask = async (taskData) => {
    const { title, priority, due_date, status, creator_id, assignee_id } = taskData;

    const created_at = new Date().toISOString(); // Текущая дата для created_at
    const updated_at = created_at; // Текущая дата для updated_at

    const query = `
        INSERT INTO tasks (title, priority, due_date, status, creator_id, assignee_id, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [title, priority, due_date, status, creator_id, assignee_id, created_at, updated_at];

    return new Promise((resolve, reject) => {
        db.run(query, params, function (err) {
            if (err) {
                reject(err);
            } else {
                // Возвращаем созданную задачу
                const newTask = {
                    id: this.lastID,
                    title,
                    priority,
                    due_date,
                    status,
                    creator_id,
                    assignee_id,
                    created_at,
                    updated_at,
                };
                resolve(newTask);
            }
        });
    });
};

// Функция для обновления задачи
const updateTask = async (taskId, userId, taskData) => {
    const { title, priority, due_date, assignee_id, status } = taskData;
    const updated_at = new Date().toISOString(); // Текущая дата для updated_at

    return new Promise((resolve, reject) => {
        // Проверяем, может ли пользователь редактировать задачу
        db.get('SELECT creator_id, assignee_id, created_at FROM tasks WHERE id = ?', [taskId], (err, task) => {
            if (err) {
                console.error('Ошибка при поиске задачи:', err); // Логируем ошибку
                reject({ error: 'Ошибка при поиске задачи', details: err.message });
                return;
            }

            if (!task) {
                reject({ error: 'Задача не найдена', status: 404 });
                return;
            }

            // Если пользователь является создателем задачи, он может редактировать её
            if (task.creator_id === userId) {
                db.run(
                    `UPDATE tasks 
                     SET title = ?, priority = ?, due_date = ?, assignee_id = ?, status = ?, updated_at = ? 
                     WHERE id = ?`,
                    [title, priority, due_date, assignee_id, status, updated_at, taskId],
                    function (err) {
                        if (err) {
                            console.error('Ошибка при обновлении задачи:', err); // Логируем ошибку
                            reject({ error: 'Ошибка при обновлении задачи', details: err.message });
                            return;
                        }

                        // Возвращаем обновленную задачу
                        const updatedTask = {
                            id: taskId,
                            title,
                            priority,
                            due_date,
                            status,
                            creator_id: userId,
                            assignee_id,
                            created_at: task.created_at, // Сохраняем created_at
                            updated_at,
                        };

                        resolve(updatedTask);
                    }
                );
            } else {
                // Если пользователь не является создателем, он может редактировать только статус
                db.run(
                    `UPDATE tasks 
                     SET status = ?, updated_at = ? 
                     WHERE id = ?`,
                    [status, updated_at, taskId],
                    function (err) {
                        if (err) {
                            console.error('Ошибка при обновлении задачи:', err); // Логируем ошибку
                            reject({ error: 'Ошибка при обновлении задачи', details: err.message });
                            return;
                        }

                        // Возвращаем обновленную задачу
                        const updatedTask = {
                            id: taskId,
                            title: task.title,
                            priority: task.priority,
                            due_date: task.due_date,
                            status,
                            creator_id: task.creator_id,
                            assignee_id: task.assignee_id,
                            created_at: task.created_at, // Сохраняем created_at
                            updated_at,
                        };

                        resolve(updatedTask);
                    }
                );
            }
        });
    });
};

module.exports = {
    getTasksByUserId,
    canAssignTask,
    createTask,
    updateTask,
};