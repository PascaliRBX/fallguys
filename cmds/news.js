const Discord = require("discord.js");
exports.run = async(bot, message, args) => {
message.delete()
const e = new Discord.RichEmbed()
e.setTitle("News")
e.setColor("BLUE")
e.setThumbnail(message.guild.iconURL)
e.addField(`Text:`, `${args.join(' ')}`)
e.addField("Welche Reaktion heißt was?" ,"Ja/Gut = :+1: | Nein/Schlecht = :-1:")
e.setTimestamp()
message.channel.send(e).then(ch => {
ch.react("👍")
ch.react("👎")
})
}
