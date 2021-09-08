const number = require('../package').version;

const version = ({ message }) => {
    message.channel.send({ content: `**Version:** ${number}`});
};

module.exports = version;
