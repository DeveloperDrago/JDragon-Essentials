const { RichEmbed } = require(`discord.js`)
const { getMember } = require(`../../functions.js`)
 
 module.exports = {
  name: "love",
  aliases: ["affinity"],
  category: "fun",
  description: "Calculate your Love Affinity with this person!",
  run: async (client, message, args) => {

    message.channel.send(`Command is Disabled For Improvement`);
    }
}

