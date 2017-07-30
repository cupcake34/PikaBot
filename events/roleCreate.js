module.exports = role => {
role.guild.defaultChannel.send({embed: {
color:3447003,
title:'New Role Created',
description:`Name: ${role.name}\nID: ${role.id}`
}});
}
