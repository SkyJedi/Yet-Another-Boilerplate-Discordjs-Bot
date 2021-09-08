const Discord = require('discord.js');

/*
simple command where the bot returns an invite link for the bot
generate the required permission string https://discordapi.com/permissions.html
*/
const invite = ({ message, client }) => {
    const permissions = '288832'
    const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`**Invite**`)
        .setDescription(`Click [here](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=${permissions}) to invite the bot to your server!`);
    message.channel.send({ embeds: [embed] });
};

module.exports = invite;
