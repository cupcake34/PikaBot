module.exports = (client, err) => {
  console.log(err);
  const owner = client.users.get(require("../config.json").botOwner);
  owner.send(`\`\`\`js\n\n${err}\`\`\``);
};