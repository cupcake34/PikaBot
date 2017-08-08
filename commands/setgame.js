exports.run = (client, message, args) => {
const config = require('../config.json');
let game = message.content.split(' ').slice(1)
let playing = game.join(' ')
if(message.author.id === config.botOwner){
message.reply("New Game Set");
client.user.setGame(playing)
}else {
message.reply("I only follows my master's command.")
}
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setplay'],
  permLevel: 0
};

exports.help = {
  name: 'setgame',
  description: 'Sets the bot\'s game.',
  usage: 'setgame [game]',
  module: 'Admin',
  permit: 'Bot Owner Only',
  alias: '/ setplay'
};