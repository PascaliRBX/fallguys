const Discord = require("discord.js");
exports.run = (bot, message, args) => {
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member
        .ban({
          reason: `${args.join(' ')}`
        })
        .then(() => {
          message.reply(
            `${user.tag} Wurde erfolgreich gebannt und wird nie wieder kehren :innocent:`
          );
        })
        .catch(err => {
          message.reply("Ich kann den Member nicht bannen!");
          message.react("⛔")
          console.error(err);
        });
    } else {
      message.reply("Der Member ist nicht auf dem Server");
      message.react("🤔")
    }
  } else {
    message.reply("Du hast keine Berechtigung zum bannen!");
    message.react("🥶")
  }
}
