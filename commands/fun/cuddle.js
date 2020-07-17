const snekfetch = require("snekfetch")

module.exports = {
    name: "cuddle",
    aliases: ["bed"],
    category: "fun",
    description: "Cuddle someone in the bed and have some... FUN",
    run: (client, message, args) => {

    if (message.mentions.users.size < 1) return message.channel.send("you can't kiss nobody")
    let user = message.guild.member(message.mentions.users.first());
          message.channel.send(`${user} You got a cuddle from ${message.author.username} ❤`,{
              embed: {
                  image: {
                      url: "https://i.imgur.com/0yAIWbg.gif"
                  }
              }
          })
        }
}
