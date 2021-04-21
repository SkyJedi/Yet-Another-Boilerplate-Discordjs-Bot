const Discord = require('discord.js');
const client = new Discord.Client();
const handlers = require('./handlers');

require('dotenv').config();
client.login(process.env.LOGIN_TOKEN).catch(error => console.error(error));

// Register our event handlers (defined below):
client.on('message', message => handlers.onMessage({ message, client }));
client.on('ready', () => handlers.onReady({ client }));
