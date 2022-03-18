const { Client, Intents } = require('discord.js')

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on("messageCreate", (message) => {
    if(message.content.includes('lean')) {
        if(!message.author.bot) {
            message.reply('I LOVE LEAN!!')
        }
    } 
})

client.on("messageCreate", (message) => {
    if(message.content.includes('Lean')) {
        if(!message.author.bot) {
            message.reply('I LOVE LEAN!!')
        }
    } 
})

client.on("messageCreate", (message) => {
    if(message.content.includes('LEAN')) {
        if(!message.author.bot) {
            message.reply('I LOVE LEAN!!')
        }
    } 
})

client.on('ready', () => {
    console.log('I LOVE LEAN!!!')
})

client.login('OTQyOTA0NzIwNDIxNDQ1NjYz.YgrScw.xIzBZZP9PJ4DXA5TFQDqzs2L1Y8')