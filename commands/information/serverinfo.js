const { RichEmbed } = require(`discord.js`)

module.exports = {
    name: "serverinfo",
    category: "information",
    description: "Show the server information",
    run: async (client, message, args) => {


    const embed = new RichEmbed()
    .setFooter(member.displayName, member.user.displayAvatarURL)
    .setThumbnail(message.guild.iconURL)
    .setColor(PURPLE)

    .addField('\u200B', stripIndents`**> Server name:** ${message.guild.name}
    **> Server Owner:** ${message.guild.owner}
    **> Server Region:** ${message.guild.region}`, true)

    .addField('\u200B', stripIndents`**> ID** ${member.user.id}
    **> Verification level** ${message.guild.verificationLevel}
    **> Total Members ** ${message.guild.memberCount}`, true)
    
    
    .setTimestamp(message.guild.createdAt)


        message.channel.send(embed);
}
}