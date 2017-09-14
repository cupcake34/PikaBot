exports.run = (client, message, args) => {
const pikachu = [
   'https://sp.yimg.com/ib/th?id=OIP.3pnUZMYxkjgvG5dnwEJvIQEsEs&pid=15.1&rs=1&c=1&qlt=95&w=111&h=111',
    'https://media.giphy.com/media/MJcf161ptwviU/giphy.gif',
  'https://tse3.mm.bing.net/th?id=OIP.Mxl1Ov6x6rLk0tvgrElhZwEsDb&pid=15.1&P=0&w=228&h=168',
'https://tse1.mm.bing.net/th?id=OIP.oSBx19na-Xq2kZnad9Y5GwHgFs&pid=15.1&P=0&w=225&h=172',
 'https://sp.yimg.com/ib/th?id=OIP.t3OOCktNFRVnfnTxnxSCGQEeDa&pid=15.1&rs=1&c=1&qlt=95&w=145&h=111',
];
message.channel.send(pikachu[Math.floor(Math.random() * pikachu.length)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pikachu',
  description: 'Get a random pikachu pic',
  usage: '*pikachu',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
