const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  if (message.mentions.users.first() !== undefined) {
    const mention = message.mentions.users.first();
  }else {
    const mention = message.author;
  };
  const embed = new Discord.RichEmbed()
    .setColor(0x00FF00)
    .setDescription(`:id: of ${guild.members.get(mention.id).tag} is \`${mention.id}\``)
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uid'],
  permLevel: 0
};

exports.help = {
  name: 'userid',
  description: 'Shows user id of someone.',
  usage: 'userid [user]',
  module: 'Other',
  permit: ' ',
  alias: '/ uid'
}; 

