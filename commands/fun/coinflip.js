let coin = [`Head`, `Tails`]

module.exports = {
    name: "coinflip",
    aliases: ["cf"],
    category: "fun",
    description: "Flips the coin",
    run: async(client, message, args) => {
    message.channel.send(coin[Math.floor(Math.random () * coin.length)])
    
    }
   }
  