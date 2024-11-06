const userModel = require("../models/user-model");



async function registerUser(req, res, next) {
    try {
        const { firstName, telegramId, profileImage, referallId } = req.body;

        if (referallId) {
            const referall = await userModel.findOne({ telegramId: referallId });
            if (!referall) return res.json({ msg: "user topilmadi", data: [] });

            referall.balance = + 100
            await referall.save();
            const user = await userModel.create({ firstName, telegramId, profileImage, balance: 0, referallId: referallId });
            return res.json({ msg: "User yaratildi", data: user })
        }

        const user = await userModel.create({ firstName, telegramId, profileImage, balance: 0 });
        return res.json({ msg: "User yaratildi", data: user })
    } catch (error) {
        next(error)
    }
}

async function checkUser(req, res, next) {
    try {
        const { telegramId } = req.params;

        const user = await userModel.findOne({ telegramId: telegramId });
        if (!user) return res.json({ msg: "User topilmadi", data: false })
        return res.json({ msg: "User topildi", data: user })
    } catch (error) {
        next(error)
    }
}

async function getReferalls(req, res, next) {
    try {
        const { referallId } = req.params
        const friends = await userModel.find({ referallId: referallId });

        return res.json({ msg: "Barcha referallar", data: friends })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    registerUser,
    checkUser,
    getReferalls
}