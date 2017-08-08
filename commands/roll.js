exports.run = (client, message, args) => {
message.reply('You rolled :game_die:' + Math.floor(Math.random() * ${args[0]})).then(m=>m.react('🎲'));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Rolls a random number from 1 to X.',
  usage: 'roll [number]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};