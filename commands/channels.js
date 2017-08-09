const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle("List Of Channels")
    .setColor(3447003)
    .setDescription(message.guild.channels.map(c=>c.name).join(", "));
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'channels',
  description: 'Gives a list of channels in that server.',
  usage: 'channels',
  module: 'Other',
  permit: ' ',
  alias: ' '
}; 
