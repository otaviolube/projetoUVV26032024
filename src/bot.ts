import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";

config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;

  if(match){
    const resp = match[1];
    bot.sendMessage(chatId, resp);
  }

});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Received your message");
});
