module.exports = channel => {
channel.guild.defaultChannel.send({embed: {
color:3447003,
title:'New Channel Created',
description:`Name: **${channel.name}**\nID: **${channel.id}**`
}});
}
