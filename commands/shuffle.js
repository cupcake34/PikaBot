exports.run = (client, message, args) => {

let randomShuffle = Math.floor(Math.random() * 802);
message.channel.send({file: `https://pldh.net/media/pokemon/shuffle/${randomShuffle}.png`});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'shuffle',
  description: 'Sends a random Pokemon shuffle icon.',
  usage: 'shuffle',
  module: 'Pokemon',
  permit: ' ',
  alias: ' '
};