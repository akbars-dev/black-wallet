// configuration of dotenv
require('dotenv').config();

// connect to database
require('./utils/database')();


const { session } = require("telegraf");
const bot = require("./core/bot");
const mainButtons = require('./keyboards/main-buttons');
const { check, create } = require('./services/user-services');


bot.use(session());

bot.start(async ctx => {
    const exists = await check(ctx.from.id);
    const photos = await ctx.telegram.getUserProfilePhotos(ctx.from.id)

    if(exists) {
        return await ctx.replyWithHTML(
            `Hey there! 🚀 Welcome to <b>Black Wallet</b> – your ultimate gateway to the world of crypto trading! 📲 With top coins and tokens at your fingertips, it’s never been easier to dive into the market.\n\nExciting news! We're launching our Telegram mini-app 🌐, where you can start farming points today! Every point brings you closer to exclusive perks and bonuses waiting just around the corner! 🌠\n\nGot friends? Bring 'em along – the more, the richer! 🌱\n\nAt <b>Black Wallet</b>, growth is limitless, and every trade is a step toward boundless possibilities! 💸`
            , mainButtons
        ) 
    } else {
        await create(ctx.from.id, photos.photos[0][0].file_id, ctx.from.first_name)
        
        return await ctx.replyWithHTML(
            `Hey there! 🚀 Welcome to <b>Black Wallet</b> – your ultimate gateway to the world of crypto trading! 📲 With top coins and tokens at your fingertips, it’s never been easier to dive into the market.\n\nExciting news! We're launching our Telegram mini-app 🌐, where you can start farming points today! Every point brings you closer to exclusive perks and bonuses waiting just around the corner! 🌠\n\nGot friends? Bring 'em along – the more, the richer! 🌱\n\nAt <b>Black Wallet</b>, growth is limitless, and every trade is a step toward boundless possibilities! 💸`
            , mainButtons
        )
    }

    
})


bot.launch() 
console.log('> Bot started')