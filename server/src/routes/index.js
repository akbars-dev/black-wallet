const {Router} = require('express');
const userRouter = require('./user-routes');
const errorMiddleware = require('../middlewares/error-middleware');

const router = Router();


router.use('/user', userRouter)
router.use(errorMiddleware)

module.exports = router;