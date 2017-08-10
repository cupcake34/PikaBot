const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (client, message, args) => {
  const bot = client.user;
  const embed = new Discord.RichEmbed()
    .setAuthor(bot.username, bot.avatarURL)
    .setThumbnail(bot.avatarURL)
    .setDescription(`If you want me in your server, [click here](https://discordapp.com/oauth2/authorize?permissions=2146958591&scope=bot&client_id=${bot.id})!\n\nIf you want to get latest updates join my [Discord Server](https://discord.gg/wTeksG).\n\nI am also on...\n[bots.discord.pw](https://bots.discord.pw/bots/${bot.id})\n[discordbots.org]()\n[discordlist.me]()`);
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Sends an invite of bot.',
  usage: 'invite',
  module: 'Other',
  permit: ' ',
  alias: ' '
};
