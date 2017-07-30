module.exports = channel => {
channel.guild.defaultChannel.send({embed: {
color:3447003,
title:'Channel Deleted',
description:`Name: **${channel.name}**\nOld Topic: **${channel.topic}**\nOld ID: **${channel.id}**`
}});
}
