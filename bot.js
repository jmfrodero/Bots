const token = process.env.TOKEN;

const Bot = require('node-telegram-bot-api');
let bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

bot.on('message', (msg) => {
  if (msg.search("quedar") != -1) {
    bot.sendMessage(msg.chat.id,'Gon no puede quedar,sry').then(() => {
      });
  }
    // reply sent!

});

module.exports = bot;
