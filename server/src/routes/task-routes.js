const {Router} = require('express');
const { createTask, updateTask, deleteTask, getTask, getTasks } = require('../controller/task.controller');

const taskRouter = Router();


taskRouter.post('/create/', createTask);
taskRouter.put('/update/:id', updateTask);
taskRouter.delete('/delete/:id', deleteTask);
taskRouter.get('/all/', getTasks);
taskRouter.get('/get/:id', getTask);


module.exports = taskRouter;    
