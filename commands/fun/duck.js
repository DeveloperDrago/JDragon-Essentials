const superagent = require(`superagent`)
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "duck",
    aliases: ["ducks"],
    category: "fun",
    description: "Shows a Random picture of a duck",
    run: async (client, message, args) =>{

        const embed = new RichEmbed()
        .setTitle(`Quack!`)
        .setImage(`https://random-d.uk/api/images/51.jpg`)
        .setFooter("Powered by random-d.uk")
        message.channel.send(embed)
        
    }

    
    
}

        
  