const snekfetch = require("snekfetch");
/* Testing needes */
exports.run = (client, message, args) => {
  const guild = message.guild;
  const channel = message.channel;
  const msg = message.reply("Invalid Number Specified\nYou can select between 1-4 only.");
  if (guild.icon === null) return message.reply("Please set a icon for server before using this command.");
  if (args[0].toNumber() > 4) return msg;
  if (args[0].toNunber() < 1) return msg;
  channel.send({file: `https://discordapp.com/api/guilds/${guild.id}/embed.png?style=banner${args[0]}`});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'banner',
  description: 'Displays a banner of the server, style should be specified by a number.',
  usage: 'banner [number]',
  module: 'Other',
  permit: ' ',
  alias: ' '
};
