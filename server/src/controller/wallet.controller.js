const ApiError = require("../errors/api-error");
const walletModel = require("../models/wallet-model");


async function createWallet (req, res, next) {
    try {
        const { userId, walletUrl } = req.body;
        
        const wallet = await walletModel.create({ user: userId, walletAddress: walletUrl })
        
        return res.json({ msg: "Wallet yaratilid", data: wallet })
    } catch (error) {
        next(error)
    }
}


async function getWallet (req, res, next) {
    try {
        const wallet = await walletModel.findById(req.params.id)
        if (!wallet) return res.json({ msg: "Wallet topilmadi", data: false })

        return res.json({msg: "Wallet topilmadi", data: wallet})
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createWallet,
    getWallet
}