exports.run = (client, message, args) => {
    let msg = message.content.split(" ").slice(1).join(" ");
    const colour = [];
    const num = Math.floor(Math.random()*color.length);
    const embed = new Discord.RichEmbed()
    .setDescription(msg)
    .setColor(colour[num]);
    message.delete(1);
    return message.channel.send({embed});

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['quote', 'saye'],
  permLevel: 0
};

exports.help = {
  name: 'embed',
  description: 'Says something in a embed.',
  usage: 'embed [message]',
  module: 'Fun',
  permit: ' ',
  alias: '/ quote / saye'
};