const { RichEmbed } = require(`discord.js`)
const { stripIndents } = require("common-tags");

 module.exports = {
  name: "ban",
  aliases: [],
  description: "Ban Someone",
  category: "moderation",
  run: (client, message, args) => {
    if (message.deletable) message.delete();
    let rMember = message.members.mentions.first() || message.guild.members.get(args[0]);
    

  }
 }