const math = require(`mathjs`)

module.exports = {
    name: "calculate",
    aliases: [`cal`],
    category: "fun",
    description: "Calculate your math problems!",
    usage: `[X] [ Expression ] [Y]`,
    run: (client, message, args) => {
    const expr = args.join(" ");
    try {
      let result = math.eval(expr);
      
      // Process results that are a new class type (Matrix, Units, etc)
      if (isNaN(result)) {
        result = result.toString();
      }
      message.channel.send("`" + expr + " = " + result + "`");
    }
    catch (e) {
      console.warn(e.name + ": " + e.message + "\n\t" + expr);
      message.channel.send("`" + expr + "` cannot be evaluated.");
    }
}
}