const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    description: "ban ppl lol",

    async run (client, message, args) {
      //first we are going to see if the user has perms
      if(!message.member.hasPermission("BAN_MEMBERS")) return;
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have perms to use this command');// here we are going to check if the bot has perms to ban ppl

      const personToban = message.mentions.members.first() || message.guild.members.cache.get(args[0]); //here we are going to see if the author used id to ban memeber  //here we are going to specify who to ban

      if(!personToban) return message.channel.send('Please specify someone to ban via mention or id');

      if(personToban.id === message.author.id) return message.channel.send(':/ why you want to ban urself bruhhhhhhh')// here we are seeing if the author wasnt to ban himself

      const reason = args.slice(1).join(" "); // here we are seeing if there is a reason to the ban

      await personToban.ban(); // here we are baning person

      if(reason === null) reason = 'No reason';

      message.channel.send(`banned: <@${personToban.id}> \n banned by: <@${message.author.id}>\n reason: ${reason}`)
    }
}