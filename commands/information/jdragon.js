const { RichEmbed } = require(`discord.js`)
const { stripIndents } = require("common-tags");
 
 module.exports = {
  name: "jdragon",
  aliases: ["jdrag", "jasondia16", "jasondia14", "810egreegamer"],
  category: "information",
  description: "Shows All JDragon's Social Media and Youtube Channel",
  run: (client, message, args) => {
    if (message.deletable) message.delete();
    const information = new RichEmbed()
    .setTitle(`**JDragon's Social Media**`)
    .addBlankField(true)
    .addField("**JDragon's Youtube Channel**", "Youtube: [Go to His Youtube Channel](https://www.youtube.com/channel/UCt-F584kwx2wAOZvsvKbpGw)")
    .addField("He Post's going to post his videos on January 2020 Which will feature Popular Games, Development, Education, Vlogs, and More", "Please Sub to Him")
    .addBlankField(true)
    .setThumbnail(`https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048`)
    .addField("**JDragon's Twitter**", "Twitter: [Go to his Twitter](https://mobile.twitter.com/TheJDragon16")
    .setFooter("Powered By JDragon & DragonBounds", "https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048")
    .setColor("#8b02ed");
    message.channel.send(information);
      
  }
 }