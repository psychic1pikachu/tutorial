const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kick",
    description: "kick ppl lol",

    async run (client, message, args) {
      //first we are going to see if the user has perms
      if(!message.member.hasPermission("KICK_MEMBERS")) return;
      if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I don\'t have perms to use this command');// here we are going to check if the bot has perms to kick ppl

      const personTokick = message.mentions.members.first() || message.guild.members.cache.get(args[0]); //here we are going to see if the author used id to kick memeber  //here we are going to specify who to kick

      if(!personTokick) return message.channel.send('Please specify someone to kick via mention or id');

      if(personTokick.id === message.author.id) return message.channel.send(':/ why you want to kick urself bruhhhhhhh')// here we are seeing if the author wasnt to kick himself

      const reason = args.slice(1).join(" "); // here we are seeing if there is a reason to the kick

      await personTokick.kick(); // here we are kicking person

      if(reason === null) reason = 'No reason';

      message.channel.send(`kicked: <@${personTokick.id}> \n kicked by: <@${message.author.id}>\n reason: ${reason}`)
    }
}