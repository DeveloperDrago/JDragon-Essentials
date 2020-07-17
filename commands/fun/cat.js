const randomPuppy = require(`random-puppy`)
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "cat",
    aliases: ["meow", "cats"],
    category: "fun",
    description: "Shows a Random picture of a cat",
    run: async (client, message, args) => {
        const subReddits = [`jellyBeanToes`, `kittens`, `catpictures`];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor(`Random`)
            .setImage(img)
            .setTitle(`From /r/ ${random}`)
        message.channel.send(embed);
    }
}
  