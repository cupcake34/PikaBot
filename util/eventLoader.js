const reqEvent = (event) => require(`../events/${event}`);
const msgEvent = (event) => require(`../bot.js`)
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('roleDelete', reqEvent('roleDelete'));
  client.on('roleCreate', reqEvent('roleCreate'));
  client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
  client.on('guildMemberRemove', reqEvent('guildMemberRemove'));
  client.on('guildCreate', reqEvent('guildCreate'));
  client.on('guildBanAdd', reqEvent('guildBanAdd'));
  client.on('guildBanRemove', reqEvent('guildBanRemove'));
  client.on('guildDelete', reqEvent('guildDelete'));
  client.on('channelDelete', reqEvent('channelDelete'));
  client.on('channelCreate', reqEvent('channelCreate'));
  client.on('message', msgEvent('message'));
};