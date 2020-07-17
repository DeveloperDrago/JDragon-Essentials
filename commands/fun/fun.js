

module.exports = {
    name: "fun",
    aliases: [],
    category: "fun",
    description: "A Fun command",
    run: async (client, message, args) => {
            if (message.author.id === `563854476021334047` || `163164447848923136`){
                message.channel.send(`^ The Awesome One `)
            }
            else{
                message.channel.send(`^ Stinky One`)
            }
            
        }
    }
   
  