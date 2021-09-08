const path = require('path');
const { ShardingManager } = require('discord.js');
require('dotenv').config();

const manager = new ShardingManager(path.join(__dirname, '/index.js'), { token: process.env.LOGIN_TOKEN });
console.info(new Date().toString());

manager.spawn().catch(console.error);
