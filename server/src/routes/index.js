const {Router} = require('express');
const userRouter = require('./user-routes');
const errorMiddleware = require('../middlewares/error-middleware');
const taskRouter = require('./task-routes');
const walletRouter = require('./wallet-routes');

const router = Router();


router.use('/user', userRouter)
router.use('/task', taskRouter)
router.use('/wallet', walletRouter)
router.use(errorMiddleware)

module.exports = router;