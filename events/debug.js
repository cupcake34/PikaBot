module.exports = (client, debugmsg) => {
  const owner = client.users.get(require("../config.json").botOwner);
  owner.send(`\`\`\`js\n\n${debugmsg}\`\`\``);
  console.log(debugmsg);
};