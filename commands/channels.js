const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  const channelMap = message.guild.channels.map(c=>c.name;   
  const longest = channelMap.reduce((long, str) => Math.max(long, str.length), 0);
  const embed = new Discord.RichEmbed()
    .setTitle("List Of Channels")
    .setColor(3447003)
    .setFooter(`Type ${config.prefix}cinfo <channel> to get info on a specific channel.`)
    .addField("Text", `\`\`\`${message.guild.channels.filter(c=>c.type === "text").map(c=>${c.name}${' '.repeat(longest - c.name)} :: ${c.id}).join(", ")}\`\`\``)
    .addField("Voice", `\`\`\`${message.guild.channels.filter(c=>c.type === "voice").map(c=>${c.name}${' '.repeat(longest - c.name)} :: ${c.id}).join(", ")}\`\`\``);
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
