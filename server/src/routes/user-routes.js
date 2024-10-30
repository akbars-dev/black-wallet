const {Router} = require('express');
const { checkUser, registerUser, getReferalls } = require('../controller/user.controller');

const userRouter = Router();


userRouter.get('/check/:telegramId', checkUser);
userRouter.get('/referalls/:referallId', getReferalls);
userRouter.post('/register', registerUser);


module.exports = userRouter;