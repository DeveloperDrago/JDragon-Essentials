const { RichEmbed } = require(`discord.js`)
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js")
const chooseArr = ["🗻","📰","✂"];
 
 module.exports = {
  name: "rps",
  aliases: [],
  category: "fun",
  description: "Play Rock, Paper, Scissors with the bot!",
  run: async (client, message, args) => {
      const embed = new RichEmbed()
      .setColor("#ffffff")
      .setFooter("Powered By JDragon & DragonBounds", "https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048")
      .setDescription(`React to one of these emojis to play the game`)


      const m = await message.channel.send(embed);
      const reacted = await promptMessage(m, message.author, 30, chooseArr);

      const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

      const result = await getResult(reacted, botChoice)
      await m.clearReactions()

      embed
        .setDescription(" ")
        .addField(result, `${result} vs Bot: ${botChoice}`)

        m.edit(embed);

    function getResult(me, clientChosen) {
        if ((me === "🗻" && clientChosen === "✂") ||
            (me === "📰" && clientChosen === "🗻") ||
            (me === "✂" && clientChosen === "📰")) {
                return "You won!";
        } else if (me === clientChosen) {
            return "It's a tie!";
        } else {
            return "You lost!";
        }
    }
}
}