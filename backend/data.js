const TASK_STATUS = {
    TO_DO: 'к выполнению',
    IN_PROGRESS: 'выполняется',
    DONE: 'выполнена',
    CANCELLED: 'отменена',
};

const TASK_PRIORITY = {
    HIGH: 'высокий',
    MEDIUM: 'средний',
    LOW: 'низкий',
};
const users = [
    { first_name: 'Антон', last_name: 'Щукин', middle_name: 'Андреевич', login: 'anton', password: 'password123', manager_id: null },
    { first_name: 'Кристина', last_name: 'Батурина', middle_name: 'Александровна', login: 'kristina', password: 'password123', manager_id: 1 },
    { first_name: 'Константин', last_name: 'Мамонов', middle_name: 'Алексеевич', login: 'kosta', password: 'password123', manager_id: 1 },
    { first_name: 'Антон', last_name: 'Лукьянов', middle_name: 'Игоревич', login: 'antonl', password: 'password123', manager_id: 3 },
    { first_name: 'Степан', last_name: 'Астахов', middle_name: 'Сергеевич', login: 'stepan', password: 'password123', manager_id: 3 },
    { first_name: 'Юлия', last_name: 'Агафонова', middle_name: 'Сергеевна', login: 'yulia', password: 'password123', manager_id: 2 }
];
const tasks = [
    { id: 1, title: 'Разработать API', due_date: '2025-12-31', priority: TASK_PRIORITY.HIGH, status: TASK_STATUS.TO_DO, creator_id: 1, assignee_id: 3 },
    { id: 2, title: 'Написать документацию', due_date: '2025-11-15', priority: TASK_PRIORITY.MEDIUM, status: TASK_STATUS.IN_PROGRESS, creator_id: 3, assignee_id: 4 },
    { id: 3, title: 'Рефакторить код', due_date: '2024-10-30', priority: TASK_PRIORITY.LOW, status: TASK_STATUS.DONE, creator_id: 3, assignee_id: 5 },
    { id: 4, title: 'Оптимизировать базу данных', due_date: '2025-11-10', priority: TASK_PRIORITY.HIGH, status: TASK_STATUS.CANCELLED, creator_id: 3, assignee_id: 4 },
    { id: 5, title: 'Подготовить презентацию', due_date: '2025-11-20', priority: TASK_PRIORITY.MEDIUM, status: TASK_STATUS.TO_DO, creator_id: 2, assignee_id: 6 },
    { id: 5, title: 'Нанять Алену Полетаеву', due_date: '2025-04-01', priority: TASK_PRIORITY.HIGH, status: TASK_STATUS.IN_PROGRESS, creator_id: 1, assignee_id: 2 }
];

module.exports = { 
    users, 
    tasks 
};