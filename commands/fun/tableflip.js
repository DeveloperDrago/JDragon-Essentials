const frames = [
	'(-°□°)-  ┬─┬',
	'(╯°□°)╯    ]',
	'(╯°□°)╯  ︵  ┻━┻',
	'(╯°□°)╯      ┻━┻'
];

module.exports = {
    name: "tableflip",
    aliases: ["tf", "table", "flip"],
    category: "fun",
    description: "Shows an animation of a tableflip",
    run: async (client, message, args) => {
        if (message.author.id === "291720454748635150")return message.channel.send("Oh it's Masterbro sorry but for some reason your blacklisted to use this command")
        const msg = await message.channel.send('(\\\\°□°)\\\\  ┬─┬');
        for (const frame of frames) {
            setTimeout(() => {}, 5000);
            await msg.edit(frame);
        }
        return message;
    }
}
   
  