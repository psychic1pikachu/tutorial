const Discord = require('discord.js');

module.exports = {
  name: "serverinfo",
  description:  "info for the server",

  async run (client, message, args){
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
    .addField("Owner", message.guild.owner, true)
    .addField("Region", `${message.guild.region}`, true)
    .addField("Members", `Total members: ${message.guild.members.cache.size} | Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size} | Bots:${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    message.channel.send(embed)
  }
}