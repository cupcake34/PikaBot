const settings = require('../config.json');
exports.run = (client, message, args) => {
  if (!args[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.sendCode('asciidoc', `
All Modules Command List\n\n[Use ${settings.prefix}help <commandname> for details on a specific command]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `
${command.help.name}\n= Info =\n${command.help.description}\n\n= Usage =\n${settings.prefix}${command.help.usage}\n\nModule: ${command.help.module}`);
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
  module: 'Help'
};
