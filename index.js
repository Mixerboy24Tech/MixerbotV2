const Discord = require('discord.js')
const client = new Discord.Client()


//Komennot & asetukset
const mixer = require('./settings.json')
const jäsenet = require('./jäsenet')
const komento = require('./komento')


client.on('ready', () =>{ 
    console.log('MixerBotV2 yhdistetty palvelimelle' + mixer.version)
    client.user.setActivity('MixerBot ' + (mixer.version))
    jäsenet(client)

    komento(client, ['ping', 'test'], (message) => {
        message.channel.send('Mitä pingaat? No pong vaan!')
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
});


client.login(mixer.token);
