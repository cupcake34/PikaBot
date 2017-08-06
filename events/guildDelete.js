const config = require("../config.json");
module.exports = guild => {
  guild.client.users.get(config.botOwner).send("Someone kicked/banned me from ${guild.name}, or maybe I left, or the server got deleted.");
}
