const versionNumber = require('../package').version;

const version = ({ message }) => {
	message.channel.send(`**Version:** ${versionNumber}`);
};

module.exports = version;
