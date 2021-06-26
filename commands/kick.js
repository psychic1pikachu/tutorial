const Discord = require('discord.js')

module.exports = {
    name: "kick",
    description: ":/",

    async run (client, message, args) {
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(':/ you dont have perms to kick this member bruhhhh');

      const person = message.mentions.members.first(); //here we are seeing if the person does specify a person to kick or doesnt
      if(!person) return message.channel.send('Please ping a person to kick');

      person.kick().then(someone => {
        message.channel.send(`${someone.user.username} has been kicked`)
      })//here we are kicking the person
    }
}
