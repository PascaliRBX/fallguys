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
      name: "Ich liebe Pandas",
      type: "PLAYING"
    }
  });
});
  client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
  
    const globals = JSON.parse(fs.readFileSync("./global.json", "utf8"));
    if (!globals[message.guild.id]) {
      globals[message.guild.id] = {
        globalchat: "700263604129366086"
      };
    }
    const msg = message;
    const globis = globals[message.guild.id].globalchat;
    if (message.channel.id === globis) {
      const pols = JSON.parse(fs.readFileSync("./ranks.json", "utf8"));
      if (!pols[message.author.id]) {
        pols[message.author.id] = {
          rank: "spieler"
        };
      }
      const polices = pols[message.author.id].rank;
      if (pols[message.author.id].rank == "Owner") return;
      if (pols[message.author.id].rank == "Admin") return;


  message.delete()
      const embed = new Discord.RichEmbed();
      let invite = await message.channel.createInvite({unique: false})
      embed.setAuthor(`:panda_face: Nutzer :panda_face:`)
      embed.setTitle(`${message.author.tag}`)
      embed.setThumbnail(message.author.avatarURL)
      embed.setColor("GREEN")
      embed.addField("Nachricht:" , message.content)
      embed.addField("Infos:", `[Bot Invite](https://discord.com/api/oauth2/authorize?client_id=748419682821865502&permissions=8&scope=bot) | [Server Invite](${invite})`)
      embed.setTimestamp()
      embed.setFooter(`${message.author.id}` , message.author.avatarURL)
      client.guilds.forEach(g => {
        try {
          client.channels.get(globals[g.id].globalchat).send(embed);
        } catch (e) {
          return;
        }
      });
      //}
      if (!globals[message.guild.id]) {
        globals[msg.guild.id] = {
          globalchat: "700263604129366086"
        };
      }
      // } else{ return; }
    }
  
    if (message.channel.id === "695180176996171776") {
      message.delete();
      client.channels
        .get("695180817999069185")
        .send(message.author.tag + "\n" + message.content);
    }
  });
  client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
  
    const globals = JSON.parse(fs.readFileSync("./global.json", "utf8"));
    if (!globals[message.guild.id]) {
      globals[message.guild.id] = {
        globalchat: "700263604129366086"
      };
    }
    const msg = message;
    const globis = globals[message.guild.id].globalchat;
    if (message.channel.id === globis) {
      const pols = JSON.parse(fs.readFileSync("./ranks.json", "utf8"));
      if (!pols[message.author.id]) {
        pols[message.author.id] = {
          rank: "spieler"
        };
      }
      const polices = pols[message.author.id].rank;
      if (pols[message.author.id].rank == "spieler") return;
      if (pols[message.author.id].rank == "Admin") return;


  message.delete()
      const embed = new Discord.RichEmbed();
      let invite = await message.channel.createInvite({unique: false})
      embed.setAuthor(`:panda_face: Owner :panda_face:`)
      embed.setTitle(`${message.author.tag}`)
      embed.setThumbnail(message.author.avatarURL)
      embed.setColor("BLUE")
      embed.addField("Nachricht:" , message.content)
      embed.addField("Infos:", `[Bot Invite](https://discord.com/api/oauth2/authorize?client_id=748419682821865502&permissions=8&scope=bot) | [Server Invite](${invite})`)
      embed.setTimestamp()
      embed.setFooter(`${message.author.id}` , message.author.avatarURL)
      client.guilds.forEach(g => {
        try {
          client.channels.get(globals[g.id].globalchat).send(embed);
        } catch (e) {
          return;
        }
      });
      //}
      if (!globals[message.guild.id]) {
        globals[msg.guild.id] = {
          globalchat: "700263604129366086"
        };
      }
      // } else{ return; }
    }
  
    if (message.channel.id === "695180176996171776") {
      message.delete();
      client.channels
        .get("695180817999069185")
        .send(message.author.tag + "\n" + message.content);
    }
  });
  client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
  
    const globals = JSON.parse(fs.readFileSync("./global.json", "utf8"));
    if (!globals[message.guild.id]) {
      globals[message.guild.id] = {
        globalchat: "700263604129366086"
      };
    }
    const msg = message;
    const globis = globals[message.guild.id].globalchat;
    if (message.channel.id === globis) {
      const pols = JSON.parse(fs.readFileSync("./ranks.json", "utf8"));
      if (!pols[message.author.id]) {
        pols[message.author.id] = {
          rank: "spieler"
        };
      }
      const polices = pols[message.author.id].rank;
      if (pols[message.author.id].rank == "spieler") return;
      if (pols[message.author.id].rank == "Owner") return;


  message.delete()
      const embed = new Discord.RichEmbed();
      let invite = await message.channel.createInvite({unique: false})
      embed.setAuthor(`Admin`)
      embed.setTitle(`${message.author.tag}`)
      embed.setThumbnail(message.author.avatarURL)
      embed.setColor("#e31010")
      embed.addField("Nachricht:" , message.content)
      embed.addField("Infos:",`[Bot Invite](https://discord.com/api/oauth2/authorize?client_id=748419682821865502&permissions=8&scope=bot) | [Server Invite](${invite})`)
      embed.setTimestamp()
      embed.setFooter(`${message.author.id}` , message.author.avatarURL)
      client.guilds.forEach(g => {
        try {
          client.channels.get(globals[g.id].globalchat).send(embed);
        } catch (e) {
          return;
        }
      });
      //}
      if (!globals[message.guild.id]) {
        globals[msg.guild.id] = {
          globalchat: "700263604129366086"
        };
      }
      // } else{ return; }
    }
  
    if (message.channel.id === "695180176996171776") {
      message.delete();
      client.channels
        .get("695180817999069185")
        .send(message.author.tag + "\n" + message.content);
    }
  });
bot.login(TOKEN);
