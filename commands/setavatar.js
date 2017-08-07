exports.run = (client, message, args) => {
const config = require('../config.json');
let newavatartime = message.content.split(" ").slice(1);
let blasty = newavatartime.join(" ");
if(message.author.id !== config.botOwner) return message.reply('you are not my owner!!!');
if(!blasty.startsWith('http')){
message.reply(`New Avatar Set : ./images/${blasty}.png`);
client.user.setAvatar(`./images/${blasty}.png`);
}else {
message.reply(`New Avatar Set : ${blasty}`);
client.user.setAvatar(blasty);
}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setav'],
  permLevel: 0
};

exports.help = {
  name: 'setavatar',
  description: 'Sets the bot avatar by filename or url.',
  usage: 'setavatar [url or filename]',
  module: 'Admin',
  permit: 'Bot Owner Only',
  alias: 'setav'
};
