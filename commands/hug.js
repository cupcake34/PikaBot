exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  if (author === mention) return message.reply{file: `https://media.tenor.com/images/f32c20bad2f5dfa59113ac0bfdfc26b1/tenor.gif`)};
 
  return message.channel.send({file: `https://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif`});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hug',
  description: 'hug someone 💑',
  usage: 'hug [mention]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
 
