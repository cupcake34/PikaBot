/* Testing needed */
exports.run = (client, message, args) => {
  const msg = message.reply("Invalid Number Specified\nYou can select between 1-4 only.");
  const data = message.channel.send({files: [`https://discordapp.com/api/guilds/${message.guild.id}/embed.png?style=banner${args[0]}`]});
  if (message.guild.icon === null) return message.reply("Please set a icon for server before using this command.");
  if (args[0] === "1") return data;
  else if (args[0] === "2") return data;
  else if (args[0] === "3") return data;
  else if (args[0] === "4") return data;
  else return msg;
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['logo'],
  permLevel: 0
};

exports.help = {
  name: 'banner',
  description: 'Displays a banner of the server, style should be specified by a number.',
  usage: 'banner [number]',
  module: 'Other',
  permit: ' ',
  alias: '/ logo'
};
