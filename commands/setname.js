exports.run = (client, message, args) => {
const config = require('../config.json');
if(message.author.id !== config.botOwner) return message.reply('you are not my owner!!!');
let doit = message.content.split(" ").slice(1);
let pikapi = doit.join(" ");
message.reply('New Name Set!');
client.user.setUsername(pikapi);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setun'],
  permLevel: 0
};

exports.help = {
  name: 'setname',
  description: 'Sets the name of bot.',
  usage: 'setname [name]',
  module: 'Admin',
  permit: 'Bot Owner Only',
  alias: '/ setun'
};
