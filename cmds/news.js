const Discord = require("discord.js");
exports.run = async(bot, message, args) => {
message.delete()
const e = new Discord.RichEmbed()
e.setTitle("News")
e.setColor("#084bee")
e.setThumbnail("https://cdn.discordapp.com/attachments/749841106140921917/749977193605628026/fall_guys_bot.jpg")
e.addField(`Text:`, `${args.join(' ')}`)
e.addField("Welche Reaktion heißt was?" ,"Ja/Gut = :+1: | Nein/Schlecht = :-1:")
e.setTimestamp()
message.channel.send(e).then(ch => {
ch.react("👍")
ch.react("👎")
})
}
