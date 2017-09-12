exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  if (author === mention) return message.reply("You can't hug yourself.");
  if (mention === bot) return message.reply("You can't slap me :stuck_out_tongue_winking_eye:");
  return message.channel.send(`_${author} Hugs ${mention}!_`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hug',
  description: 'Slaps someone for fun.',
  usage: 'hug [mention]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
