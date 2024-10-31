const countdownModel = require("../models/countdown-model")

module.exports = async function getCountdownTime () {
    const countdown = await countdownModel.find({});
    
    return countdown[0]?.date;
}