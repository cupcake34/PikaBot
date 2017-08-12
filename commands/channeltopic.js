const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  const channel = message.channel;
  const embed = new Discord.RichEmbed()
    .setColor(0x00FF00)
    .setTitle(`Channel Topic of ${channel.name}`)
    .setDescription(channel.topic)
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ct'],
  permLevel: 0
};

exports.help = {
  name: 'channeltopic',
  description: 'Shows channel topic of current channel.',
  usage: 'channeltopic',
  module: 'Other',
  permit: ' ',
  alias: '/ ct'
}; 

