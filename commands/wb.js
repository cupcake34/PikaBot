exports.run = (client, message, args) => {
const Discord = require('discord.js');
message.delete(1)
message.channel.createWebhook(`${client.user.username} Assistant`, `./images/avatar/pikachu_kanto.png`).then(wb => new Discord.WebhookClient(wb.id, wb.token).send(message.content.split(" ").slice(1).join(" ")));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['saywb'],
  permLevel: 0
};

exports.help = {
  name: 'wb',
  description: 'Says something in a webhook.',
  usage: 'wb [message]',
  module: 'Fun',
  permit: ' ',
  alias: '/ saywb'
};