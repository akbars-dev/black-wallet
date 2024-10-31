const ApiError = require("../errors/api-error");
const taskModel = require("../models/task-model");

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
        const tasks = await taskModel.find();
        return res.json({ msg: "Barcha tasklar", data: tasks })
    } catch (error) {
        next(error)
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


module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}