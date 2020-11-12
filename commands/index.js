//this method will grab every file in ./commands and index then all automatically.
const fs = require('fs');
const files = fs.readdirSync(__dirname + '/');

for(const file of files) {
    if (file.match(/\.js$/) !== null && file !== 'index.js') {
        const name = file.replace('.js', '');
        exports[name] = require('./' + file);
    }
}

//this method is a manual way of doing the same but manually.  Handy if you have files that you dont want attached to a command
// module.exports = {
//     help: require('./help'),
//     invite: require('./invite'),
//     ping: require('./ping'),
//     version: require('./version')
// };

//yet another way to manually name exports
// exports.help =  require('./help');
// exports.invite = require('./invite');
// exports.ping =  require('./ping');
// exports.version =  require('./version');
