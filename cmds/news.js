const Discord = require("discord.js");
exports.run = async(bot, message, args) => {
message.delete()
const e = new Discord.RichEmbed()
e.setTitle("News")
e.setColor("RANDOM")
e.setThumbnail(message.guild.iconURL)
e.addField(`\u200b`, `${args.join(' ')}`)
e.setFooter("Ja/Gut = :+1: | Nein/Schlecht = :-1:")
e.setTimestamp()
message.channel.send(e).then(ch => {
await ch.react("👍")
await ch.react("👎")
})
}
