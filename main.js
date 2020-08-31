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
const prefix = config.prefix;
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
client.on("message", async message =>{

     const guild = bot.guilds.get("744487801013403761");
      var memberCount = guild.members.filter(member => !member.user.bot).size;  
      var memberCountChannel = bot.channels.get("744503100311601222");
      memberCountChannel.setName(`Member: ${memberCount}`);
     var botCount = guild.members.filter(member => member.user.bot).size;
      var botCountChannel = bot.channels.get("750017853725474881");
      botCountChannel.setName(`Bots: ${botCount}`);
       var allCount = guild.memberCount
      var allCountChannel = bot.channels.get("750017923640459379");
      allCountChannel.setName(`Member und Bots: ${allCount}`);
   });
bot.login(TOKEN);
