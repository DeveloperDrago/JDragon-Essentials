const { Client, RichEmbed, Collection } = require("discord.js");
const { token, prefix, version } = require("./config.json");
const client = new Client({disableEveryone: true});
const fs = require("fs")
const date = require('date-and-time');
date.plugin('meridiem');
date.extend({ res: { A: ['AM', 'PM'] } });





client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});



client.on("ready", async() => {

	
    console.log(`I'm Online since ${client.readyAt}!`);
    client.user.setActivity(`Version: ${version}`)
    let membersC = client.guilds.get(`661723444496564234`).memberCount - client.guilds.get(`661723444496564234`).members.filter(m=>m.user.bot).size
    client.channels.get(`662805194584621066`).setName(`⎸〖🐲〗Dragons: ${membersC}`)
    client.channels.get(`662806176156876855`).setName(`JDT Clock is Loading...`)
    client.channels.get(`663496695354753044`).setName(`FST Clock is Loading...`)
    client.channels.get(`663509962450010140`).setName(`MTT Clock is Loading...`)
    setInterval(timern, 30000)
    function timern() {
        
        var fstTime = new Date().toLocaleString("en-US", {timeZone: 'America/New_York'})
        var jdtTime = new Date().toLocaleString("en-US", {timeZone: 'America/Chicago'})
        let jClock = date.format(new Date(jdtTime), 'hh:mm A');
        let fClock = date.format(new Date(fstTime), 'hh:mm A');
        client.channels.get(`662806176156876855`).setName(`⎸〖🕓〗 ${jClock} JDT`)
        client.channels.get(`663496695354753044`).setName(`⎸〖🕝〗 ${fClock} FST`)
        client.channels.get(`663509962450010140`).setName(`⎸〖🕣〗 ${jClock} MTT`)
        
      }
});

client.on(`guildCreate`, async guild => {
    console.log(`This bot was invited to this server: ${guild.name}`)
    try{
        const embed = new RichEmbed()
        .setTitle(`Hello I'm One of JDragon's Bot`)
        .addField(`\u200B`,`I'm a multipurpose bot that will do Moderation, Entertainment and Management Commands for the Bot Specifically for JDragon's Discord Servers. I see that this is one of the servers JDragon Owns so that's cool DO J>help to see it's commands`)
        .setThumbnail(client.user.displayAvatarURL)
        .addBlankField(true)
        .setFooter(`Powered by JDragon and Dragon Bounds Running Version ${version}`)
        guild.channels.get(`662109182245339203` || guild.channels.get(`640400718947418181`)).send(embed)
        .catch(console.log(error))
    }
    catch{
        console.log(`The Bot was outside of JDragon's Community Servers`)
    }

})

client.on("message", async message =>{

    if(message.guild.id !== `662363521815674880`){
    console.log(`${message.author.username} Said ${message.content} in ${message.guild.name}`);
    }

    if(message.channel.id === `663507437441122313`){
        try{
        await message.react(`👍`)
        await message.react(`👎`)
        } catch (error){
            console.log(`One of the Emojis Failed to be reacted`)
        }
    }

        if (message.author.bot) return;
        if (!message.guild) return message.reply("Hey! You can't DM me you can only use me on JDragon's Discord Server.");
        if (!message.content.startsWith(prefix)) return

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const msg = args.slice(1).join(` `)
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) 
        command.run(client, message, args);
 
    if (cmd === `setgame`){
        if(message.deletable) message.delete();
        if(message.author.id !== `563854476021334047` || `163164447848923136` ) 
        client.user.setActivity(msg);
    

    }


    
    

    })

client.on("guildMemberAdd", async (member) => {
        if(member.guild.id !== `661723444496564234`) return;
        let membersC = client.guilds.get(`661723444496564234`).memberCount - client.guilds.get(`661723444496564234`).members.filter(m=>m.user.bot).size
        client.channels.get(`662805194584621066`).setName(`Dragons: ${membersC}`)
        if(member.user.bot) return;
        member.addRoles([`662108957019471882`,`662108977441669120`,`662108953366495233`,`662108966251397120`,`662108974748925953`,`662108978469273627`], `Join Role`)
        console.log(`A New User Called ${member.user} has joined ${member.guild.name}` );
        const embed = new RichEmbed()
        .setTitle(`${member.user.username} has joined ${member.guild.name}!`)
        .addField(`\u200B`,`**Welcome __${member.user}__ to __${member.guild.name}__**!\n In this server we <Placeholder> \n\n To get started go to these channels: \n\n <#662109164348112908> - In this Channel It Breifly Explain the Rules of the server \n\n <#662142976029491240> Will Give you more information about this server and JDragon's Social Medias \n\n <#662109176230838282> - In this channel we give you roles so members can get to know you more like what console you play or games you like and It opens more channels that you can access \n\nThats all the information I'm gonna give so feel free to go to <#662109195885084703> and say Hi \n\n`)
        .setThumbnail(`${member.user.displayAvatarURL}`)
        .setImage(`https://cdn.discordapp.com/attachments/599980918127460363/662468358041632808/n_nnv.png`)
        .setFooter(`Now, We have ${member.guild.memberCount} Members In the Server!`, "https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048")
        .setColor(`PURPLE`)
        .setTimestamp()
        
        

        client.channels.get(`662109182245339203`).send(embed)
        client.channels.get(`662109182245339203`).send(`${member.user}`)
        

    })


    
client.on(`guildDelete`, async guild => {
    console.log(`A Guild was deleted or this bot was either Banned/Kicked out  of this server: ${guild.name} at ${ new Date()}`)

})

client.on(`guildMemberRemove`, async member => {
    if(member.guild.id !== `661723444496564234`) return;
    let membersC = client.guilds.get(`661723444496564234`).memberCount - client.guilds.get(`661723444496564234`).members.filter(m=>m.user.bot).size
    client.channels.get(`662805194584621066`).setName(`Dragons: ${membersC}`)
    const banList = await message.guild.fetchBans();
    const bannedUser = banList.find(user => user.id === member.user.id);
    if (bannedUser) return;
    const embed = new RichEmbed()
    const members =`${member.guild.memberCount - member.guild.members.filter(m=>m.user.bot).size}`
    client.channels.get(`662805194584621066`).setName(`Dragons: ${members}`)
    .setTitle(`**A member has left this discord server :(**`)
    .addField(`\u200B`,`Press F to pay respects to this person called ${member.user.username}`)
    .setThumbnail(`${member.user.displayAvatarURL}`)
    .setFooter(`Now, We have ${member.guild.memberCount} Members In the Server!`, "https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048")
    .setColor(`RED`)
    .setTimestamp()

    client.channels.get(`662109182245339203`).send(embed)

})
client.on(`guildBanAdd`, (guild, user) => {
    if(guild.id !== `661723444496564234`) return;
    let membersC = client.guilds.get(`661723444496564234`).memberCount - client.guilds.get(`661723444496564234`).members.filter(m=>m.user.bot).size
    client.channels.get(`662805194584621066`).setName(`Dragons: ${membersC}`)
    const embed = new RichEmbed()

    .setTitle(`**A member has been banned from this discord server...**`)
    .addField(`\u200B`,`This person called ${user.username} got banned! What a Shame!`)
    .setThumbnail(`${user.displayAvatarURL}`)
    .setFooter(`Now, We have ${guild.memberCount} Members In the Server!`, "https://cdn.discordapp.com/avatars/563854476021334047/0652f1863bc221a3bee1ecc01d7c2dc0.png?size=2048")
    .setColor(`RED`)
    .setTimestamp()

    client.channels.get(`662109182245339203`).send(embed)
})

client.login(token);