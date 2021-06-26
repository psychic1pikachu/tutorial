const Discord = require('discord.js')

module.exports = {
    name: "ban",
    description: ":/",

    async run (client, message, args) {
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(':/ you dont have perms to ban this member bruhhhh');

      const person = message.mentions.members.first(); //here we are seeing if the person does specify a person to kick or doesnt
      if(!person) return message.channel.send('Please ping a person to ban');

      person.ban().then(someone => {
        message.channel.send(`${someone.user.username} has been banned`)
      })//here we are kicking the person you can change it a bit like make it send a embed but thats it for this video
    }
}
