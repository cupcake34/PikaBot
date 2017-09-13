exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  if (author === mention) return message.reply(`_using thunderbolt on yourself 😜_`, {
    file: "https://lh6.googleusercontent.com/-Srx9EQiNYRI/UYqRCSpO_9I/AAAAAAAAFzA/hWgPJ9CXVbU/s426/pikachu-shocks-ash+2.gif" // Or replace with FileOptions object
});
  
  
 
  return  message.channel.send(`_${author} used thunderbolt on  ${mention}!_`, {
    file: "https://www.teechu.com/wp-content/uploads/2016/10/pikachu-facts-5.gif" // Or replace with FileOptions object
});
    
                         
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'thunderbolt',
  description: 'use thunderbolt on someone ',
  usage: 'thunderbolt [mention]',
  module: 'thunderbolt',
  permit: ' ',
  alias: ' '
};
