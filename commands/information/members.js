
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

      module.exports = {
        name: "member",
        aliases: ["membercount"],
        category: "fun",
        description: "Shows the members in the server",
        run: async (client, message, args) => {
   const role = message.guild.roles.size;
   const online = (message.guild.members.filter(m => m.presence.status != 'offline').size - message.guild.members.filter(m=>m.user.bot).size)
      const embed = new Discord.RichEmbed()
            .setAuthor("Servername: " + message.guild.name, message.guild.iconURL)
            .setColor(0x00A2E8)
            .addField('Members', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}`, true)
            .addField('Online', `${online}`, true)
            .addField("Bots", message.guild.members.filter(m=>m.user.bot).size)
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send({embed}) 
}
}