const { RichEmbed } = require(`discord.js`)

module.exports = {
    name: "eval",
    aliases:[],
    category: "admin",
    description: "Eval ",
    usage: " ",
    run: async (client, message, args) => {
              if(message.author.id !== `563854476021334047`) return;
              try {
                const code = args.join(" ");
                let evaled = eval(code);
           
                if (typeof evaled !== "string")
                  evaled = require("util").inspect(evaled);
           
                message.channel.send(clean(evaled), {code:"xl"});
              } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
              }
            }
          };

          function clean(text) {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
          }
        
