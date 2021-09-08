const ping = ({ message }) => {
    message.channel.send({ content: 'Pinging...' }).then(m => {
        const ping = m.createdTimestamp - message.createdTimestamp;
        m.edit(`**:ping_pong: Pong! Your Ping Is:-** ${ping}ms`);
    });
};

module.exports = ping;
