// Подключение dotenv для безопасности BOT_API и MONGO_DB
import 'dotenv/config.js'
// Подключение grammyJS - сама библеотека
import { Bot, InlineKeyboard, session, InputMediaBuilder, InputFile } from 'grammy'
// Плагин grammyJS для редактирования сообщения бота
import { hydrate } from '@grammyjs/hydrate'



// Создание бота
const bot = new Bot(process.env.BOT_API_KEY)
// Использование редактирования сообщения
bot.use(hydrate())

// Хранилище
function initial() {
    return { prizes: [] };
  }
bot.use(session({ initial }));

// Старт
bot.command('start', async (ctx) => {
    await ctx.react('❤‍🔥')
    const match = ctx.match.split('_');
    
        if (match[0] === "item") {
            const keyb = new InlineKeyboard()
            const m = match[1]
            if (m === 'cats') {
                keyb.text('Посмотреть', 'open_cats')
            } else if (m === 'chehol') {
                keyb.text('Посмотреть', 'open_chehol')
            } else if (m === 'disk') {
                keyb.text('Посмотреть', 'open_disk')
            } else if (m === 'heart') {
                keyb.text('Посмотреть', 'open_heart')
            } else if (m === 'klukva') {
                keyb.text('Посмотреть', 'open_klukva')
            } else if (m === 'kofta') {
                keyb.text('Посмотреть', 'open_kofta')
            } else if (m === 'kinder') {
                keyb.text('Посмотреть', 'open_kinder')
            }
            await ctx.replyWithPhoto(new InputFile("images/close.png"), {
                reply_markup: keyb,
                parse_mode: 'HTML',
                caption: '<b>Любимая, не нажимай кнопку, пока не распакуешь</b>\n\n👇👇👇'
            })
        } else {
            await ctx.replyWithPhoto(new InputFile("images/qr.png"), {
                parse_mode: 'HTML',
                caption: '<b>Любовь, отсканируй qr с вещицы, которую хочешь распаковать</b>'
            })
        }
    
    await startButton(ctx)
})




bot.callbackQuery('open_cats', async (ctx) => {
    let isSession = ctx.session.prizes.findIndex((item) => item === "cats");
    if (isSession === -1) {
        ctx.session.prizes.push('cats')
    } else {
        await ctx.reply('уже открывала 💋')
    }
    const newMedia = InputMediaBuilder.photo(
        new InputFile(`images/cats.png`), {
            caption: `<b>Арчи и осик!</b>\n\nИскал что же мне закинуть в посылочку. Вспомнил, что у нас существуют котики;) Нашел мастерицу, которая сделает мне их (я никогда это не умел, а начинать было уже поздно). Наша встреча постоянно переносилась... Заказал 2 декабря, забрал только 11-ого... Надеюсь, стоят того!)\n\nСделал парные, чтоб и у тебя были, и у меня`,
            parse_mode: 'HTML',
        }
    );
    const keyAll = new InlineKeyboard()
    if(ctx.session.prizes.length === 7) {
        keyAll.text('Ты всё распаковала! Нажми!', 'open_all')
    } else {
        keyAll.text(`${ctx.session.prizes.length}/7`, 'open_none')
    }
    await ctx.editMessageMedia(newMedia, {
        reply_markup: keyAll
    });
    ctx.answerCallbackQuery()
})


bot.callbackQuery('open_chehol', async (ctx) => {
    let isSession = ctx.session.prizes.findIndex((item) => item === "chehol");
    if (isSession === -1) {
        ctx.session.prizes.push('chehol')
    } else {
        await ctx.reply('уже открывала 💋')
    }
    const newMedia = InputMediaBuilder.photo(
        new InputFile(`images/chehol.png`), {
            caption: `<b>Буквально: а почему бы и нет</b>\n\nЯ не знаю, это просто чехол пхпхпх.\nПросто позволяй себе быть собой.`,
            parse_mode: 'HTML',
        }
    );
    const keyAll = new InlineKeyboard()
    if(ctx.session.prizes.length === 7) {
        keyAll.text('Ты всё распаковала! Нажми!', 'open_all')
    } else {
        keyAll.text(`${ctx.session.prizes.length}/7`, 'open_none')
    }
    await ctx.editMessageMedia(newMedia, {
        reply_markup: keyAll
    });
    ctx.answerCallbackQuery()
})

bot.callbackQuery('open_disk', async (ctx) => {
    let isSession = ctx.session.prizes.findIndex((item) => item === "disk");
    if (isSession === -1) {
        ctx.session.prizes.push('disk')
    } else {
        await ctx.reply('уже открывала 💋')
    }
    const newMedia = InputMediaBuilder.photo(
        new InputFile(`images/disk.png`), {
            caption: `<b>Еще один диск для твоего плеера</b>\n\nБрал у женщины в доме, с двумя огромными рыжими котами, и таким же рыжим мужем ххвхвхв. Этот альбом глюкозы, зимой, поможет справиться с хандрой и грустью.\n\n<a href="durdusii.ru">Тот самый туториал, если забыла)</a>`,
            parse_mode: 'HTML',
        }
    );
    const keyAll = new InlineKeyboard()
    if(ctx.session.prizes.length === 7) {
        keyAll.text('Ты всё распаковала! Нажми!', 'open_all')
    } else {
        keyAll.text(`${ctx.session.prizes.length}/7`, 'open_none')
    }
    await ctx.editMessageMedia(newMedia, {
        reply_markup: keyAll
    });
    ctx.answerCallbackQuery()
})

