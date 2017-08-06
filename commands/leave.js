exports.run = (client, message, args) => {
const config = require('../config.json');
if(message.author.id !== config.botOwner) return message.reply('you are not my owner!!!'); 
let hyperbeam = message.content.split(" ").slice(1);
let servername = hyperbeam.join(" ");
message.reply('I just left ' + servername);
client.guilds.find('name', servername).leave()
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'leave',
  description: 'Leaves a joined server.',
  usage: 'leave [servername]',
  module: 'Admin',
  permit: 'Bot Owner Only',
  alias: 'leave'
};
