const superagent = require(`superagent`)
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "choose",
    aliases: ["pick"],
    category: "fun",
    description: "Pick one or the both for you",
    run: async(client, message, args) => {
        const one = args[0]
        const two = args.slice(1).join(` `)

        if(two < one) return message.channel.send(`You didn't provide a Second Choose`)
        var choices = [`${one}`, `${two}`]
        message.channel.send(`I choose ${choices[Math.floor(Math.random() * choices.length)]}!`)
    }
   }
  