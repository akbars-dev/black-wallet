const {Router} = require('express');
const { createTask, updateTask, deleteTask, getTask, getTasks, passTask } = require('../controller/task.controller');

const taskRouter = Router();


taskRouter.post('/create/', createTask);
taskRouter.put('/update/:id', updateTask);
taskRouter.delete('/delete/:id', deleteTask);
taskRouter.get('/all/:id', getTasks);
taskRouter.get('/get/:id', getTask);
taskRouter.put('/pass/:id', passTask)


module.exports = taskRouter;    
