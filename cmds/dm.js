const Discord = require("discord.js");
exports.run = async (bot, message, args) => {  
  message.delete(2000)
  let member = message.mentions.members.first();
  let embed = new Discord.RichEmbed()
  .setTitle("Dm Chat")
  .addField(`Eine Neue Nachricht von: ${message.author.tag}` , `${args.join(' ')}`, true)
  .setTimestamp()
  .setThumbnail(member.avatarURL)
  .setFooter(member.tag , member.avatarURL)
  .setColor("BLUE");
  member.send(embed).then (ch => {
  ch.send("Deine Nachricht wurde versendet!")
  ch.delete(2000)
  })
}
