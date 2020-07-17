const { RichEmbed } = require(`discord.js`)
const { stripIndents } = require("common-tags");

 module.exports = {
  name: "apply",
  aliases: ["staffApp", "application", "staffpls"],
  description: "Shows an application that can be used to apply what you want to apply for",
  category: "information",
  run: (client, message, args) => {
    message.channel.send(`Command is Disabled For Improvement`);
  }
 }