exports.run = (client, message, args) => {
var gender = Math.floor(Math.random() * 7);
if (gender === 1){
genderName=`male`
genderCount=Math.floor(Math.random() * 177)
}
else if (gender === 2){
genderName=`female`
genderCount=Math.floor(Math.random() * 109)
}
else if (gender === 3){
genderName=`couple`
genderCount=Math.floor(Math.random() * 18)
}
else if (gender === 4){
genderName=`female`
genderCount=Math.floor(Math.random() * 109)
}
else {
genderName=`male`
genderCount=Math.floor(Math.random() * 177)
}
message.channel.send({file: `http://www.pokestadium.com/assets/img/tools/trainercard/trainers/${genderName}/${genderCount}.png`});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'trainer',
  description: 'Shows a random trainer sprite.',
  usage: 'trainer',
  module: 'Pokemon',
  permit: ' ',
  alias: ' '
};