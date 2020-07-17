const { RichEmbed } = require("discord.js")
const { stripIndents } = require("common-tags");

module.exports = {
    name: "announce",
    aliases:["bc", "broadcast", "a"],
    category: "admin",
    description: "Make an Announcement to Staff or Dragons or Dragons who are signed up to get pinged for events",
    usage: "[dragons, staff, event] [message]",
    run: async (client, message, args) => {
        if(message.deletable) message.delete();{
                
            if(message.author.id === "563854476021334047" || message.author.id === "163164447848923136" ||  message.author.id === "524786524164849674");
            else message.channel.send(`Hey Your Not Permitted to do that Pay Your STEM DUES - Badr`)
        
        if(args.length < 1 ) 
         return message.reply("You told me to say nothing.").then(m => m.delete(5000));

         if ( args[0].toLowerCase() === "dragons") {               
             const msg = (args.slice(1).join(" "));
             const embed = new RichEmbed()        
             .setTitle(`New Announcement from ${message.author.username}`)
             .addField("\u200B",msg)
             .addField("Effective Members", "<@&662108987449409536>")
             .addBlankField(true)
             .setFooter("Powered By JDragon & DragonBounds", "https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048")
             .setThumbnail(`${message.author.displayAvatarURL}`)
             .setColor("#b100ff")
             .setImage("https://cdn.discordapp.com/attachments/599980918127460363/662056872953643028/3.png")
             client.channels.get(`662109169905565706`).send(embed);
             client.channels.get(`662109169905565706`).send("<@&662108987449409536>");
             
         }
         if ( args[0].toLowerCase() === "staff") {               
            const msg = (args.slice(1).join(" "));
            const embed = new RichEmbed()        
            .setTitle(`New Announcement from ${message.author.username}`)
            .addField("\u200B",msg)
            .addField("Effective Members", "<@&662147743732727820>")
            .setFooter("Powered By JDragon & DragonBounds", "https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048")
            .setThumbnail(`${message.author.displayAvatarURL}`)
            .setImage("https://cdn.discordapp.com/attachments/599980918127460363/662056872953643028/3.png")
            .setColor("#b100ff");
            client.channels.get(`662109169905565706`).send(embed);
            client.channels.get(`662109169905565706`).send("<@&662147743732727820>");
        }
         
    }
    if ( args[0].toLowerCase() === "events") {          
        const msg = (args.slice(1).join(" "));
        const embed = new RichEmbed()        
        .setTitle(`New Announcement from ${message.author.username}`)
        .addField("\u200B",msg)
        .addField("Effective Members", "<@&661845667630809108>")
        .setFooter("Powered By JDragon & DragonBounds", "https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048")
        .setThumbnail(`${message.author.displayAvatarURL}`)
        .setImage("https://cdn.discordapp.com/attachments/599980918127460363/662056872953643028/3.png")
        .setColor("#b100ff");
        client.channels.get(`662109169905565706`).send(embed);
        client.channels.get(`662109169905565706`).send("<@&661845667630809108>");
    }
    if ( args[0].toLowerCase() === "roleplay") {               
        const msg = (args.slice(1).join(" "));
        const embed = new RichEmbed()        
        .setTitle(`New Announcement from ${message.author.username}`)
        .addField("\u200B",msg)
        .addField("Effective Members", "<@&661845879430447115>")
        .setFooter("Powered By JDragon & DragonBounds", "https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048")
        .setThumbnail(`${message.author.displayAvatarURL}`)
        .setImage("https://cdn.discordapp.com/attachments/599980918127460363/662056872953643028/3.png")
        .setColor("#b100ff");
        client.channels.get(`662109169905565706`).send(embed);
        client.channels.get(`662109169905565706`).send("<@&661845879430447115>");
    }
    if ( args[0].toLowerCase() === "everyone") {               
        const msg = (args.slice(1).join(" "));
        const embed = new RichEmbed()        
        .setTitle(`New Announcement from ${message.author.username}`)
        .addField("\u200B",msg)
        .addField("Effective Members", "<@&661723444496564234>")
        .setFooter("Powered By JDragon & DragonBounds", "https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048")
        .setThumbnail(`${message.author.displayAvatarURL}`)
        .setImage("https://cdn.discordapp.com/attachments/599980918127460363/662056872953643028/3.png")
        .setColor("#b100ff");
        client.channels.get(`662109169905565706`).send(embed);
        client.channels.get(`662109169905565706`).send("<@&661723444496564234>");
    }
    if ( args[0].toLowerCase() === "content") {               
        const msg = (args.slice(1).join(" "));
        client.channels.get(`661724714418569227`).send(msg);
        client.channels.get(`661724714418569227`).send("<@&661846494827249685>");
    }

}
}
