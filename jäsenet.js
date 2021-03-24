module.exports = (client) => {
    const channelId = '693185809448173588'
  
    const updateMembers = (guild) => {
      const channel = guild.channels.cache.get(channelId)
      channel.setName(`Jäseniä: ${guild.memberCount.toLocaleString()}`)
    }
  
    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))
  
    const guild = client.guilds.cache.get('513349939829669901')
    updateMembers(guild)

    console.log('Jäsen lukua on päivitetty' )
  }