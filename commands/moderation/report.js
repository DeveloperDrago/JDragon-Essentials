const { RichEmbed } = require(`discord.js`)
const { stripIndents } = require("common-tags");

 module.exports = {
  name: "report",
  aliases: [],
  description: "Report Someone",
  category: "moderation",
  run: (client, message, args) => {
    if (message.deletable) message.delete();
    let rMember = message.members.mentions.first() || message.guild.members.get(args[0]);
        if(!rMember)
        message.channel.send(``)
  }
 }