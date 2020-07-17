module.exports = {
    name: "ping",
    category: "information",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Playing Ping Pong with ${message.author.username}`);

        msg.edit(`🏓 Pong!
        Latency is ${Math.floor(msg.createdAt - message.createdAt)}ms
        API Latency is ${Math.round(client.ping)}ms`);
    }
}
