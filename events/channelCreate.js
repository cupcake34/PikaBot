module.exports = channel => {
if (channel.type !== "text") return;
channel.guild.defaultChannel.send({embed: {
color:3447003,
title:'New Channel Created',
description:`Name: **${channel.name}**\nID: **${channel.id}**`
}});
}
