const abilities = require("../data/abilities.js").BattleAbilities;

exports.run = (client, message, args) => {
    for (var i = 0; i < Object.keys(abilities).length; i++) {
        if (abilities[Object.keys(abilities)[i]].name.toLowerCase() == args.toLowerCase()) {
            var ability = abilities[Object.keys(abilities)[i]];
            break;
        }
    }
    var abilityDesc = ability.desc;
    if (!abilityDesc) {
        abilityDesc = ability.shortDesc;
    }
    if (ability) {
        message.channel.send("\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\n\n**" + capitalizeFirstLetter(ability.name) + "**", {
            embed: {
                color: 35071,
                fields: [{
                        name: "Description",
                        value: abilityDesc
                    },
                    {
                        name: "Rating (-2 to 5)",
                        value: String(ability.rating)
                    },
                    {
                        name: "External Resources",
                        value: "[Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/" + capitalizeFirstLetter(ability.name.replace(" ", "_")) + "_(Ability\\))  |  [Smogon](http://www.smogon.com/dex/sm/abilities/" + ability.name.toLowerCase().replace(" ", "_") + ")  |  [PokémonDB](http://pokemondb.net/ability/" + ability.name.toLowerCase().replace(" ", "-") + ")"
                    }
                ]
            }
        });
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ability',
  description: 'Shows info on an ability.',
  usage: 'ability <ability name>',
  module: 'Pokedex',
  permit: ' ',
  alias: ' '
}; 

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}