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
      name: "Gaming Community",
      type: "PLAYING",
      url: "https://twitch.tv/Pascaldark"
    }
  });
});
client.on("guildMemberAdd", member => {
  let joinServer = member.guild.channels.find(c => c.name === '🎇wilkommen🎇')
  let joinEmbed = new Discord.RichEmbed()
  joinEmbed.setTitle("__Willkommen__")
  joinEmbed.addField(`Hallo **__${member.user.tag}__** Willkommen auf **__${member.guild}__**.` , "Habe viel spaß auf diesem Server :grin:")
  joinEmbed.addField(`Du bist unser \`${member.guild.memberCount}\` User`,`Guck dir auch <#743226477637664768> an!`)
  joinEmbed.setImage("https://cdn.discordapp.com/attachments/746461997029392444/750340065804288050/gamers_community.webp")
  joinEmbed.setTimestamp()
  joinEmbed.setColor("GREEN");
  let joinEmbed2 = new Discord.RichEmbed()
  joinEmbed2.setTitle("Willkommen")
  joinEmbed2.addField("Info" , `Hallo, ${member.user.tag} Viel spaß auf ${member.guild}.`)
  joinEmbed2.setTimestamp()
  joinEmbed2.setColor("BLUE")
  if (!joinServer) return;
  joinServer.send(joinEmbed)
const guild = bot.guilds.get("744487801013403761");
      var memberCount = guild.members.filter(member => !member.user.bot).size;  
      var memberCountChannel = bot.channels.get("744503100311601222");
      memberCountChannel.setName(`Member: ${memberCount}`);
     var botCount = guild.members.filter(member => member.user.bot).size;
      var botCountChannel = bot.channels.get("750017853725474881");
      botCountChannel.setName(`Bots: ${botCount}`);
       var allCount = guild.memberCount
      var allCountChannel = bot.channels.get("750017923640459379");
      allCountChannel.setName(`Member + Bots: ${allCount}`);
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
      allCountChannel.setName(`Member + Bots: ${allCount}`);
   });
bot.login(TOKEN);
