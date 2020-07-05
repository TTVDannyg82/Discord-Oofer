const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("The server is ready to be OOFED. The command is (your prefix)oof / o!oof");
});
 
client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

if(message.content.startsWith("oof"){
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
message.channel.send("OOF")
}

client.login(config.token);
