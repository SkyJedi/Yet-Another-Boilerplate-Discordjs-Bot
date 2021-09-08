const { Client } = require('discord.js');

const handlers = require('./handlers');

require('dotenv').config();

const ClientOptions = {
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: ['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES']
};

const client = new Client(ClientOptions);

client.login(process.env.LOGIN_TOKEN).catch(error => console.error(error));

// Register our event handlers (defined below):
client.on('messageCreate', message => handlers.onMessage({ message, client }));
client.on('ready', () => handlers.onReady({ client }));
client.on('threadCreate', async (thread) => {
        if (thread.joinable) await thread.join();
    }
);
