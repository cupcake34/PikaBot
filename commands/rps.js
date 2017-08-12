const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  const rps = ["Rock", "Paper", "Scissor"]
  var random = Math.floor(Math.random()*answer.length);
  const choice = args[0].toLowerCase();
  const mychoice = rps[random];
  const draw = "it's a draw";
  const won = "you won";
  const loss = "you lost";
  var result;
  if (choice === mychoice.toLowerCase()) {
  result = draw;
  }else if (choice === "rock" && mychoice === "Scissor") {
  result = won;
  }else if (choice === "rock" && mychoice === "Paper") {
  result = loss;
  }else if (choice === "scissor" && mychoice === "Paper") {
  result = won;
  }else if (choice === "scissor" && mychoice === "Rock") {
  result = loss;
  }else if (choice === "paper" && mychoice === "Rock") {
  result = won;
  }else if (choice === "paper" && mychoice === "Scissor") {
  result = loss;
  }
  const embed = new Discord.RichEmbed()
    .setColor([3447003, 4447003][random])
    .setDescription(`I picked ${mychoice}. And your choice was ${args[0]} :thinking:\nSo ${result}!`);
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rps',
  description: 'Play Rock/Paper/Scissor with bot.,
  usage: 'rps [your choice]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
}; 
