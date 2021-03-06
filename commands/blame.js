const { MessageAttachment } = require("discord.js");

exports.run = async(client, message, args, level) => {
	if(!message.guild) {
		await message.channel.send(new MessageAttachment(await client.api.blame(args.length > 0 ? args.join(" ") : message.author.username), "blame.png"))
	} else {
		 const user = message.mentions.members.first() ? message.mentions.members.first() : message.member;
		 await message.channel.send(new Discord.Attachment(await client.api.blame(user.displayName), "blame.png"))
	}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "blame",
  category: "Fun",
  description: "Blame someone",
  usage: "blame [@user]"
};