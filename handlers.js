const knownCommands = require('./commands/index');
const prefix = process.env.PREFIX;
const version = require('./package').version;

// Called every time a message comes in:
const onMessage = ({ message, client }) => {
    // Ignore messages from bots
    if (message.author.bot) return;

    //check for all the permissions the bot needs and return if they are not met
    if (message.channel.type !== 'dm') {
        if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) return;
    }

    //Split the message into an params array, search for a prefix and if found separate the command out
    let params = message.content.toLowerCase().split(' ');

    let command = params.find(x => x.startsWith(prefix));
    if (!command) return;

    let commandIndex = params.findIndex(x => x.startsWith(prefix));
    params.splice(0, commandIndex);

    params = params.filter(x => x === command);
    command = command.replace(prefix, '');

    // If the command is known, let's execute it:
    if (command in knownCommands) {
        console.info(`${message.author.username}, ${command}, ${params}, ${new Date()}`);
        knownCommands[command]({ message, client, params });
    }

};

// Called every time the bot connects to chat:
const onReady = ({ client }) => {
    console.info(`Logged in as ${client.user.username}!`);
    console.info(`Version: ${version}`);
};

exports.onMessage = onMessage;
exports.onReady = onReady;
