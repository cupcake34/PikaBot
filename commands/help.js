const Discord = require("discord.js");
const settings = require('../config.json');
exports.run = (client, message, args) => {
  if (!args[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    
    /* new code starts here, delete this part if not works, try embedding if works */
    const embed = new Discord.RichEmbed()
    .setColor(4447003).setAuthor(client.user.username, client.user.avatarURL).setTitle("List Of Commands").setDescription(`${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`).setFooter(`Use ${settings.prefix}help <commandname> for details on a specific command.`);
    message.author.send({embed});
    message.reply("Check your Direct Message!");/* new code ends here */
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`**${command.help.name}${command.help.alias}**\n\n**Info**\n${command.help.description}\n\n**Usage**\n${command.help.usage}\n_${command.help.permit}_\n\n**Module: ${command.help.module}**`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]',
  module: 'Help',
  permit: ' ',
  alias: '/ h'
};

/* Help & Conf example

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: ' ',
  description: ' ',
  usage: ' ',
  module: ' ',
  permit: ' ',
  alias: ' '
};

exports.run = (client, message, args) => {
// code here
};

// aliases example

aliases: ['h', 'help'],

example ends here */

/* perm levels
0 = ???
1 = Requires Manage_Messages
2 = Requires Manage_Server
3 = Requires Administration
4 = Requires Bot Ownership
*/
