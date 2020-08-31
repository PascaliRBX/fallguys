var express = require("express");
var app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const config = require("./storages/config.json");
const TOKEN = process.env.TOKEN;
const client = bot;
const pings = ["https://discord.gg/"]
const prefix = "fg!"
bot.on("message", message => {
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();

  // Command Handler
  try {
    delete require.cache[require.resolve(`./cmds/${cmd}.js`)];

    let commandFile = require(`./cmds/${cmd}.js`);

    commandFile.run(bot, message, args);
  } catch (e) {
    console.log(e.stack);
  }
});


bot.on("ready", () => {
   var neustart = bot.channels.get("747469872266608744");
  var emb = new Discord.RichEmbed()
  emb.setTitle("Bot wurde neu gestartet!")
  emb.setTimestamp()
  neustart.send(emb)
  console.log(`Glitch ---> ${client.user.tag} = ready`);
  console.log("https://thoracic-band-zone.glitch.me");
  bot.user.setStatus("online");
  bot.user.setPresence({
    game: {
      name: "Ich liebe Fall Guys",
      type: "PLAYING"
    }
  });
});

bot.login(TOKEN);
