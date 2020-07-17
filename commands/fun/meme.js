const randomPuppy = require(`random-puppy`)
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "meme",
    aliases: ["LOL", "LMAO", "MEMEME"],
    category: "fun",
    description: "Shows a random meme",
    run: async (client, message, args) => {
            const subReddits = [`dankmeme`, `meme`, `me_irl`];
            const random = subReddits[Math.floor(Math.random() * subReddits.length)]
            const img = await randomPuppy(random);
            const embed = new RichEmbed()
                .setColor(`Random`)
                .setImage(img)
                .setTitle(`From /r/ ${random}`)
            message.channel.send(embed);
        }
    }
   
  