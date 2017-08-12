const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  var mention;
  if (message.mentions.users.first() !== undefined) {
    mention = message.mentions.users.first();
  }else {
    mention = message.author;
  };
  const embed = new Discord.RichEmbed()
    .setColor(0x00FF00)
    .addField("Username", mention.tag)
    .addField("Avatar URL", mention.avatarURL)
    .setThumbnail(mention.avatarURL);
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Shows your someone\' avatar url..',
  usage: 'avatar [user]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
}; 

