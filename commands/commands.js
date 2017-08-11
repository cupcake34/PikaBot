const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (client, message, args) => {
  const commandNames = Array.from(client.commands.keys());   
  const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  message.channel.send(`**List Of Commands in ${args[0]}**\n\`\`\`${client.commands.filter(c => c.help.module === args[0]).map(cmd => {
    `${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`
  })}\`\`\``);
  message.channel.send({embed: {
    color:4447003,
    description:`Type \`${config.prefix}h <CommandName>\` for help on a spefified command. Eg. \`${config.prefix}h achievement\``
  }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cmds'],
  permLevel: 0
};

exports.help = {
  name: 'commands',
  description: 'Lists all the bot commands from a certain module.',
  usage: 'commands <module name>',
  module: 'Help',
  permit: ' ',
  alias: '/ cmds'
};
