const { RichEmbed } = require(`discord.js`)
const { stripIndents } = require("common-tags");
 
 module.exports = {
  name: "myxir",
  aliases: ["mix"],
  category: "information",
  description: "Shows myxir information",
  run: (client, message, args) => {
    if (message.deletable) message.delete();
    const information = new RichEmbed()
    .setTitle(`**Myxir**`)
    .addBlankField(true)
    .addField("**Myxir's Twitter**", "Twiiter: [Go to Myxir's Twitter](https://twitter.com/PlayMyxir)")
    .addField("**Want to play an RPG Based Game from our Former Staff, Masterbro**", "Join Here: [Click here for the invite link](https://discord.gg/Br2NrCm)")
    .addBlankField(true)
    .setThumbnail(`https://cdn.discordapp.com/attachments/565662525979623454/639316507540848660/Uccntitled-1.png`)
    .setFooter("Powered By JDragon & DragonBounds", "https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048")
    .setColor("#8b02ed");
    

    message.channel.send(information);
      
  }
 }