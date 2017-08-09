exports.run = (client, message, args) => {
var mention;
var target;
if (message.mentions.users.first() !== undefined) {
mention = message.mentions.users.first();
target = message.mentions.members.first();
}else {
mention = message.author;
target = message.member;
}

const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
.setAuthor(mention.username, mention.avatatURL)
.setThumbnail(mention.avatarURL)
.setColor(4447003)
.addField("User ID", mention.id)
.addField("Name", `${target.displayName}(${mention.tag})`)
.addField("Joined Server", target.joinedAt)
.addField("Joined Discord", mention.createdAt)
.addField("Status", mention.presence.status)
.addField("Discrim", mention.discriminator)
.addField("Bot", mention.bot);
message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uinfo'],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Shows info on a user.',
  usage: 'userinfo [user]',
  module: 'Other',
  permit: ' ',
  alias: '/ uinfo'
};
