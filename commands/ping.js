exports.run = (client, message, args) => {
message.channel.send('Pong?').then(sent => {
    sent.edit(`:ping_pong:Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
    sent.react('🏓');
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping Pong command.',
  usage: 'ping',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
