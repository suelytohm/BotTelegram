const { Telegraf } = require('telegraf')

const bot = new Telegraf("5567240515:AAGixbtzYKWg7G1GPt-UWmUqrtRSGO56tkw")

bot.telegram.sendMessage(1433560169, "Olá")

/*
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
*/
bot.launch()