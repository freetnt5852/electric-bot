// This event executes when a new member joins a server. Let's welcome them!

module.exports = (client, member) => {
  // Load the guild's settings
  const settings = client.settings.get(member.guild.id);

  // If welcome is off, don't proceed (don't welcome the user)
  if (settings.welcomeEnabled !== "true") return;

  // Replace the placeholders in the welcome message with actual data
  const welcomeMessage = settings.welcomeMessage.replace(/{{user}}/g, `<@${member.id}>`).replace(/{{server}}/g, member.guild.name).replace(/{{count}}/g, member.guild.memberCount);

  // Send the welcome message to the welcome channel
  // There's a place for more configs here.
  const chan = member.guild.channels.find("name", settings.welcomeChannel)
  if(!chan) return;
  chan.send(welcomeMessage).catch(console.error);
};