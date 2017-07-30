module.exports = (guild, user) => {
guild.defaultChannel.send({embed: {
color:3447003,
title:'User Unbanned',
description:`${user.tag} is unbanned from ${guild.name}!`
}});
}
