const {Router} = require('express');
const { createWallet, getWallet } = require('../controller/wallet.controller');

const walletRouter = Router();


walletRouter.get('/create', createWallet);
walletRouter.get('/get/:id', getWallet);


module.exports = walletRouter;    
