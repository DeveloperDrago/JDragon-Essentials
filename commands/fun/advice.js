const { RichEmbed } = require("discord.js");
const snekfetch = require("snekfetch")



module.exports = {
    name: "advice",
    aliases: [],
    category: "fun",
    description: "gives you advice",
    run: async (client, message, args) => {
        try {
            const { body } = await snekfetch.get('http://api.adviceslip.com/advice');
            message.channel.send(JSON.parse(body.toString()).slip.advice);
        } catch (err) {
            message.channel.send(`An error occurred: \`${err.message}\`. Try again later!`);
        }
    }
   
}