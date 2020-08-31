const Discord = require('discord.js'); 

exports.run = (bot, message, args) => {
const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`${user.tag} Wurde erfolgreich gekickt`)
          })
          .catch(err => {
            message.reply('Ich kann den Member nicht kicken');
            console.error(err);
          });
      } else {
        message.reply("Der Member ist nicht auf dem Server")
      }
    } else {
      message.reply("Du kannst den Member nicht kicken!");
    }
}
