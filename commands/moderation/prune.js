const { RichEmbed } = require(`discord.js`)
const { stripIndents } = require("common-tags");

 module.exports = {
  name: "prune",
  aliases: [`purge`],
  description: "Deletes the message",
  category: "moderation",
  run: (client, message, args) => {
    if (message.deletable) message.delete();
  
    
}

 }
    
