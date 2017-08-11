exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mention.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  if (author === mention) return message.reply("You can't punch yourself.");
  if (mention === bot) return message.reply("You can't punch me :stuck_out_tongue_winking_eye:");
  return message.channel.send(`_${author} punched ${mention}!_`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'punch',
  description: 'Punches someone for fun.',
  usage: 'punch [mention]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
