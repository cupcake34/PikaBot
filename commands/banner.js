/* Testing needed */
exports.run = (client, message, args) => {
  const style = Math.floor(Math.random() * 3) + 1;
  if (message.guild.icon === null) return message.reply("Please set a icon for server before using this command.");
  message.channel.send({files: [`https://discordapp.com/api/guilds/${message.guild.id}/embed.png?style=banner${style}`]});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['logo'],
  permLevel: 0
};

exports.help = {
  name: 'banner',
  description: 'Displays a banner of the server, style is random.',
  usage: 'banner [number]',
  module: 'Other',
  permit: ' ',
  alias: '/ logo'
};
