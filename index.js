const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Se connecter') {
    msg.reply('tien f8 connect 178.63.30.98:30714');
  }
});

client.login('token');
