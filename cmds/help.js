const discord = require("discord.js")
exports.run = (bot , message , args) => {
    let prefix = "fg!"
    let embed = new discord.RichEmbed();
    embed.setTitle("Help Übersicht")
    embed.setURL("https://discord.gg/tDmBn4d")
    embed.setThumbnail(message.guild.iconURL)
    embed.addField(`${prefix}kick` , "Kickt einen User")
    embed.addField(`${prefix}ban` , "Bannt einen User")
    embed.addField(`${prefix}news {Nachricht}` , "Erstellt eine Embed Message und hängt folgende Reaktionen ran: :+1: und :-1:")
    embed.addField(`${prefix}dm @user {Nachricht}` , "Sendet eine Private Nachricht an den User.")
    embed.setColor("GREEN")
    message.channel.send(embed)
}
