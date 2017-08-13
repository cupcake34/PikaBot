const settings = require("./config.json")
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (message.channel.type === "dm") return message.reply("Commands are not usable in DM.");
  if (message.channel.type === "group") return;
  if (message.guild.id === "264445053596991498") return;
  if (message.guild.id === "110373943822540800") return;
  if (message.content.toLowerCase().includes("lol")) {
  message.channel.send("**:joy: :joy: LAUGH OUT LOUD :joy: :joy:**").then(msg => msg.delete(7000));
  }else
  if (message.content.toLowerCase().includes("xd" || "rofl" || "lmao" || "rofl" || "lmfao")) {
  message.channel.send(":joy: :joy: :joy: :joy: :joy: :joy:").then(msg => msg.delete(5000));
  }else
  if (!message.content.startsWith(settings.prefix)) return;
  let command = message.content.split(' ')[0].slice(settings.prefix.length);
  let args = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, args);
  }

};
