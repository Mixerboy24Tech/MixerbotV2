const Discord = require('discord.js')
const client = new Discord.Client()


//Komennot & asetukset
const mixer = require('./settings.json')
const jäsenet = require('./jäsenet')
const komento = require('./komento')


client.on('ready', () =>{ 
    console.log('MixerBotV2 yhdistetty palvelimelle' + mixer.version)
    client.user.setActivity('mb!apua | MixerBot ' + (mixer.version))
    jäsenet(client)

    komento(client, ['ping', 'test'], (message) => {
        message.channel.send('Mitä pingaat? No pong vaan!')
    })
    
    komento(client, ['github'], (message) => {
        message.channel.send('MixerBotV2 Lähdekoodi: <https://github.com/Mixerboy24Tech/MixerbotV2>')
    })
    
   //Embed viestit:
    
    //Allsky
    komento(client, 'allsky', (message) => {
        const Allsky =
          'https://allsky.mb24.fi/image-resize.jpg'
    
        const embed = new Discord.MessageEmbed()
          .setTitle('LocalghostFI Allsky')
          .setURL('https://allsky.mb24.fi')
          .setAuthor('LocalghostFI')
          .setImage(Allsky)
          .setThumbnail('https://cdn.mb24.fi/Logot/Localghost/G_oranssi_1.png')
          .setFooter('Viimeisin kuva Allskyltä. Kuva päivittyy 5min välein.')
          .setColor('#FF7200')
          .setTimestamp();
    
    
        message.channel.send(embed)
      }) 
    
    //komennot-lista
      komento(client, 'apua', (message) => {
        const embed2 = new Discord.MessageEmbed()
        .setColor('#FF7200')
	    .setTitle('Ohjekirja')
	    .setAuthor('MixerBotV2')
	    .setDescription('MixerBotV2 prefix on **mb!**')
	    .addFields(
		    { name: 'Komento', value: 'Allsky\nGithub', inline: true },
	        { name: 'Kuvaus', value: 'Antaa viimeisimmän Allsky kameran kuvan. (Kuva päivittyy 5min välein)\nbotin lähdekoodi.', inline: true },
	    )
        .setTimestamp()
        .setFooter('MixerBotV2, 1.24A', 'https://cdn.discordapp.com/avatars/824287169396080691/b90e73c687073f1f36a55f4e59b3906a.png');

        message.channel.send(embed2)
      })
    
});


client.login(mixer.token);
