const config = require('../config.json');
module.exports = guild => {
client.users.get(config.botownerid).send(`Someone invited me in ${guild.name}, I will do my best there :smiley:`);
guild.defaultChannel.send({embed: { 
color:3447003,
description:`Hello there, I am a Discord.js Bot created by @Aryan 10#7484 for admin, fun, pokemon and misc commands.\nType \`${config.prefix}help\` to get a full list of commands.\nFor more support, join my discord server, https://discord.gg/W3QCsE6`}});
}