bot.callbackQuery('open_heart', async (ctx) => {
    let isSession = ctx.session.prizes.findIndex((item) => item === "heart");
    if (isSession === -1) {
        ctx.session.prizes.push('heart')
    } else {
        await ctx.reply('уже открывала 💋')
    }
    const newMedia = InputMediaBuilder.photo(
        new InputFile(`images/heart.png`), {
            caption: `<b>Миленькая парная брошка</b>\n\nЯ надеюсь, они помогут нам чувствовать себя спокойнее. Знай, что вторая такая же будет и на мне.`,
            parse_mode: 'HTML',
        }
    );
    const keyAll = new InlineKeyboard()
    if(ctx.session.prizes.length === 7) {
        keyAll.text('Ты всё распаковала! Нажми!', 'open_all')
    } else {
        keyAll.text(`${ctx.session.prizes.length}/7`, 'open_none')
    }
    await ctx.editMessageMedia(newMedia, {
        reply_markup: keyAll
    });
    ctx.answerCallbackQuery()
})

bot.callbackQuery('open_klukva', async (ctx) => {
    let isSession = ctx.session.prizes.findIndex((item) => item === "klukva");
    if (isSession === -1) {
        ctx.session.prizes.push('klukva')
    } else {
        await ctx.reply('уже открывала 💋')
    }
    const newMedia = InputMediaBuilder.photo(
        new InputFile(`images/klukva.png`), {
            caption: `<b>Вкуснейшая клюква</b>\n\nПомню как рассказывал тебе давненько о такой вкусняшке. Ходил, бродил по всему городу, оказывается, что продается только у нас в фирменных магазинах "матö". Стоит конских денег. Решил поделиться;)\nНадеюсь, вкусненько! (если нет, отдай бабушке, заценит)))`,
            parse_mode: 'HTML',
        }
    );
    const keyAll = new InlineKeyboard()
    if(ctx.session.prizes.length === 7) {
        keyAll.text('Ты всё распаковала! Нажми!', 'open_all')
    } else {
        keyAll.text(`${ctx.session.prizes.length}/7`, 'open_none')
    }
    await ctx.editMessageMedia(newMedia, {
        reply_markup: keyAll
    });
    ctx.answerCallbackQuery()
})

bot.callbackQuery('open_kofta', async (ctx) => {
    let isSession = ctx.session.prizes.findIndex((item) => item === "kofta");
    if (isSession === -1) {
        ctx.session.prizes.push('kofta')
    } else {
        await ctx.reply('уже открывала 💋')
    }
    const newMedia = InputMediaBuilder.photo(
        new InputFile(`images/kofta.png`), {
            caption: `<b>Я рядом</b>\n\nЭта кофточка наверняка будет тебя греть этой зимой! Проверено.\n\nПеред отправкой улита тонной слез и усыпана тысячами поцелуев`,
            parse_mode: 'HTML',
        }
    );
    const keyAll = new InlineKeyboard()
    if(ctx.session.prizes.length === 7) {
        keyAll.text('Ты всё распаковала! Нажми!', 'open_all')
    } else {
        keyAll.text(`${ctx.session.prizes.length}/7`, 'open_none')
    }
    await ctx.editMessageMedia(newMedia, {
        reply_markup: keyAll
    });
    ctx.answerCallbackQuery()
})

bot.callbackQuery('open_kinder', async (ctx) => {
    let isSession = ctx.session.prizes.findIndex((item) => item === "kinder");
    if (isSession === -1) {
        ctx.session.prizes.push('kinder')
    } else {
        await ctx.reply('уже открывала 💋')
    }
    const newMedia = InputMediaBuilder.photo(
        new InputFile(`images/kinder.png`), {
            caption: `<b>МАМА ПОПРОСИЛА АХАХХА</b>\n\nКогда написал маме, что собираюсь отправлять посылочку тебе, она попросила передать тебе от нее большую шоколадку. В общем, большой не нашел, дарю три таких;)`,
            parse_mode: 'HTML',
        }
    );
    const keyAll = new InlineKeyboard()
    if(ctx.session.prizes.length === 7) {
        keyAll.text('Ты всё распаковала! Нажми!', 'open_all')
    } else {
        keyAll.text(`${ctx.session.prizes.length}/7`, 'open_none')
    }
    await ctx.editMessageMedia(newMedia, {
        reply_markup: keyAll
    });
    ctx.answerCallbackQuery()
})

bot.callbackQuery('open_all', async (ctx) => {
    const newMedia = InputMediaBuilder.photo(
        new InputFile(`images/love.png`), {
            caption: `<b>я тебя люблю</b>\n\nя безумно счаслив быть с тобой, лер. ты моя звездочка, лучик тепла для моего сердца.\nсколько раз я думал: а что бы было, если я тебе тогда не написал...\nно твоя, любимая мной, улыбка, всегда все плохие мысли перекрывает.\nты правда для меня самая лучшая, мне никто не нужен,клянусь\nа еще, запомни, ради тебя я готов на всё\n\nспасибо, что ты со мной, спасибо...`,
            parse_mode: 'HTML',
        }
    );
    await ctx.editMessageMedia(newMedia);
})

bot.callbackQuery('open_none', async (ctx) => {
    ctx.answerCallbackQuery(`Открыто: ${ctx.session.prizes.length}/7`)
})

// Работа бота
bot.catch((err) => {
    const ctx = err.ctx
    console.log(`Error while handling update ${ctx.update.update_id}`)
    const e = err.error
})

bot.start()