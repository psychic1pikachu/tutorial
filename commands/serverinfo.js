const Discord = require('discord.js');

module.exports = {
  name: "serverinfo",
  description:  "info for the server",

 run: async function (client, message, args) {
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
    .addField("Owner", message.guild.owner, true)
    .addField("Region", `${message.guild.region}`, true)
    .addField("all members", message.guild.memberCount)
    .addField("channels lol", message.guild.channels.cache.size, true)
    .addField("Roles", message.guild.roles.cache.size, true)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setFooter(`Server id: ${message.guild.id}, created at: ${message.guild.createdAt.toDateString()}`)
    message.channel.send(embed)
  }
}