module.exports = role => {
role.guild.defaultChannel.send({embed: {
color:3447003,
title:'Role Deleted',
description:`Name: ${role.name}\nID: ${role.id}`
}});
}
