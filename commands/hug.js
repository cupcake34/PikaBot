exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  const embed = new Discord.RichEmbed()
  .setTitle("_${author} hugs ${mention}!_")
  .setcolor(ff00ff)
  .setImage("https://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif")
  .addBlankField(true);
  
  if (author === mention) return message.reply("Alone",{file: [`https://media.tenor.com/images/f32c20bad2f5dfa59113ac0bfdfc26b1/tenor.gif`]});
 
  return  message.channel.send({embed});
                         
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
 
