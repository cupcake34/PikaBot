/* Testing needed */
exports.run = (client, message, args) => {
  const banner = [".png", ".png?style=banner1", ".png?style=banner2", ".png?style=banner3", ".png?style=banner4"];
  var random = Math.floor(Math.random()*banner.length);
  if (message.guild.icon === null) return message.reply("Please set a icon for server before using this command.");
  message.channel.send({files: [`https://discordapp.com/api/guilds/${message.guild.id}/embed${banner[random]`]});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['logo'],
  permLevel: 0
};

exports.help = {
  name: 'banner',
  description: 'Displays a banner of the server, the server must be registered.',
  usage: 'banner [number]',
  module: 'Other',
  permit: ' ',
  alias: '/ logo'
};
