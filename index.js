const Telegraf = require('telegraf');

const API_TOKEN = process.env.API_TOKEN || '601100535:AAHUTjnmy-HaWowm5S9ygrPRCB7tUYa6E2E';
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'https://botnoquedar.herokuapp.com';

const bot = new Telegraf(API_TOKEN);
bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
bot.startWebhook(`/bot${API_TOKEN}`, null, PORT)


//bot.start((ctx) => ctx.reply('Welcome!'))
//bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('message', (ctx) => {
	message = message.toLowerCase();
	if(ctx.update.message.text.search('quedar'||'quedamos'||'queda'||'quedado')!=-1){
		ctx.reply('Gon no puede quedar,sry');
	}
	else if(ctx.update.message.text.search('no homo') != -1){
		ctx.reply(https://www.youtube.com/watch?v=F0yFyW7Ysps);

	}
	console.log(ctx);

})
//bot.hears('quedar', (ctx) => ctx.reply('Hey there'))
bot.launch()
