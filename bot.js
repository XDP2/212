const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("608749318740115466")
setInterval(function() {
channel.send(`ala henko klokoo`);
}, 30)
})

client.login(process.env.BOT_TOKEN);