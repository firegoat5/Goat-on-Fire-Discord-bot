const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTA5Nzg5MDE2MDc4NDE3OTMw.DsTD3Q.gHxnf9g54oF65Gfo2AqyiDjCfVo'

bot.on('message', function(message){
    if(message.content == 'Check in')
    {
        message.reply('welcome back :D')
    }
});
bot.login(TOKEN);
bot.on('message', function(message){
    if (message.content == !help)
    {
        message.reply('At the moment i do only have 1 command... Write (Check in)')
    }
})
Client.login(process.env.BOT_TOKEN);
