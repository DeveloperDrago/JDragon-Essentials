const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js")
const chooseArr = [`1️⃣`, `2️⃣`,`3️⃣`,`4️⃣`];

module.exports = {
    name: "help",
    aliases: ["h"],
    category: "information",
    description: "Returns all commands, or one specific command info",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
        .setTitle(`Help menu`)
        .setDescription(`React 1️⃣ to view Commands that are considered Bot Owners Only\n\nReact 2️⃣ to view Commands that are considered Fun\n\nReact 3️⃣ to view Commands that are considered Informational\n\nReact 4️⃣ to view Commands that are considered for Managment Purposes`)

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);
        await m.clearReactions()

        if(reacted === "1️⃣"){
            if(message.author.id !== `563854476021334047`){
            embed

            .setDescription(`You don't have the magic Conch!`)
            m.edit(embed)
            }else{
                embed

                .setDescription(` `)
                .addField(`\u200B`,`**J>announce** \nThis command will make an announcement to specific people`)
                .addField(`\u200B`,`**J>say** \nThis command will make the bot say something in a embed`)

                m.edit(embed)
            }
        }
        if(reacted === "2️⃣"){
            embed
            .setDescription(` `)
            .addField(`\u200B`,`**J>advice** \nThis command Will give you advices in life`)
            .addField(`\u200B`,`**J>calculate [X] [ + | - | * | /] [Y]** \nThis Command Will calculate your Math problems`)
            .addField(`\u200B`,`**J>cat**\nThis command will show a random picture of a cat`)
            .addField(`\u200B`,`**J>dadjoke** \nThis command will tell you a joke your father maybe makes`)
            .addField(`\u200B`,`**J>dog** \nThis command will show you an random picture of a dog`)
            .addField(`\u200B`,`**J>fox**\n This command will show you an random picture of a dog`)
            .addField(`\u200B`,`**J>love [ Mention | Name | ID ]** \nThis command will show how much that person loves you`)
            .addField(`\u200B`,`**J>meme ** \nThis command will pull a meme from a subreddit`)
            .addField(`\u200B`,`**J>rps** \nThis command will allow you to play Rock, Paper Scissors with the bot`)
            .addField(`\u200B`,`**J>tableflip** \nThis command will show an animation of a tableflip`)
            m.edit(embed)
            
        }
        if(reacted === "3️⃣"){
            embed
            .setDescription(` `)
            .addField(`\u200B`,`**J>apply** \nThis command will show you an application to apply for staff`)
            .addField(`\u200B`,`**J>help** \nThis command will show the help menu`)
            .addField(`\u200B`,`**J>jdragon** \nThis command will show JDragon's Social Media`)
            .addField(`\u200B`,`**J>myxir** \nThis command will show information of Myxir an RPG game made by our former staff`)
            .addField(`\u200B`,`**J>ping** \nThis command will show check for latency and API Pings`)
            .addField(`\u200B`,`**J>userinfo** \nThis command will show Information of You or Someone you mentioned`)
            m.edit(embed)
            
        }
        if(reacted === "4️⃣"){
            embed
            .setDescription(` There's No commands Provided that are considered for management `)
            m.edit(embed)
        }
        
    }
}