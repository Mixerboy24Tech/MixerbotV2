const { Client, Intents, MessageEmbed } = require('discord.js');
const myIntents = new Intents();
myIntents.add('GUILD_PRESENCES', 'GUILD_MEMBERS', 'GUILDS', 'GUILD_MESSAGES');

const client = new Client({ ws: { intents: myIntents } });

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
});


client.login(mixer.token);
