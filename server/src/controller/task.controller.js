const ApiError = require("../errors/api-error");
const taskModel = require("../models/task-model");
const userModel = require("../models/user-model");

async function createTask(req, res, next) {
    try {
        const { name, link, cost, description } = req.body;

        const task = await taskModel.create({ name, link, cost, description });
        return res.json({ msg: "Task yaratildi", data: task });
    } catch (error) {
        next(error)
    }
}


async function getTasks(req, res, next) {
    try {
        const user = await userModel.findOne({ telegramId: req.params.id }).populate('tasks.taskId');
        if (!user) throw ApiError.BadRequest('User not found');

        const allTasks = await taskModel.find({});

        const userTasksMap = new Map(user.tasks.map(task => [task.taskId._id.toString(), task]));

        const passedTasks = [];
        const notPassedTasks = [];

        console.log(userTasksMap);
        

        allTasks.forEach(task => {
            const userTask = userTasksMap.get(task._id.toString());

            if (userTask && userTask.status === 'passed') {
                passedTasks.push(task);
            } else {
                notPassedTasks.push(task);
            }
        });

        return res.json({ msg: "All tasks", data: { passedTasks, notPassedTasks } });
    } catch (error) {
        console.error('Error retrieving tasks:', error);
        next(error);
    }
}



async function getTask(req, res, next) {
    try {
        const task = await taskModel.findById(req.params.id);
        if (!task) throw ApiError.BadRequest("Task topilmadi");

        return res.json({ msg: "Task topildi", data: task })
    } catch (error) {
        next(error)
    }
}


async function updateTask(req, res, next) {
    try {
        const task = await taskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) throw ApiError.BadRequest("Task topilmadi");

        return res.json({ msg: "Task yangilandi", data: task })
    } catch (error) {
        next(error)
    }
}


async function deleteTask(req, res, next) {
    try {
        const task = await taskModel.findByIdAndDelete(req.params.id);
        if (!task) throw ApiError.BadRequest("Task topilmadi");

        return res.json({ msg: "Task o'chirdildi", data: true })
    } catch (error) {
        next(error)
    }
}

async function passTask(req, res, next) {
    try {
        const user = await userModel.findOne({ telegramId: req.body.telegramId })
        const task = await taskModel.findById(req.params.id)

        if (!user || !task) throw ApiError.BadRequest("Topilmadi")
        user.tasks.push({ taskId: task._id, status: 'passed', completedAt: new Date() });
        user.balance += +task.cost
        await user.save()

        return res.json({ msg: "Task bajarildi", data: true })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
    passTask
}