const Telegraf = require('telegraf')

const bot = new Telegraf('601100535:AAHUTjnmy-HaWowm5S9ygrPRCB7tUYa6E2E')
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