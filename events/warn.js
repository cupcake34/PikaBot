module.exports = (client, warning) => {
  const owner = client.users.get(require("../config.json").botOwner);
  owner.send(`\`\`\`js\n\n${warning}\`\`\``);
  console.warn(warning);
};
