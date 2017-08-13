const items = require("../data/items.js").BattleItems;

exports.run = (client, message, args) => {
    var item;
    for (var i = 0; i < Object.keys(items).length; i++) {
        if (items[Object.keys(items)[i]].id.toLowerCase() == args[0].toLowerCase().replace(" ", "").replace("'", "")) {
            item = items[Object.keys(items)[i]];
            break;
        }
    }
    if (item) {
        message.channel.send("\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\n\n**" + capitalizeFirstLetter(item.name) + "**", {
            embed: {
                color: 3447003,
                fields: [{
                        name: "Description",
                        value: item.desc
                    },
                    {
                        name: "Generation Introduced",
                        value: item.gen,
                        inline: true
                    },
                    {
                        name: "Item ID",
                        value: item.num,
                        inline: true
                    },
                    {
                        name: "External Resources",
                        value: "[Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/" + capitalizeFirstLetter(item.name.replace(" ", "_").replace("'", "")) + ")  |  [Smogon](http://www.smogon.com/dex/sm/items/" + item.name.toLowerCase().replace(" ", "_").replace("'", "") + ")  |  [PokémonDB](http://pokemondb.net/item/" + item.name.toLowerCase().replace(" ", "-").replace("'", "") + ")"
                    }
                ],
                footer: {
                    text: capitalizeFirstLetter(item.name),
                    icon_url: "https://raw.githubusercontent.com/110Percent/beheeyem-data/master/sprites/items/" + item.name.toLowerCase().replace(" ", "-") + ".png"
                }
            }
        });
        console.log("https://raw.githubusercontent.com/110Percent/beheeyem-data/master/sprites/items/" + item.name.toLowerCase().replace(" ", "-").replace("'", "") + ".png");
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'item',
  description: 'Shows info on an item.',
  usage: 'item [item name]',
  module: 'Pokedex',
  permit: ' ',
  alias: ' '
}; 

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
