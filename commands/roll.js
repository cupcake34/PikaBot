exports.run = (client, message, args) => {
let num = message.content.split(" ").slice(1).join(" ");
message.reply('You rolled :game_die:' + Math.floor(Math.random() * num)).then(m=>m.react('🎲'));
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
