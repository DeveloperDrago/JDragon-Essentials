const { RichEmbed } = require(`discord.js`)
const { stripIndents } = require("common-tags");

module.exports = {
    name: "information",
    aliases: ["info", "botinfo"],
    category: "information",
    description: "Shows the information for the bot",
    run: async (client, message, args) => {
        
            if(args[0] === 'creator'){
            const embed = new RichEmbed()
            .setFooter("Powered By JDragon & DragonBounds", "https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048")
            .setThumbnail(`https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048`)
            .addField(``)
            }        
        }
    }
