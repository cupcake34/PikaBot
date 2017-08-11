const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle("List Of Modules")
    .setColor(4447003)
    .setDescription("• Admin\n• Fun\n• Pokemon\n• Help\n• Other")
    .setFooter(`:information_source:️Type \`${config.prefix}cmds <ModuleName>\` to get a list of commands in that module.`);
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mdls'],
  permLevel: 0
};

exports.help = {
  name: 'modules',
  description: 'List all bot modules.',
  usage: 'modules',
  module: 'Help',
  permit: ' ',
  alias: '/ mdls'
};
