const { Markup } = require("telegraf");


module.exports = Markup.inlineKeyboard([
    [Markup.button.webApp('Launch Black Wallet', process.env.WEPAPP_URL)],
    [Markup.button.url('Launch Black Wallet', 'https://t.me/akbarshoxs_life')]
])