const superagent = require(`superagent`)
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

      module.exports = {
        name: "fox",
        aliases: ["foxie", "ducksprey"],
        category: "fun",
        description: "Shows a random picture of a fox",
        run: async (client, message, args) => {
            message.channel.send(`Command is Disabled For Improvement`);

        }
    }