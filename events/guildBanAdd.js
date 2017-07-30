module.exports = (guild, user) => {
user.send(`You have been banned from ${guild.name}! I don't know the reason!`);
guild.defaultChannel.send({embed: {
color:3447003,
title:'User Banned',
description:`**${user.tag}** is banned from **${guild.name}**!`
}});
}
