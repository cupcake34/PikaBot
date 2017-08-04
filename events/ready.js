const pikabot = require("../config.json");
module.exports = client => {

console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);

if (pikabot.streaming === true) {
  client.user.setGame(pikabot.game, 'pikabot');
  }else {
  client.user.setGame(pikabot.game)
  client.user.setStatus(pikabot.status);										    
}

}
