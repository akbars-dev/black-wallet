const userModel = require("../models/user-model");


async function check(telegramId) {
    const user = await userModel.findOne({ telegramId: telegramId })

    if (!user) return false
    return true
}


async function create(telegramId, profileImage, firstName) {
    const user = await userModel.create({telegramId, profileImage, firstName})
    return user
}


module.exports = {
    check, 
    create
}