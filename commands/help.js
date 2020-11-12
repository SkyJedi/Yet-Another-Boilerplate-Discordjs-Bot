const Discord = require('discord.js');
const prefix = process.env.PREFIX;

const help = ({ message }) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Help')
        .setColor('2D7C2F')
        .addField(`${prefix}ping`, 'returns the ping from the bot.')
        .addField(`${prefix}version`, 'returns the version of the bot.')
        .addField(`${prefix}invite`, 'returns an invite for the bot.')
        .addField('Bot Information', '[SkyJedi\'s Bot Emporium](https://discord.gg/G8au6FH)')
        .addField('Support SkyJedi', '[SkyJedi\'s Patreon](https://www.patreon.com/SkyJedi)');
    message.channel.send({ embed });
};

module.exports = help;
