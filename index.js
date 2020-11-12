const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config');
const handlers = require('./handlers');

client.login(config.token).catch(error => console.error(error));

// Register our event handlers (defined below):
client.on('message', message => handlers.onMessage(message, client));
client.on('ready', () => handlers.onReady(client));
