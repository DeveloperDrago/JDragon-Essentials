const { RichEmbed } = require("discord.js")
const { stripIndents } = require("common-tags");


module.exports = {
    name: "say",
    aliases:["message"],
    category: "admin",
    description: "Make the Bot say something ",
    usage: "[Title] [message]",
    run: async (client, message, args) => {
        const filter = m => m.author.id === message.author.id;
        message.channel.send(`What is the title`).then(() => { 
            message.channel.awaitMessages(filter, { maxMatches: 1, time: 1000000, errors: ['time'] })
                .then(collected => {

                    const title = `${collected.first().content}`;
                    message.channel.send(`What is the Description`).then(() => {
                        message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000000, errors: ['time'] })
                            .then(collected => {
                                const description = `${collected.first().content}`;
                                
                                

                                const embed = new RichEmbed()
                                .setTitle(title)
                                .addField("\u200B", description)
                                .setFooter(`Powered By JDragon and Dragon Bounds`, `${client.user.displayAvatarURL}`)
                                .setThumbnail(`${client.user.displayAvatarURL}`)
                                .setColor(`#8800ff`)
                                
                                message.channel.send(embed)


                            })

                    
                })
        });
    })
                }
            }
        
    
