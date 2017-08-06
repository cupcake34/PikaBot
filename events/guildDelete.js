const config = require('../config.json')
module.exports = (guild, client) => {
client.users.get(config.botOwner).send(`Someone kicked/banned me from ${guild.name}, I don't know what I did. Or maybe that server got deleted🤔`);
}
