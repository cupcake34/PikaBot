const Discord = require('discord.js');

exports.run = (client, message, args) => {

const color = [0xF44336, 0xE91E63, 0x9C27B0, 0x673AB7, 0x3F51B5, 0x2196F3, 0x03A9F4, 0x00BCD4, 0x009688, 0x4CAF50, 0x8BC34A, 0xCDDC39, 0xFFEB3B, 0xFFC107, 0xFF9800, 0xFF5722, 0x795548, 0x9E9E9E, 0x607D8B, 0x000000, 0xFFFFFF]
var random = Math.floor((Math.random()*color.length));
var newmsg = Math.floor((Math.random() * 15) + 1);
var motivatemsg;
if (newmsg == 1)
{
motivatemsg =`:ballot_box_with_check: Don't be afraid to **FAIL**.`
}
else if (newmsg == 2)
{
motivatemsg =`:ballot_box_with_check: You fail only when you __**STOP TRYING**__`
}
else if (newmsg == 3)
{
motivatemsg =`:ballot_box_with_check: Difficult roads often leads to beautiful destinations.`
}
else if (newmsg == 4)
{
motivatemsg =`:ballot_box_with_check: Wake up with destination.\nGo to bed with satisfaction.`
}
else if (newmsg == 5)
{
motivatemsg =`:ballot_box_with_check: Don't watch the clock, do what it does\n**KEEP GOING**`
}
else if (newmsg == 6)
{
motivatemsg =`:ballot_box_with_check: If it doesn't challenge you, it will not change you.`
}
else if (newmsg == 7)
{
motivatemsg =`:ballot_box_with_check: Repeat after me,\n**I CAN DO IT**`
}
else if (newmsg == 8)
{
motivatemsg =`:ballot_box_with_check: Work hard in silence, let your success be your noise.`
}
else if (newmsg == 9)
{
motivatemsg =`:ballot_box_with_check: Start where you are.\nUse what you can.\nDo what you can.`
}
else if (newmsg == 10)
{
motivatemsg =`:ballot_box_with_check: Don't limit you challenges. **CHALLENGE YOUR LIMITS**!`
}
else if (newmsg == 11)
{
motivatemsg =`:ballot_box_with_check: A river cuts through the rock, not because of it's power, but because of it's presistence.`
}
else if (newmsg == 12)
{
motivatemsg =`:ballot_box_with_check: **YOU CAN and YOU WILL**!`
}
else if (newmsg == 13)
{
motivatemsg =`:ballot_box_with_check: A tiger doesn't lose sleep over the oponion of sheep.`
}
else if (newmsg == 14)
{
motivatemsg =`:ballot_box_with_check: Expect PROBLEMS and eat them from BREAKFAST!`
}
else
{
motivatemsg =`:ballot_box_with_check: Stay positive, WORK HARD and make it happen.`
}

const embed = new Discord.RichEmbed()
.setColor(color[random])
.setDescription(motivatemsg);
message.channel.send({embed}).then(m=>m.react('☑'));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'motivate',
  description: 'Sends a motivational message.',
  usage: 'motivate',
  module: 'Other',
  permit: ' ',
  alias: ' '
};
