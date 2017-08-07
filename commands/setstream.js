exports.run = (client, message, args) => {
const config = require('../config.json');
let game = message.content.split(' ').slice(1)
let playing = game.join(' ')
if(message.author.id === config.botOwner){
message.reply("New Game Set");
client.user.setGame(playing, 'discordapp.com')
}else {
message.reply("I only follows my master's command.")
}
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'setstream',
  description: 'Sets the streaming game of bot.',
  usage: 'setstream [game]',
  module: 'Admin',
  permit: 'Bot Owner Only',
  alias: ' '
};
