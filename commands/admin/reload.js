module.exports = {
        name: "reload",
        description: "reloads a bot command!",
        usage: "reload",
        category: "moderation",
        accessableby: "Bot Owner",
        aliases: ["creload"],
        run: (client, message, args) => {
              message.channel.send(`This Command will be disabled until version 6.0`)
      }

}