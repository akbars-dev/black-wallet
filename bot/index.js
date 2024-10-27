import { config } from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'

config()
const bot = new TelegramBot(process.env.TOKEN, { polling: true })
const webAppUrl = process.env.WEPAPP_URL

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id

    await bot.sendMessage(chatId, 'Assalomu Aleykum, "Open App" tugmasini bosing', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Open App', web_app: { url: webAppUrl } }]
            ]
        }
    })
})

console.log('Bot is running...')